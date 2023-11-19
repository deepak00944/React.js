import Chai  from "./chai"

function App() {
  const username = "Deepak Singh"

  return (
    // <> </> this tag is known as fragment tag we can write div tag too but its is very common problem in react so they provided this tagto make it easy
    //yha jo username(ise evaluated expression khete h) h vo js ka h matlab humne uppar jo variable inject kiya h vo hum jsx m sirf evaluated cheeje likhte h matlab ki vha hum or koiu code nhi likh sakte h final outcom likhna h sirf
    <>  
      <Chai />
      <h1 >Hello world form vite | {username}</h1> 
    </>
  )
}

export default App
