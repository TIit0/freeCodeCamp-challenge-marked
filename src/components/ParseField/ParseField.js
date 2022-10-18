import { marked } from "marked";
import { useEffect } from "react";
import "./ParseField.css"


export default function ParseField({ inputText }) {
    useEffect(() => {
        document.getElementById('content').innerHTML =
            marked.parse(inputText)
    }, [inputText])

    return (
        <div>
            <div id="content" className="markdown-box--parse"></div>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        </div>
    )
}