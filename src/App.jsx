import { GlobalStyle } from "./styles/globalStyle";
import { Header } from './components/Header'
import { ContextProvider } from "./Hooks/UserContext";
import { UserInput } from "./components/UserInput";


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
