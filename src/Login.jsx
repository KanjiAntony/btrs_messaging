import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobileStyle } from "./components/responsiveness";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    ${mobileStyle(
        {
          width: "100%",
          overflowX: "hidden",
          padding: "0px"
        }
    )}
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: green;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    ${mobileStyle(
        {
          flex: "1",
          padding: "2px"
        }
    )}
`;

const Title = styled.h2`
    flex: 1;
    margin-bottom: 10px;
`;

const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
    height: 50vh;
    ${mobileStyle(
        {
          width: "100%",
          height: "100%"
        }
    )}
`;

const InputText = styled.input`
    padding: 10px;
    margin-top: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    border-radius: 10px;
    background: none;
    color: #fff;
    font-size: 20px;
    ${mobileStyle(
        {
          fontSize: "14px"
        }
    )}
`;


const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    background: #000;
    color: #fff;
    font-weight: 200;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;



const Login = () => {

    const [username,setUsername] = useState("");
    const usernameRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/messaging";

    useEffect(()=>{
        usernameRef.current.focus();
    },[])

    const handleLogin = (e) => {

        e.preventDefault();

        localStorage.setItem("username",username);

        navigate(from, {replace: true});

    }

  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            
            <Form onSubmit={handleLogin}>
                
                <InputText 
                    type="text" 
                    placeholder="Email"
                    ref={usernameRef}
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)} required/>

                <Button>Login</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login