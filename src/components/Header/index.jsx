import {Container} from './styles'
import { useUser } from '../../Hooks/UserContext'
export function Header(){
    const {user}= useUser()
    return(
        <Container>
            <div>
            <h1>Quiz app</h1>
            </div>
            <div>
            <h3>{user}</h3>
            </div>
            
        </Container>
    )
}