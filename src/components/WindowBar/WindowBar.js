import "./WindowBar.css"
import Expand from "../icons/Expand";
import Contract from "../icons/Contract";


export default function WindowBar({handleInputExpansion, title, isExpanded}) {



    return (
        <div
        className="input-box__WindowBar">
            
            <div className="input-box__WindowBar--logo">
                {title[0].toUpperCase() + title.slice(1)}
            </div>

            <button className="input-box__WindowBar--button"
            onClick={handleInputExpansion}> 
            {isExpanded ? <Contract/> : <Expand/>}
            </button>
        </div>
    )
}



