import { useState, useEffect } from "react";
import Table from "../../ui/Table";
import Menus from "../../ui/Menu";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/SpinnerMini";
import Pagination from "../../ui/Pagination";
import ExpenseRow from "./ExpenseRow";
import { useSelector } from "react-redux";
import { PAGE_SIZE } from "../../utils/constants";

function ExpensesTable() {
  const { expenses, loading } = useSelector((state) => state.expenses);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [totalPages, setTotalPages] = useState(1);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    if (expenses.length > 0) {
      setTotalExpenses(expenses.length);
      setTotalPages(Math.ceil(expenses.length / PAGE_SIZE));
    }
  }, [expenses]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Spinner />;
  if (!expenses.length) return <Empty resource="expenses" />;

  // Calculate the start and end index of expenses to display on the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalExpenses);

  // Get the expenses to display on the current page
  const expensesOnPage = expenses.slice(startIndex, endIndex);

  return (
    <Menus>
      <Table columns="0.6fr 2fr 1fr 1fr">
        <Table.Header>
          <div>Category</div>
          <div>Description</div>
          <div>Amount</div>
        </Table.Header>

        <Table.Body
          data={expensesOnPage}
          render={(expense) => (
            <ExpenseRow key={expense._id} expense={expense} />
          )}
        />
      </Table>
      <Table.Footer>
        <Pagination count={totalExpenses} onPageChange={handlePageChange} />
      </Table.Footer>
    </Menus>
  );
}

export default ExpensesTable;
