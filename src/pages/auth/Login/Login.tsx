import { Navigate, useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import * as S from './Login.style'
import Button from 'components/Button'

export const Login = () => {
    const navigate = useNavigate()
    const login = () => {
        localStorage.setItem('token', 'token')
        navigate('/app')
    }

    if (localStorage.getItem('token'))
        return <Navigate to={'/app'}/>

    return (
        <S.WelcomeContainer>
            <Row>
                <Col md='5'>
                    <S.WelcomeCard>
                        <h1>Let's make money 💰</h1>
                    </S.WelcomeCard>
                    <Button onClick={login}>
                        Start Boxing 🥊 
                    </Button>
                </Col>
            </Row>
        </S.WelcomeContainer>
    )
}
