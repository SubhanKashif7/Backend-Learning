import React from 'react'

function App() {
  const apireq = async () => {
    const result = await fetch("http://localhost:3000/").then((response)=>{
      return response.json();
    }).then((response)=>{
      alert("Helo")
    })
  }
  return (
    <div>
      <button onClick={()=>{
        apireq()
      }}>Hello</button>
    </div>
  )
}

export default App
