import { useState } from "react"

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)
    return (
        <div className="chat-input">
            <textArea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button">Submit</button>
        </div>       
    )
}

export default ChatInput