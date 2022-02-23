import { useState } from "react"
import { Input ,FormContainer} from "./styles"
export function UserInput(){
    const [input,setInput]=useState('')
    const [user,setUser]=useState('')

    const handleUserSubmit=(event)=>{
        event.preventDefault()
        setUser(input)
    }
    return(
        <FormContainer onSubmit={handleUserSubmit}>
            <Input type="text"
            value={input}
            onChange={(event)=>setInput(event.target.value)}
            placeholder="Digite seu nome"
            />
            <h1>{user}</h1>
        </FormContainer>
    )
}