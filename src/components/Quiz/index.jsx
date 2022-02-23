import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"
export function Quiz() { 
    const [questions, setQuestions] = useState([])
    const [dificulty, setDificulty] = useState('easy')
    const [gameStart, setGameStart] = useState(false)
    const [answers,setAnswers]=useState([])
    
    useEffect(() => {
        async function loadQuestion() {
                const { data } = await api.get(`/questions?limit=10&difficulty=${dificulty}`)
                setQuestions(data)  
                setAnswers(data.map(question=>question.answers))
        }
        loadQuestion()
    }, [dificulty])
    
    function HandlestartGame() {
        setGameStart(true)
    }
    function nextQuestion(){
        const counter =0
        counter++
    }
   console.log(answers)
    
    return (
        <Container>
            {
                !gameStart ?
                    (<>
                        <h3>Escolha a diculdade</h3>
                        <div >
                            <label>Díficil</label>
                            <input
                                type="radio"
                                
                                value="hard"
                                checked={dificulty === 'hard'}
                                onChange={(event) =>{ setDificulty(event.target.value) }}
                            />

                        </div>

                        <div>
                            <label>Facil</label>
                            <input
                                type="radio"
                                value="easy"
                                checked={dificulty === 'easy'}
                                onChange={(event) => { setDificulty(event.target.value) }}
                            />
                        </div>
                        <button onClick={HandlestartGame}>
                Start game
            </button>
                    </>)
                    : (<>
                    <div>

                   
                        <ul >
                            <li >
                                {questions && questions[0].question}
                            </li>
                        </ul>
                        </div>
                    </>)
            }
            <div>
                
                <ul>
                <li>{answers && answers[0].answer_a}</li>
                <li> {answers && answers[0].answer_b}</li>
                <li> {answers && answers[0].answer_c}</li>
                <li>   {answers && answers[0].answer_d}</li>
                   
                   
                 
                    
                   
                    {/* {answers.map(answer=>console.log(answer.answer_a))} */}
                </ul>
                
            </div>

           


        </Container>
    )
}