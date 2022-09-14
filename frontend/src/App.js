import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/test").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {
        (typeof backendData.data === 'undefined')
        ? <p>Loading...</p> 
        : <div>
          {
            backendData.data.data.map((test, i) => (
              <ul key={i}>
                  <li>name: {test.name}</li>
                  <li>age: {test.age}</li>
                  <li>score: {test.score}</li>
              </ul>
            ))
          }
        </div>
      }
    </div>
  )
}

export default App