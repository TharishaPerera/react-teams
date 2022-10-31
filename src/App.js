import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="ceffa31b-95a2-4b18-826d-00fb88ee2657"
            userName="Tharisha Perera"
            userSecret="12345678"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;