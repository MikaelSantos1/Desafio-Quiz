import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"
import { Result } from "../Result"
export function Quiz() {
    const [questions, setQuestions] = useState([])
    const [points,setPoints]=useState(0)
    const [dificulty, setDificulty] = useState('easy')
    const [gameStart, setGameStart] = useState(false)
    const [answers, setAnswers] = useState([])
    const [selected, setSelected] = useState('')
    const [counter,setCounter]=useState(0)
    const [endGame,setEndgame]=useState(false)
    
    if (counter > 9){
        setCounter(0)
        setGameStart(false)
        setEndgame(true)
    } 
   
    useEffect(() => {
        async function loadQuestion() {
            const { data } = await api.get(`/questions?limit=10&difficulty=${dificulty}`)
            setQuestions(data)
            setAnswers(data.map(question => question.answers))
        }
        loadQuestion()

    }, [dificulty])

    function HandlestartGame() {
        setGameStart(true)
    }


    function checkIfAnswerIsCorrect(id) {
        if (answers[counter]?.answer_a === id)  {
            setSelected('a')
            setCounter(counter+1)
        }
        if (answers[counter]?.answer_b === id) 
        {
            setSelected('b')
            setCounter(counter+1)
        }
        if (answers[counter]?.answer_c === id) 
        {
            setSelected('c')
            setCounter(counter+1)
        }
        if (answers[counter]?.answer_d === id) 
        {
            setSelected('d')
            setCounter(counter+1)
        }

        const correctAnswer = questions[counter]?.correct_answers
       
        if (correctAnswer.answer_a_correct === 'true' && selected==='a')
        {
            setPoints(points+1)
        } 
        if (correctAnswer.answer_b_correct === 'true' && selected ==='b') {
            setPoints(points+1)
        }
        if (correctAnswer.answer_c_correct === 'true' && selected ==='c') {
            setPoints(points+1)
        }
        if (correctAnswer.answer_d_correct === 'true' && selected ==='d') {
            setPoints(points+1)
        }
        
    }

    console.log(points)
    console.log(questions[counter])
    return (
        <Container>
            {

                !gameStart && !endGame  ?
                    (<>
                        <h3>Escolha a diculdade</h3>
                        <div >
                            <label>Díficil</label>
                            <input
                                type="radio"

                                value="hard"
                                checked={dificulty === 'hard'}
                                onChange={(event) => { setDificulty(event.target.value) }}
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
                       
                    </>)
            }
            <div>
                <ul>
                    {
                    gameStart && !endGame  ?
                            <>
                             <div>
                            <h3>{questions[counter]?.question}</h3>
                        </div>
                                <li onClick={() => { checkIfAnswerIsCorrect(answers[counter]?.answer_a) }}>    {answers[counter]?.answer_a}</li>
                                <li onClick={() => { checkIfAnswerIsCorrect(answers[counter]?.answer_b) }}>    {answers[counter]?.answer_b}</li>
                                <li onClick={() => { checkIfAnswerIsCorrect(answers[counter]?.answer_c) }}>    {answers[counter]?.answer_c}</li>
                                <li onClick={() => { checkIfAnswerIsCorrect(answers[counter]?.answer_d) }}>    {answers[counter]?.answer_d}</li> 
                            </>
                            : ''
                    }
                </ul>
            </div>
                
                   {
                       !gameStart && endGame===true?
                       <>
                       <Result results={points}/>
                       </>:''
                       
                   }
                    
                        
                    
                



        </Container>
    )
}