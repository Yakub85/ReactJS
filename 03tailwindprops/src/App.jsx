import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
 let myObj = {
  name:"Yaqub Ansari",
  age:24
 }
 let newArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 rounded-xl mb-4'>Tailwind test</h1>
     <Card name="Yaqub Ansari" btnText="Visit Me"/>
     <Card name="Yakub Ansari" btnText="Click Me"/>
    </>
  )
}

export default App
