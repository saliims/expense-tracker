import ExpenseChart from "../features/dashboard/ExpenseChart";

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ padding: "1.5rem", fontSize: "2.5rem" }}>Expenses chart</h1>
      <ExpenseChart />
      <h1 style={{ padding: "1.5rem", fontSize: "2.5rem" }}>Incomes chart</h1>
      <ExpenseChart />
    </div>
  );
}
