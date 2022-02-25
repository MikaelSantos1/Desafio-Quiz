
import { Container } from "./styles";
export function Result({results,setEndgame,setPoints}){
   function resetGame(){
      setEndgame(false)
      setPoints(0)
   }
   return(
      
       <Container>
          <h1>Resultado</h1>
          <h3>Voce acertou {results} questões do Quiz.
          <br />Parabens!</h3>
          <button onClick={()=>{resetGame()}}>Reiniciar Quiz</button>
       </Container>
   )


}