import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick =()=>{
        //console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick =()=>{
        //console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        let newText = " ";
        setText(newText);
    }
    const [email, setEmail] = useState([]);
    const handleEmailClick=()=>{
        let newText = text.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d-]+/g);
        //console.log(newText);
        if(newText==null){
            newText = [0];
        }
        setEmail(newText);
    }
    const handleCopy =()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const onChangeHandler =(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your text here');
   return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-outline-success mx-2' onClick={handleUpClick}>Convert to uppercasse</button>
        <button className='btn btn-outline-success mx-2' onClick={handlelowClick}>Convert to lowercasse</button>
        <button className='btn btn-outline-success mx-2' onClick={handleCopy}>Copt text</button>
        <button className='btn btn-outline-success mx-2' onClick={handleClearClick}>Clear</button>
     </div>
     <div className='container my-3'>
     <button className='btn btn-outline-success mx-2' onClick={handleEmailClick}>Find email address</button>
        <p>{email.map((email,index)=><ul className='list-group my-2'><li className='list-group-item' key={index}>{email}</li></ul>)}</p>   
        <h2>Your text summary</h2>
        <p>{text.split(/^\s+$/).length === 2 ? 0 : 2 +
           text.split(/\s+/).length - text.split(/^\s+/).length - text.split(/\s+$/).length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(/^\s+$/).length === 2 ? 0 : 2 +
           text.split(/\s+/).length - text.split(/^\s+/).length - text.split(/\s+$/).length)} Minutes read</p>
     </div>
     </>
  )
}

