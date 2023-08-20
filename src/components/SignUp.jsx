import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState([]);

  const signUpBtnHandler = () => {
    setSignUp((perv) => {
      return [...perv, { email: email, password: password }];
    });
    console.log(signUp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        return userCredentials && console.log(userCredentials);
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="container">
      <h3>Create Account</h3>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={signUpBtnHandler}>Sign Up</button>
    </div>
  );
};

export default SignUp;
