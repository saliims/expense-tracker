import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "./expenseAction";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const StyledFormRowVertical = styled(FormRowVertical)`
  flex-basis: 100%;

  @media (min-width: 576px) {
    flex-basis: auto;
    width: calc(50% - 1rem);
    margin-right: 1rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  align-self: center;
`;

export default function ExpenseForm() {
  const { loading } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !amount) return;
    dispatch(addExpense({ description, amount, category }));
    setDescription("");
    setAmount("");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormRowVertical label="Category">
        <Input
          type="text"
          id="category"
          value={category}
          disabled={loading}
          onChange={(e) => setCategory(e.target.value)}
        />
      </StyledFormRowVertical>
      <StyledFormRowVertical label="Description">
        <Input
          type="text"
          id="description"
          value={description}
          disabled={loading}
          onChange={(e) => setDescription(e.target.value)}
        />
      </StyledFormRowVertical>
      <StyledFormRowVertical label="Amount">
        <Input
          type="number"
          id="amount"
          value={amount}
          disabled={loading}
          onChange={(e) => setAmount(e.target.value)}
        />
      </StyledFormRowVertical>
      <ButtonContainer>
        <Button disabled={loading} size="small">
          {!loading ? "Add expense" : <SpinnerMini />}
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}
