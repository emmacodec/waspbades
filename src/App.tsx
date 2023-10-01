import Navbar from "./Components/navbar/Index"
import {useState} from 'react'
import { SelectedPage } from "@/Shared/type"



function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  

  return (
    <div className='app bg-gray-20'>
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
