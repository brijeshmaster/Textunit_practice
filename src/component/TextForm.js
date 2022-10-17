import React, { useState } from 'react'

const TextForm = (props) => {

    const [mytext, setmytext] = useState('')


    const handleupclick = () => {
        const newtext =mytext.toUpperCase()
       setmytext(newtext) 
    }

    const handleloclick = () => {
        const newtext =mytext.toLowerCase()
       setmytext(newtext) 
    }
    const handleclrclick = () => {
        const newtext =''
       setmytext(newtext) 
    }

    const changeme = (e) => { 
       setmytext( e.target.value)
    }

  return (<>
<div className='container'>
 <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value={mytext} onChange={changeme} id="mybox" rows="14"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>Conver to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>Conver to Lowercase</button>
<button className="btn btn-primary " onClick={handleclrclick}>Clear Text</button>
    </div>
    <div className="container my-4">
        <h1>your text summary</h1>
        <p>{mytext.split(" ").length} words and {mytext.length} characters</p>
        <h2>preview</h2>
        <p>{mytext}</p>
    </div>
  </>
  )
}

export default TextForm