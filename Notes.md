# Basics
- react is a js library used to create UI
- It is all about components (components is a piece of reuable code (function bhi keh sakte h))
- As we are saying that it is js library toh iski need kya lagi js hi kyu use nhi kiya because we need to share more details using js but we can easily use react which only needs end state. 
- Single page application banta h 
- Why React --> Reuability --> Do not Repeat utility --> Readability --> Separation of concern --> Maintainablity 


# Steps to Create a react app
- Install node js
- Create a new folder
- Change directory to that folder 
- npx create-react-app < app_name>
- npm start


# useState
- variable ki state change karne ke liye use hota h statte change ka matlab hum UI par value cahnge kar reh h
- state ko handel kar rha 

# useEffect Hook {useEffect(callback(), dependencies[])}
- component ke render hone par jo bhi task karana ho vo useEffect m likte h 
- jis bhi component m hum useEffect hook likhte h vo component ke render hone ke baad useEffect use chalta h 
- Side effect ko handle karta h
- har ek change par useEffect baar baar UI ko render karega ya har render par useEffect chalega
- dependencies ke hisab se hum UI ko render kar sakte h aur empty array se ek hi time render hoga
```js
    useEffect(()=>{
        console.log("added")

        return(()=>{
            log("removed")
        })
    })
    // is case m phele return wala code phele chalega fir baaki code chalega
```

- mount hona matlab UI par cahnge ho gaya h
- unmountmatlab removed form UI

# Links
https://www.npmjs.com/package/react-toastify

## Steps to  add toast in website
- install npm i react-toastify
- we can use this by app.js or index.js
- we will use index.js
- Imort the things and we can use it
```js
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"
```

## Icons in React
- https://www.npmjs.com/package/react-icons