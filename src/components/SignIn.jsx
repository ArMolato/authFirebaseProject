import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInState, setLoginState] = useState([]);

  const loginBtnHandler = () => {
    console.log("Login button is ready");
    //console.log({ email: loginEmail, password: loginPassword });
    setLoginState((perv) => [...perv, { email, password }]);
    console.log(signInState);
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => console.log(useCredentials))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h3>Login into your Account</h3>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter yout password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={loginBtnHandler}>Login</button>
    </div>
  );
};

export default SignIn;
