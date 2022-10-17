import "./WindowBar.css"


export default function WindowBar({windowType, setInputState, inputState, setMarkdownState, markdownState}) {

    function handleClick() {
        if (windowType === "Editor") {
            setMarkdownState(!markdownState)
        } else if (windowType === "Markdown") {
            setInputState(!inputState)
        }
    }

    return (
        <div className="input-box__WindowBar">
            <div className="input-box__WindowBar--logo">
                {windowType}
            </div>
            <button className="input-box__WindowBar--button" onClick={handleClick}> 
            {
                /* the frankenstein ternary  */
            markdownState ? 
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-11.5 13.5h-7v-4h7zm1.5 0v-4.5c0-.478-.379-1-1-1h-7.5v-7.5h17v13zm2.5-8.057v-1.243c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.05c0 .414.336.75.75.75h3.033c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.218l3.198-3.198c.292-.293.292-.768 0-1.061-.293-.292-.768-.292-1.061 0z" fill-rule="nonzero"/></svg>

            : 
            
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-6.5 13.5h-12v-10h12zm1.5 0v-10.5c0-.478-.379-1-1-1h-12.5v-1.5h17v13zm-6.518-4.943v1.243c0 .414.336.75.75.75.415 0 .75-.336.75-.75 0-.715 0-2.335 0-3.05 0-.414-.335-.75-.75-.75-.714 0-2.318 0-3.033 0-.414 0-.75.336-.75.75s.336.75.75.75h1.219l-3.198 3.198c-.293.293-.293.768 0 1.061.292.292.767.292 1.06 0z" fill-rule="nonzero"/></svg>  }
            </button>
        </div>
    )
}



