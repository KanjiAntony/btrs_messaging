import { useSelector } from "react-redux";
import styled from "styled-components"
import { mobileStyle } from "../../components/responsiveness";
import { allMessages } from "../../features/messages/messageSlice";

const MessagePanel = styled.div`
  background: #fff;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: #fff;
  ${mobileStyle(
        {
          alignItems: "flex-start",
          position: "relative",
          top: "50px"
        }
    )}
`;

const MessageRight = styled.div`
  width: 80%;
  height: 150px;
  flex: 1;
  margin: 10px 10px;
  background: black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobileStyle(
        {
          width: "100%",
          marginLeft: "0px",
          marginRight: "0px"
        }
    )}
`;

const MessageTitle = styled.div`
  background: #fff;
  color: #000;
  width: 80%;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  padding: 20px;
  ${mobileStyle(
        {
          fontSize: "20px",
          padding: "10px"
        }
    )}
`;

const MessageValue = styled.div`
  padding: 15px;
  font-size: 20px;
`;

const MessageMainPanel = () => {

  const messages = useSelector(allMessages);
  const loggedInUsername = localStorage.getItem("username");

  return (
    <MessagePanel>

      {
        messages.map(message => (
              <MessageRight key={message.messageId} style={{background: loggedInUsername === message.username ? "grey" : "green"}}>
                <MessageTitle>{message.text}</MessageTitle>
                <MessageValue>* Sent from {message.username} *</MessageValue>
              </MessageRight>
        ))
      }
          </MessagePanel>
  )
}

export default MessageMainPanel