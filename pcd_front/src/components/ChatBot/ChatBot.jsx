import ChatbotIcon from "./ChatbotIcon";
import "./ChatBot.css"
import ChatForm from "./ChatForm";
import { useState,useEffect } from "react";
import ChatMessage from "./ChatMessage";


const ChatBot = ()=>{

    const [chatHistory,setChatHistory]= useState([]);

    const generateBotResponse = async (history)=>{
        //format chat history for api request 
        history = history.map(({role,text})=>({role,parts:[{text}]}));

        const requestOptions={
            method:"POST",
            Headers:{"Content-Type":"application/json"},
            body: JSON.stringify({contents:history})
        }
        try{
            //make the api call to get the bot's response 
            const response = await fetch (process.env.REACT_APP_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok)throw new Error (data.error.message || "Something went wrong");
            console.log(data)

        }catch(error){
            console.log(error);

        }

    }




    // ✅ Log chat history whenever it updates
   // useEffect(() => {
     //   console.log("Updated chat history:", chatHistory);
   // }, [chatHistory]); // Runs whenever chatHistory changes



    return (
        <div className="container  ">
            <div className="chatbot-popup ">

                {/*Chatbot Header */}
                <div className="chat-header">
                    <div className="header-info">
                        <ChatbotIcon></ChatbotIcon>
                        <h2 className="logo-text">chatbot</h2>
                    </div>
                        <button class="material-symbols-rounded">
                            keyboard_arrow_down
                        </button>
                    

                </div>

                {/*Chatbot Body */}
                <div className="chat-body">
                    <div className="message bot-message">
                        <ChatbotIcon></ChatbotIcon>
                        <p className="message-text">
                            hey there ! <br />How can I help you today ?
                        </p>
                    </div>
                    {/*Render the chat history dynamically */}
                    {chatHistory.map((chat,index)=>(
                          <ChatMessage chat={chat} key={index} />
                       
                    ))}
                  



                </div>


                {/*Chatbot Footer */}
                <div className="chat-footer">
                
                    <ChatForm setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} chatHistory={chatHistory}   />
                </div>


            </div>


        </div>



    )
}
export default ChatBot;