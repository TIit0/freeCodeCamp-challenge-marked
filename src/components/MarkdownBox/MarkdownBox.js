import "./MarkdownBox.css"
import WindowBar from "../WindowBar/WindowBar"
import { marked } from "marked";
import ParseField from "../ParseField/ParseField";


export default function MarkdownBox({isExpanded, handleInputExpansion, inputText}) {
    const expanded = isExpanded ? "expanded" : "";

    
    return (
        <div className={`markdown-box ${expanded}`}>

            <WindowBar
            windowType="markdown"
            title="markdown"
            handleInputExpansion={handleInputExpansion}
            isExpanded={isExpanded}
            /> 

            <ParseField inputText={inputText}/>
        </div>
    )
}