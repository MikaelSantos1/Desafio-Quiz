import { GlobalStyle } from "./styles/globalStyle";
import { Header } from './components/Header'
import { ContextProvider } from "./Hooks/UserContext";
import { UserInput } from "./components/UserInput";
import { Quiz } from "./components/Quiz";
import { useUser } from "./Hooks/UserContext";

function App() {
  return (
    <>
      <ContextProvider> 
        <Header />
        <UserInput/>
        <GlobalStyle />
      </ContextProvider>
    </>

  );
}

export default App;
