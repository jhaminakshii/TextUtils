import React,{ useState } from 'react'

export default function TextForm1(props) {

    const [txt, setTxt] = useState("");

    let upperCaseHandler = ()=>{
         let newText = txt.toUpperCase();
         setTxt(newText);
        //console.log("btn clicked " + newText)
        props.showAlert("Text converted to UpperCase","success");
    }

    let lowerCaseHandler = ()=>{
         let newText = txt.toLowerCase();
         setTxt(newText);
        //console.log("btn clicked " + newText)
        props.showAlert("Text converted to LowerCase","success");
    }

    let clearTxt = ()=>{
        let newText = "";
        setTxt(newText);
        props.showAlert("Text Cleared","success");
    }

    let removeSpc = ()=>{
        let newText = txt.split(/[ ]+/);
        setTxt(newText.join(" "));
        props.showAlert("extra space removed","success");
    }

    let copyTxt = ()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success");
        
    }

    let changeHandler = (e)=>{
        setTxt(e.target.value)
       // console.log("chng clicked")
    }

  return (
<>
    <div className ={`container text-${props.enableMode === 'light'?'dark':'light'}`}>
    <h1 className = "my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control text-${props.enableMode === 'light'?'dark':'light'}`} 
        style= {{backgroundColor:props.enableMode === 'light'?'white':'#042743'}} id="exampleFormControlTextarea1" value={txt} onChange={changeHandler} rows="8"></textarea>
    </div>
    <button type="button" disabled = {txt.length===0} className="btn btn-primary mx-1 my-1" onClick={upperCaseHandler}> ToUpperCase</button>
    <button type="button" disabled = {txt.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerCaseHandler}> ToLowerCase</button>
    <button type="button" disabled = {txt.length===0} className="btn btn-primary mx-1 my-1" onClick={clearTxt}> Clear Text</button>
    <button type="button" disabled = {txt.length===0} className="btn btn-primary mx-1 my-1" onClick={copyTxt}> Copy Text</button>                            
    <button type="button" disabled = {txt.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpc}> Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.enableMode === 'light'?'grey':'light'}`}>
        <h2>Summury</h2>
        <p>{txt.split(".").length-1} Sentences {txt.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length}
         words,{txt.length} characters </p>
        <p>Takes {0.0008*txt.split(" ").filter((ele)=>{return ele.length !== 0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{txt.length>0?txt:"Enter something in above textarea to show preview here."}</p>
    </div>
</>
  )
}
