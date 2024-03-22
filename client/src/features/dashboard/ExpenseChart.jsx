import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchExpenses } from "../expenses/expenseAction";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDarkMode } from "../../context/DarkModeContext";

const ExpenseChart = () => {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const { expenses, loading } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  if (loading) {
    return <SpinnerMini />;
  }

  // Format expenses data for Recharts
  const formattedData = expenses.map((expense) => ({
    category: expense.category,
    amount: expense.amount,
  }));

  // Define colors based on dark mode
  const colors = isDarkMode
    ? {
        amounts: { stroke: "#dc2626", fill: "#dc2626" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        amounts: { stroke: "#dc2626", fill: "#dc2626" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          tick={{ fill: colors.text }}
          tickLine={{ stroke: colors.text }}
        />
        <YAxis
          unit="DZD"
          tick={{ fill: colors.text }}
          tickLine={{ stroke: colors.text }}
          width={100}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill={colors.amounts.fill} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
