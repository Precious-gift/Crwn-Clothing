import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signInUserWithEmailAndPassword(email, password);
    console.log(response.user);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;
