import Navbar from "@/Components/navbar/Index"
import {useEffect, useState} from 'react'
import { SelectedPage } from "@/Shared/type"
import Home from "@/Components/Home/Index";



function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [topPage, setTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.screenY !== 0) setTopPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  

  return (
    <div className='app bg-gray-20'>
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} topPage={topPage}/>
     <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
