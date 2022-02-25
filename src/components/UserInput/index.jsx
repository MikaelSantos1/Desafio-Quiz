import { useState } from "react"
import { Input ,FormContainer} from "./styles"
import { useUser } from "../../Hooks/UserContext"
import { Quiz } from "../Quiz"
export function UserInput(){
    const [input,setInput]=useState('')
    const {user,setUser}= useUser()

    const handleUserSubmit=(event)=>{
        event.preventDefault()
        setUser(input)
    }
    return(
        <div>      
        {
            user?(
                <>
                <Quiz/>
                </>
            ):(<>
                <FormContainer onSubmit={handleUserSubmit}>
            <Input type="text"
            value={input}
            onChange={(event)=>setInput(event.target.value)}
            placeholder="Digite seu nome"
            />
            <h1>{user}</h1>
         </FormContainer>
                
                </>)
            
        }
         </div>
        
    )
}