import WindowBar from "../WindowBar/WindowBar"
import InputArea from "../InputArea/InputArea";
import "./InputBox.css"

export default function InputBox({markdownState, setMarkdownState,inputState, setInputText}) {
    let expanded;

    const hidden = inputState ? "hidden" : "";

    if (inputState === false && markdownState === true) {
        expanded = "expanded"
    } else {
        expanded = ""
    }
    console.log(expanded)

    return (
        <div className={`input-box ${hidden}`}>
            <WindowBar windowType="Editor" markdownState={markdownState} setMarkdownState={setMarkdownState}/>

            <InputArea setInputText={setInputText} expanded={expanded}></InputArea>
            
        </div>
    )
}