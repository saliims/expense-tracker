/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "../../ui/Table";
import Menus from "../../ui/Menu";
import { formatCurrency } from "../../utils/helpers";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Expense = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function ExpenseRow({
  expense: { id: expenseId, category, description, amount },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Expense>{category}</Expense>

      <Stacked>
        <span>{description}</span>
      </Stacked>

      <Amount>{formatCurrency(amount)}</Amount>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={expenseId} />
          <Menus.List id={expenseId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/expenses/${expenseId}`)}
            >
              See details
            </Menus.Button>
            <Modal.Open open="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="delete">
            <ConfirmDelete resourceName="expense" disabled />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default ExpenseRow;
