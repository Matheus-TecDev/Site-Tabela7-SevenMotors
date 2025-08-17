import LoginProvider from "./contexts/LoginContext";
import Paths from "./routes";

const App = () => {
  return (
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
    </>
  );
}
 
export default App;