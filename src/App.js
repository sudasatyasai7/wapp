import React,{useState} from 'react'

const App = () => {
  const[city,setCity]=useState("");
  const[result,setResult]=useState("")
  const event=e=>{
    setCity(e.target.value);
  }
  const submit=e=>{
    e.preventDefault();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(Response=>Response.json()).then(data=>{
      const kelvin=data.main.temp;
      const celsius=kelvin-273.15;
      setResult("Temperature at"+" "+city+" "+"is"+"\n"+Math.round(celsius)+""+"°c");
    })
    setCity("")
  }

  return (
    <div>
      <center className='sss'>
        <h1>WEATHER APP</h1>
        <form onSubmit={submit}>
          <input className='ajay'  type='text' placeholder='Enter City Name' value={city} onChange={event}></input><br></br><br></br>
          <input className='sai' type='submit'></input>
        </form>
        <h1>{result}</h1>
      </center>
    </div>
  )
}
export default App