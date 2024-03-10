import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../features/expenses/expenseAction";
import styled from "styled-components";
import ExpenseForm from "../features/expenses/ExpenseForm";
import SpinnerMini from "../ui/SpinnerMini";

const ExpenseLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Change to a single column layout */
  }
`;

export default function Expense() {
  const dispatch = useDispatch();
  const { expenses, loading } = useSelector((state) => state.expenses);

  useEffect(() => {
    // Dispatch the fetchExpenses thunk when the component mounts
    dispatch(fetchExpenses());
  }, [dispatch]);

  if (loading) {
    return <SpinnerMini />;
  }

  return (
    <ExpenseLayout>
      <ExpenseForm />

      {expenses.map((expense) => (
        <div key={expense._id}>
          {expense.description} {expense.category} {expense.amount}
        </div>
      ))}
    </ExpenseLayout>
  );
}
