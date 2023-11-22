import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1>This is the sign in page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
