
import { Container } from "./styles";
export function Result({results,setEndgame}){
   return(
       <Container>
          <h1>Resultado</h1>
          <h3>Voce acertou {results} questões do Quiz.
          <br />Parabens!</h3>

          <button onClick={()=>{setEndgame(false),setPoints(0)}}>Reiniciar Quiz</button>
       </Container>
   )


}