import "./App.css";
import { FormProvider } from "./context/form-context";
import { WelcomePage } from "./pages/welcome-page";
function App() {
  return (
    <div className="vh-100">
      <FormProvider>
        <WelcomePage />
      </FormProvider>
    </div>
  );
}

export default App;
