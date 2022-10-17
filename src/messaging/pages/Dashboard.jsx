import styled from "styled-components"
import Sidebar from "../components/Sidebar";
import MessageMainPanel from "../components/MessagePanel";
import {mobileStyle} from "../../components/responsiveness";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addMessage } from "../../features/messages/messageSlice";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    ${mobileStyle(
        {
          width: "100vw",
          overflowX: "hidden"
        }
    )}
`;

const MenuSidebar = styled.div`
    flex: 2;
    width: 270px;
    background: green;
    position: fixed;
    display: block;

    @media screen and (max-width: 790px){
      background: "limeseagreen";
      top: 0;
      left: 0;
      z-index: 12;
      width: "100%";
      height: "100vh";
      display: ${props => props.display}
    }
`;

const MainPanel = styled.div`
    flex: 7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    margin-left: 270px;
    ${mobileStyle(
        {
          flex: "3",
          marginLeft: "0px"
        }
    )}
`;

const BottomMainPanel = styled.div`
  color: #fff;
  width: 100%;
  max-height: 50px;
  flex: 1;
  display: flex;
  justify-content: space-around;
  ${mobileStyle(
        {
          flexDirection: "column"
        }
    )}
`;

const MessagingBox = styled.textarea`
  width: 96%;
  padding: 10px;
  flex: 6;
  ${mobileStyle(
    {
      padding: "5px"
    }
  )}
`;

const SendButton = styled.button`
  width: 96%;
  padding: 10px;
  flex: 1;
  ${mobileStyle(
    {
      padding: "5px"
    }
  )}
`;


const Dashboard = () => {

  const [textMessage,setTextMessage] = useState('');
  const loggedInUsername = localStorage.getItem("username");
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
      
      if(textMessage) {

        dispatch(
          addMessage({
            messageId: nanoid(),
            username: loggedInUsername,
            text: textMessage
          })
        )

      }

      setTextMessage("");
    

  }

  return (
    <Container>
        <MenuSidebar>
            <Sidebar />
        </MenuSidebar>
        <MainPanel>
          <MessageMainPanel />
          <BottomMainPanel>
            <MessagingBox value={textMessage} onChange={(e) => setTextMessage(e.target.value)} placeholder="Type message ..."/>
            <SendButton onClick={sendMessage}>Send</SendButton>
          </BottomMainPanel>
        </MainPanel>
    </Container>
  )
}

export default Dashboard