import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return <div>SignIn</div>;
};
export default SignIn;
