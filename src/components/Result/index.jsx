import { useState } from "react";
import { Container } from "./styles";
export function Result({results,setEndgame}){
   return(
       <Container>
          <h1>Resultado</h1>
          <h3>Voce acertou {results} questões do Quiz.
          <br />Parabens!</h3>

          <button onClick={()=>{setEndgame(false)}}>Reiniciar Quiz</button>
       </Container>
   )


}