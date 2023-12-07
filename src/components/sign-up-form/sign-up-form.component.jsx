import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const SignUpForm = () => {
  const defaultField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formfields, setFormFields] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = formfields;
  console.log(formfields);

  const resetFormFields = () => {
    setFormFields(defaultField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = formfields.email;
    const pass = formfields.password;
    const confirmPass = formfields.confirmPassword;
    if (pass === confirmPass) {
      console.log(`Password: ${pass}\nConfirmPassword: ${confirmPass}`);
      try {
        const response = await createAuthUserWithEmailAndPassword(
          userEmail,
          pass
        );
        await createUserDocFromAuth(response.user, { displayName });
        resetFormFields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else {
          console.log("User creation encountered an error", error);
        }
      }
    } else {
      alert("Passwords do not match");
      return;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
