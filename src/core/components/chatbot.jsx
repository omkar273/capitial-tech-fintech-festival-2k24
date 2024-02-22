import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import chatbotLogo from "../../assets/images/chatbot.png";


const chatGptApiKEY = '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'
const chatGptApiKEY2 = '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'
const chatGptApiURL = 'https://api.openai.com/v1/chat/completions'

const Chatbot = () => {
  const [isChatOpen, setisChatOpen] = useState(false)
  const [isTyping, setisTyping] = useState(false)
  const [messagesList, setmessagesList] = useState([
    {
      message: "Hello nice to meet you",
      sentTime: "just now",
      sender: "CapitlTech chatbot",
    },
    {
      message: "How can i help u",
      sentTime: "just now",
      sender: "CapitlTech chatbot",
    },

  ])


  const handleSendMessage = async (message) => {
    const newMsgs = [...messagesList, { message, sender: "user", direction: 'outgoing' }]
    setmessagesList(newMsgs)
    setisTyping(true)
    await processMessageToGPT(newMsgs)
  }

  const processMessageToGPT = async (newMsgs) => {
    try {
      let apiMsgs = newMsgs.map((msg) => {
        let role = msg.sender === 'CapitlTech chatbot' ? 'assistant' : 'user';
        return { role, content: msg.message };
      });

      const response = await fetch(chatGptApiURL, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + chatGptApiKEY2,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          temperature: 0.7,
          messages: [
            {
              role: 'system',
              content: 'Explain all the concepts like I am a 10-year-old boy in a short and simple manner.',
            },
            ...apiMsgs,
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from the GPT API.');
      }

      const responseData = await response.json(); // Read the response once and store it

      console.log(responseData);

      // Use responseData for subsequent operations
      // setmessagesList([...messagesList,
      // { message: newMsgs, sender: "user", direction: 'outgoing' },

      // {
      //   message: responseData.choices[0].message.content,
      //   sender: "user",
      // }]);
      setmessagesList([
        ...newMsgs,
        {
          message: responseData.choices[0].message.content,
          sender: "CapitlTech chatbot",
          // direction: 'outgoing'
        }]);

      setisTyping(false);
    } catch (error) {
      console.error('Error in processing messages to GPT:', error);
      setisTyping(false);
      // Handle error as needed
    }
  };



  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10" >

      {/* chatbot icon */}
      {!isChatOpen && <img src={chatbotLogo}
        onClick={() => setisChatOpen(true)}
        className=" w-16 ap active:scale-[1.18]" />}
      {isChatOpen &&
        <div className="relative mb-0 right-0 float-right  rounded-md max-h-[70vh] card bg-white ">
          <div className=" bg-white flex justify-between p-2 sticky top-0"
          >
            <p className="text-xl font-semibold">Capital tech chatbot</p>
            <CloseIcon onClick={() => setisChatOpen(false)} />
          </div>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={isTyping ? <TypingIndicator content='capital tech bot is typing' /> : null}
                className="overflow-y-scroll h-[50vh] ">
                {messagesList.map((chat, index) => <Message
                  model={chat} key={index}
                />
                )}
              </MessageList>
              <MessageInput placeholder="Type message here" className="gap-4" onSend={handleSendMessage} />
            </ChatContainer>
          </MainContainer>
        </div>

      }
    </div>

  )
}

export default Chatbot;

