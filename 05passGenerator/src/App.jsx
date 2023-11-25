import { useState, useCallback, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false) ;
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)


  // useCallback hook -- to optimize
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*(){}[]`~_-?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100) // only to understand that it is possible to give range
    window.navigator.clipboard.writeText(password) //kyuki ye core react h toh hume window ka access hota h lekin next js wagera mai nhi kyuuki vo sever par update hoti H
  },[password])
  

  // useEffect hook -- page load hone par ye kaam karta h yaa fir dependencies change hone par
  useEffect(()=>{
    passwordGenerator()
  },[charAllowed,numberAllowed,length])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard} 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:scale-110 hover:bg-black'
        >Copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e)=>{setLength(e.target.value)}}
        />
         <label> Length:{length}</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput" 
          onChange={() => {
            setNumberAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id="charInput" 
          onChange={() => {
            setCharAllowed((prev)=>!prev)
            
          }}
        />
        <label htmlFor="charInput">Character</label>
      </div>
    </div>
   </div>
  )
}

export default App
