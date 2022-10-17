import "./InputArea.css"

export default function InputArea({setInputText, expanded}) {

    function handleChange(e) {
        
        setInputText(e.target.value);
    }

    return (
        <textarea className={`text ${expanded}`} onChange={handleChange}></textarea>
    )
}