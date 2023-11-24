import { useState } from "react";

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={() => {}}>
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
