import React ,{useState} from 'react'



export default function Textform(props) {


    const [text,setText]=useState('')
    
     const handleUpClick=()=>{
         console.log("Uppercase clicked"+text);
         let newText=text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to Uppercase","success");
     }

 const handleLoClick=()=>{
         console.log("Lowercase clicked"+text);
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowercase","success")
     }
     const handleOnChange=(event)=>{
         console.log("On Change");
         setText(event.target.value);
        
              }

        const handleCopy=()=>{
                  
            
            var copy_text=document.getElementById('myBox');
                  copy_text.select();
                  navigator.clipboard.writeText(copy_text.value);
                  console.log("Text Copied to clipboard!");
                  props.showAlert("Text Copied to clipboard!","success")


              }

              const handleExtraSpaces=()=>{
                  let newText=text.split(/[ ]+/);
                  setText(newText.join(" "));
                  props.showAlert("Extra Spaces Removed","success")
              }
     
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Uppercase
  </button>

   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Convert to Lowercase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleCopy}>Copy Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}>Removes extra Spaces
  </button>
</div>


<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2> Your Text Summary</h2>
<p> {text.split(" ").filter((element)=>{
    return element.length!=0
}).length} words and {text.length} characters</p>
<p> {0.008*text.split(" ").filter((element)=>{
    return element.length!=0
}).length} minutes read</p>
</div>
</>
    )
}
