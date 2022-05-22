import React, { useState } from 'react'

export default function TextForm(props) {
    const lowerCase = () => {
        console.log("LowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convrted to lower case", "success");
    }
    const upperCase = () => {
        console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convrted to Upper case", "success");
    }
    const handleOnChange = (e) => {
        console.log("On Change");
        setText(e.target.value)
    }
    const [text, setText] = useState("Hello World")

    let z = text.split(" ");
    let num = z[z.length - 1] === "" ? z.length - 1 : z.length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={lowerCase}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={upperCase}>Convert to Upper Case</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text Summary</h1>
                {/* <p>{text.split(" ").length -1} words {text.length} characters</p> */}
                <p>{text.length === 0 ? 0 : num} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0})} Minutes read</p>
                <h1>Preview</h1>
                <p>{text.length === 0 ? 'Enter in textarea to preview' : text}</p>
            </div>
        </>
    )
}
