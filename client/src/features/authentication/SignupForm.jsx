import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./authActions";
import FormRowVertical from "../../ui/FormRowVertical";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, formState, getValues, handleSubmit, trigger } = useForm();
  const { errors } = formState;

  function onSubmit({ username, email, password }) {
    dispatch(registerUser({ username, email, password }));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={loading}
          {...register("username", { required: "This field is required" })}
          onBlur={() => trigger("username")}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={loading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          onBlur={() => trigger("email")}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={loading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          onBlur={() => trigger("password")}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={loading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords aren't the same",
          })}
          onBlur={() => trigger("passwordConfirm")}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* type is an HTML attribute! */}

        <Button disabled={loading}>Signup</Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignupForm;
