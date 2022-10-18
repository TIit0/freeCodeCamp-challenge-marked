import WindowBar from "../WindowBar/WindowBar"
import "./InputBox.css"

export default function InputBox({ isExpanded, inputText, setInputText, handleInputExpansion }) {

    const expanded = isExpanded ? "expanded" : ""


    return (
        <div className={`input-box`}>

            <WindowBar
                windowType="editor"
                title="editor"
                handleInputExpansion={handleInputExpansion}
                isExpanded={isExpanded}
            />

            <textarea
                className={`text ${expanded}`}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
            />

        </div>
    )
}