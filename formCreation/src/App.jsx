import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", address:"",city:"", state:"", zipCode:"", isChecked:true, notification:""
  })

  

  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Prinnting finall datA");
    console.log(formData);
    
    
  }

  return (
    <div className='w-auto h-max-[100vh] bg-[#0101] flex flex-wrap justify-center '>
      <div className = 'w-[50vw] outline rounded mt-10 p-4'>
          <form onSubmit={submitHandler} >
            <label htmlFor="firstName"> First Name</label>
            <br />
            <input 
              type="text"
              name='firstName'
              id='fistName'
              value={formData.firstName}
              placeholder='First Name'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

            <br />
            <label htmlFor="lastName"> Last Name</label>
            <br />
            <input 
              type="text"
              name='lastName'
              id='lastName'
              value={formData.lastName}
              placeholder='Last Name'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

            <br />
            <label htmlFor="email"> Email</label>
            <br />
            <input 
              type="email"
              name='email'
              id='email'
              value={formData.email}
              placeholder='deepak@email.com'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

            <br />
            <label htmlFor="country">Country</label>
            <br />
            <select 
            name='country'
            onChange={changeHandler}
            value={formData.country}
            className='rounded mt-2 p-1'
            >
              <option >India</option>
              <option >united States</option>
              <option >Mexico</option>
            </select>


            <br />
            <label htmlFor="address"> Street Address</label>
            <br />
            <input 
              type="text"
              name='address'
              id='address'
              value={formData.address}
              placeholder='1610/16 IV Baba colony'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

      <br />
            <label htmlFor="address"> City</label>
            <br />
            <input 
              type="text"
              name='city'
              id='city'
              value={formData.city}
              placeholder='Bhopal'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

      <br />
            <label htmlFor="state"> State</label>
            <br />
            <input 
              type="text"
              name='state'
              id='state'
              value={formData.state}
              placeholder='Madhya Pradesh'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

            <br />
            <label htmlFor="zipCode"> Zip/Postel Code</label>
            <br />
            <input 
              type="text"
              name='zipCode'
              id='zipCode'
              value={formData.zipCode}
              placeholder='462016'
              className=' w-[40vw] rounded mt-2 p-1 px-3'
              onChange={changeHandler}
              required
            />

            <br />
            <label htmlFor=""> By Email</label>
            <br />
            <fieldset className='p-2'>

            <input 
              type="checkbox" 
              name='isChecked'
              id='isChecked'
              value={formData.isChecked}
              onChange={changeHandler}
              required
              className=''
            />
            <label htmlFor="isChecked">Comments</label>
            <p>Get notified when someones posts a comment on posting</p>

            <br />
            
            <input 
              type="checkbox" 
              name='isChecked'
              id='isChecked'
              value={formData.isChecked}
              onChange={changeHandler}
              required
            />
            <label htmlFor="isChecked">Candidates</label>
            <p>Get notified when a candidate apply for a job</p>

            <br />

            <input 
              type="checkbox" 
              name='isChecked'
              id='isChecked'
              value={formData.isChecked}
              onChange={changeHandler}
            />
            <label htmlFor="isChecked">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer</p>

            </fieldset>


            <br />
            <label htmlFor=""> Push Notifications </label>
            <p>This are deliverd via messages</p>

            <input 
              type="radio"
              name='notification'
              value="Everything"
              id='Everything'
              checked={formData.notification === "Everything"}  
              onChange={changeHandler}
            />

            <label htmlFor="Everything"> Everything</label>
            <br />

            <input 
              type="radio"
              name='notification'  
              value="Same as Email"
              id='Same-Email'
              checked={formData.notification === "Same as Email"}
              onChange={changeHandler}
            />

            <label htmlFor="Same-Email"> Same as Email</label>
            <br />
            <input 
              type="radio"
              name='notification'  
              id='No-Notification'
              value="No push Notification"
              checked={formData.notification === "No push Notification"}
              onChange={changeHandler}
            />

            <label htmlFor="No-Notification"> No push notifications</label>
          <br />
          <button
            className='bg-blue-700 px-4 p-1 rounded mt-2 text-white font-bold'
          >Save</button>
          </form>
      </div>

    </div>
  
  )
}

export default App
