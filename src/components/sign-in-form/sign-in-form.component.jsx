import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response.user);
      resetFormFields();
    } catch (error) {
      console.log("User sign in encountered an error", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Aleady have an account?</h2>
      <span>Sign in with your email and password</span>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
