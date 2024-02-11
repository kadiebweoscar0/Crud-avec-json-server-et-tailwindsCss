import { createContext, useEffect, useState } from 'react'
import './App.css'
import Table from './components/table'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/add'

export const ContextApp = createContext(null)

function App() {
  const [colomuns, setColumuns] = useState([]);
  const [records, setRecords] = useState([]);


  useEffect(() =>{
    axios.get('http://localhost:8000/user')
    .then(respons =>
      // console.log(respons.data)
      {
        setColumuns(Object.keys(respons.data[0]))
        setRecords(respons.data)
      }
    )

  }, [])
  
  return (
    <>
    <BrowserRouter>
      <ContextApp.Provider value={{colomuns, setColumuns, records, setRecords}}>
          <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/create' element={<Add />} />

          </Routes>
      </ContextApp.Provider >
    </BrowserRouter>
      
    </>
  )
}

export default App
