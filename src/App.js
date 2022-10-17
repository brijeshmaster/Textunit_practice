import React from 'react'
import About from './component/About'
import Nav from './component/Nav'
import TextForm from './component/TextForm'

const App = () => {
  return (
    <div>

      <Nav />
      <div className="container my-5">

      <TextForm heading='Enter The Text To Analyze'/>
      </div>
      <About />
    </div>
  )
}

export default App