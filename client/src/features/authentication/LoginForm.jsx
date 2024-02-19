import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./authActions";

function LoginForm() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [identifier, setIdentifier] = useState("test");
  const [password, setPassword] = useState("test1234");

  function handleSubmit(e) {
    e.preventDefault();
    if (!identifier || !password) return;
    dispatch(userLogin({ identifier, password }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address or username">
        <Input
          type="text"
          id="identifier"
          autoComplete="username"
          value={identifier}
          disabled={loading}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={loading} size="large">
          {!loading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
