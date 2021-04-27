import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [fields, setFields] = useState({ endpoint: '', token: '', projectId: 0 })

  const handleLoadDetails = async () => {
    console.log(`Request: ${fields}`)
    const {data} = await axios.post(fields.endpoint, { token: fields.token, projectId: fields.projectId }, {withCredentials: true})
    
    console.log(`Response: ${data}`)
  }

  const handleChange = (e) => {
    e.persist()

    setFields((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value.trim() }
    })
  }

  return (
    <div className="App">
      <p className="App_Title">EC_Page</p>
      <div className="App_Response">Check inspect element for the response</div>
      <div className="App_Details">
        <div className="App_DetailFileds">
          <div className="App_Field">
            <label htmlFor="endpoint" className="App_Label">Endpoint: </label>
            <input
              className="App_Input"
              type="text"
              id="endpoint"
              value={fields.endpoint}
              onChange={handleChange}
            />
          </div>
          <br/>
          <div className="App_Field">
            <label htmlFor="token" className="App_Label">Token: </label>
            <input
              className="App_Input"
              type="text"
              id="token"
              value={fields.token}
              onChange={handleChange}
            />
          </div>
          <br/>
          <div className="App_Field">
            <label htmlFor="projectId" className="App_Label">Project Id: </label>
            <input
              className="App_Input"
              type="number"
              id="projectId"
              value={fields.projectId}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="App_Button" onClick={() => handleLoadDetails()}>Load</div>
    </div>
  )
}

export default App;
