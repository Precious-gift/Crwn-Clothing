import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>This is the sign in page</h1>
      <button onClick={logGoogleUser} style={{ marginBottom: "10px" }}>
        Sign In With Google Popup
      </button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
