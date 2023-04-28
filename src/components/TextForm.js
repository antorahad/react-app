import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
  
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container">
            <h3 className="mt-3 mb-3">{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-danger mx-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-success mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-warning text-white mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
        </div>

        <div className="container">
            <h3 className="mt-3">Your Text Summary</h3>
            <p> <b>{text.split(" ").length} words and {text.length} characters</b></p>
            <p> <b>{0.008 * text.split(" ").length} minutes to reads</b></p>
            <h3>Text Preview</h3>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
