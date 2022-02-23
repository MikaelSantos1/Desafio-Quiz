import { GlobalStyle } from "./styles/globalStyle";
import {Header} from './components/Header'

import { UserInput } from "./components/UserInput";
import { Quiz } from "./components/Quiz";


function App() {

  return (
    <>
    <Header/>
   <Quiz/>
    <GlobalStyle/>
    </>
    
  );
}

export default App;
