import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","primary");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","primary");
    }
    const [text,setText] = useState("Enter here");
  return (
    <>
    <div className = "container" style ={{color : props.mode ==='dark'?'white':'black'}} >
        <h1>Enter Your text here</h1>
        <div className="mb-3">
          <textarea className="form-control" value ={text} onChange={handleOnChange} style= {{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
    
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style ={{color : props.mode ==='dark'?'white':'black'}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read </p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
    </>
  )
}
