
import './App.css';
import {useState} from 'react'
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setUppercae]= useState(false)
  let [lowercase,setLowercase]= useState(false)
  let [number,setNumber]= useState(false)
  let [symbols,setSymbols]= useState(false)
  let [passwordlen, setPasswordLen]=useState(10)
  let [fpass, setpass]=useState('')
let createPassword=()=>{
let finalPasss=''
  let charSet=''
  if (uppercase || lowercase || number || symbols){
    if(uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(number) charSet+=NC;
    if(symbols) charSet+=SC;
    for(let i=0; i<passwordlen;i++){
        finalPasss+=charSet.charAt( Math.floor(Math.random()*charSet.length))

    }
    setpass(finalPasss)
    
  }
  else{
    alert("please one CheckBox!.....")
  }

  
 
}

let copyPass=()=>{
  navigator.clipboard.writeText(fpass)
}

  
  return (
    <>
    <div className='password-input'>
      <h2>password genrator</h2>
     
      
      
      <div className='passwordBoxin'>
      <input type='text' value={fpass} readOnly /> <button onClick={copyPass}>copy</button>
      </div>
      <div className='passLength'>
        <label>password length</label>
        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value) }/>
      </div>
      <div className='passLength'>
        <label>Include uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercae(!uppercase)} />
      </div>
      <div className='passLength'>
        <label>Include lowercase letters</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>
      <div className='passLength'>
        <label>Include numbers</label>
        <input type='checkbox'  checked={number} onChange={()=>setNumber(!number)}/>
      </div>
      <div className='passLength'>
        <label>Include symbols</label>
        <input type='checkbox'  checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn'  onClick={createPassword}>genrate password</button>
      </div>
    
    </>
  );
}

export default App;
