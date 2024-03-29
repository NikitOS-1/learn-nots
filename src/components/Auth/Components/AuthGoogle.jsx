import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import GoogleButton from "react-google-button";

const AuthGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        console.log(token);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div style={{ margin: "15px" }}>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};
export default AuthGoogle;
