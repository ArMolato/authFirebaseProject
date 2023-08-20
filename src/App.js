import "./styles.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";

export default function App() {
  return (
    <main className="App">
      <h1>Firebase Project</h1>
      <p>
        <em>Exploring backend tools</em>
      </p>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </main>
  );
}
