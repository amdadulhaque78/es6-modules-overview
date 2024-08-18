import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect( () => {
    fetch('watches.json')
    .then(res => res.json())
    .then (data => setWatches(data));
  }, [])

  // const watches = [
  //   {id: 1, name: 'apple watch', price: 200},
  //   {id: 2, name: 'samsung watch', price: 300},
  //   {id: 3, name: 'mi watch', price: 400},
  // ]


//   const watches = [
//     {
//         "id": "1",
//         "name": "Apple Watch Series 8",
//         "price": 399.99
//     },
//     {
//         "id": "2",
//         "name": "Samsung Galaxy Watch 6",
//         "price": 349.99
//     },
//     {
//         "id": "3",
//         "name": "Garmin Forerunner 945",
//         "price": 599.99
//     },
//     {
//         "id": "4",
//         "name": "Fitbit Sense 2",
//         "price": 299.95
//     },
//     {
//         "id": "5",
//         "name": "Google Pixel Watch",
//         "price": 349.00
//     }
// ]


  return (
    <>
      <h2>ES6 modules overview</h2>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
