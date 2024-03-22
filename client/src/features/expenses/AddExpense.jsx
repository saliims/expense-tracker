import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ExpenseForm from "./ExpenseForm";

export default function AddExpense() {
  return (
    <div>
      <Modal>
        <Modal.Open open="expense-form">
          <Button>Add new expense</Button>
        </Modal.Open>
        <Modal.Window name="expense-form">
          <ExpenseForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
