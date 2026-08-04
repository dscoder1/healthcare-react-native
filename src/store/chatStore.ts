import { create } from "zustand";



export type Message = {


id:string;

text:string;

sender:"user" | "ai";

time:string;


};





interface ChatState {


messages:Message[];


addMessage:(message:Message)=>void;


removeMessage:(id:string)=>void;


clearMessages:()=>void;


}





export const useChatStore = create<ChatState>((set)=>({



messages:[

{

id:"welcome",

text:"Hello 👋\nI am your AI assistant. Ask me anything.",

sender:"ai",

time:"Now"

}

],




addMessage:(message)=>


set((state)=>({

messages:[

...state.messages,

message

]

})),






removeMessage:(id)=>


set((state)=>({

messages:

state.messages.filter(

(item)=>item.id!==id

)

})),






clearMessages:()=>


set({

messages:[]

})



}));