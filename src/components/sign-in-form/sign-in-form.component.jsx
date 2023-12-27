import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const { setCurrentUser } = useContext(UserContext);

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
      setCurrentUser(response.user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log(error);
          break;
      }
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
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
