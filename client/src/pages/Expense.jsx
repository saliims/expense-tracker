import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../features/expenses/expenseAction";
import styled from "styled-components";
import ExpenseForm from "../features/expenses/ExpenseForm";
import SpinnerMini from "../ui/SpinnerMini";
import ExpensesTable from "../features/expenses/ExpensesTable";

const ExpenseLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableWrapper = styled.div`
  grid-column: 2;
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
      <ExpenseForm />
      <TableWrapper>
        <ExpensesTable />
      </TableWrapper>
    </ExpenseLayout>
  );
}
