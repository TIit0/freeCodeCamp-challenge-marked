
import './App.css';
import InputBox from '../InputBox/InputBox.js';
import MarkdownBox from '../MarkdownBox/MarkdownBox';
import { useState } from "react"



function App() {
  const [inputState, setInputState] = useState(false);
  const [markdownState, setMarkdownState] = useState(false);
  const [inputText, setInputText] = useState("")
  
  
  return (
    <div className="app">
      <InputBox markdownState={markdownState} setMarkdownState={setMarkdownState} inputState={inputState} setInputText={setInputText}>
      </InputBox> 

      
      <MarkdownBox inputState={inputState} setInputState={setInputState} markdownState={markdownState} inputText={inputText}>

      </MarkdownBox>
    </div>
  );
}

export default App;
