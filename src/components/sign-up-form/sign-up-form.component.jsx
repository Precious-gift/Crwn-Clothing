import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = formfields.email;
    const pass = formfields.password;
    const confirmPass = formfields.confirmPassword;
    if (pass === confirmPass) {
      console.log(`Password: ${pass}\nConfirmPassword: ${confirmPass}`);
      const response = createAuthUserWithEmailAndPassword(userEmail, pass);
      response
        .then((result) => {
          console.log(result.user);
          const userDocRef = createUserDocFromAuth(result.user);
          console.log(userDocRef);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
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
