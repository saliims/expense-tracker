import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../features/expenses/expenseAction";
import styled from "styled-components";
import SpinnerMini from "../ui/SpinnerMini";
import ExpensesTable from "../features/expenses/ExpensesTable";
import AddExpense from "../features/expenses/AddExpense";

const ExpenseLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto; /* Enable horizontal scrolling if needed */
  max-width: 100%; /* Ensure the table wrapper does not exceed the screen width */
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

export default function Expense() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  if (loading) {
    return <SpinnerMini />;
  }

  return (
    <ExpenseLayout>
      <TableWrapper>
        <ExpensesTable />
      </TableWrapper>
      <AddExpense />
    </ExpenseLayout>
  );
}
