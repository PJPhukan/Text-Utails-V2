import React, { useState } from 'react'

export default function TextFrom(props) {
    //HOOKS

    const [text, setText] = useState('');
    // setText("New text");


    //FUNCTION
    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const UpClick = () => {
        let Ntext=text.toUpperCase();
        // console.log("Uppercase was click")
        setText(Ntext)

        props.showalert("To Upper case click","success")
    }
    const LowClick = () => {
        console.log("Lowercase was click")
        let Ntext=text.toLowerCase();
        setText(Ntext)

        props.showalert("To lower case click","success")
    }
    const ClearClick =()=>{
       props.showalert("Clear click click","success")
        setText('')
    }

    const CopyClick=()=>{
        let t = document.getElementById("textBox")
        t.select();
        navigator.clipboard.writeText(t.value)
        props.showalert("Text copid", "success")
        document.getSelection().removeAllRanges(); //This is used to remove select range from the text box
    }

    return (
        <>
        <div className='container'>
                <h1 className={`my-3 text-center text-${props.color}`}>{props.heading}</h1>
            <div className="mb-3">
                   
                <textarea className="form-control" value={text} placeholder='Enter your Text' onChange={handleonchange} id="textBox" rows="7"></textarea>
            </div>
            <div className="container">

                    <button type="button" className="btn btn-primary mx-2 my-2" onClick={UpClick} disabled={text.split(" ").filter((ele) => { return (ele.length !== 0) }).length ===0}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={LowClick} disabled={text.split(" ").filter((ele) => { return (ele.length !== 0) }).length ===0}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={ClearClick} disabled={text.split(" ").filter((ele) => { return (ele.length !== 0) }).length ===0}>Clear text</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={CopyClick}  disabled={text.split(" ").filter((ele) => { return (ele.length !== 0) }).length ===0}>Copy text</button>
            </div>
        </div>
            <div className={` container my-4 text-${props.color}`}>
                <h1>Your Text Summary</h1>
            <p>{text.split(/[\s+]/).filter((ele)=>{return (ele.length!==0)}).length} Word , {text.length} Characters</p>  
            {/* we can also use below slipt method */}
            {/* <p>{text.split(" ").filter((ele)=>{return (ele.length!==0)}).length} Word , {text.length} Characters</p>   */}
                <p>{text.split(/[\s+]/).filter((ele) => { return (ele.length !== 0) }).length*0.004} Minute read</p>
        </div>
        
        </>
    )
}
