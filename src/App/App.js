
import './App.css';
import InputBox from '../components/InputBox/InputBox';
import MarkdownBox from '../components/MarkdownBox/MarkdownBox';
import { useState } from "react"



function App() {
  const [expandedBox, setExpandedBox] = useState("");
  const [inputText, setInputText] = useState("");

  const handleExpansionChange = (newExpandedBox) => {

    if (expandedBox === newExpandedBox) {
      setExpandedBox("");
    } else {
      setExpandedBox(newExpandedBox);
    }
  }
  
  
  return (
    <div className="app">

      {(expandedBox !== "markdown") ? (
        <InputBox
        setInputText={setInputText}
        inputText={inputText}
        isExpanded={expandedBox === "editor"}
        handleInputExpansion={() => handleExpansionChange("editor")}
        /> 
      ) : null}


      {(expandedBox !== "editor") ? (
        <MarkdownBox
        inputText={inputText}
        isExpanded={expandedBox === "markdown"}
        handleInputExpansion={() => handleExpansionChange("markdown")}

        />
      ) : null}

    </div>
  );
}

export default App;
