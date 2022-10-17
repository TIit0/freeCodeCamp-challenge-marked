import "./MarkdownBox.css"
import WindowBar from "../WindowBar/WindowBar"
import { marked } from "marked";
import ParseField from "../ParseField/ParseField";


export default function MarkdownBox({inputState, setInputState, markdownState, inputText}) {
    let expanded;

    const hidden = markdownState ? "hidden" : "";

    if (markdownState === false && inputState === true) {
        expanded = "expanded"
    } else {
        expanded = ""
    }
    
    return (
        <div className={`markdown-box ${hidden} ${expanded}`}>
            <WindowBar  windowType="Markdown" inputState={inputState} setInputState={setInputState}/> 
            <ParseField inputText={inputText}></ParseField>
        </div>
    )
}