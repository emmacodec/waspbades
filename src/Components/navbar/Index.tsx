import { useState } from "react";
import {XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.jpeg';
import Link from "./Link";
import { SelectedPage } from "@/Shared/type";


type Props = {
  selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const Navbar = ({selectedPage, setSelectedPage}: Props) => {

  const flexbetween = "flex items-center justify-between";
  return <nav>
    <div className={`${flexbetween} fixed top-0 z-30 w-full py-6`}>

      <div className={`${flexbetween} mx-auto w-5/6`}>

        <div className={`${flexbetween} w-full gap-16`}>
          {/*left-side*/}
          <img src={Logo} alt="logo" width={50} height={50} />

          {/*right-side*/}
          <div className={`${flexbetween} w-full`}>

            <div className={`${flexbetween} gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Varieties" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Enroll Now" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className={`${flexbetween} gap-8`}>
              <p>Sign-In</p>
              <button>Enroll Today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>;
    
  
}

export default Navbar;