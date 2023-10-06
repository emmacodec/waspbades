import { useState } from "react";
import {XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.jpeg';
import Link from "./Link";
import { SelectedPage } from "@/Shared/type";
import mediaQuery from "@/custom-taiwind/mediaQuery";
import Buttons from "@/Shared/buttons";


type Props = {
  selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    topPage: boolean;
}


const Navbar = ({topPage, selectedPage, setSelectedPage}: Props) => {

  const flexbetween = "flex items-center justify-between";

const useMediaQuey = mediaQuery("(min-width: 1060px)");

const [menuToggle, setToggleMenu] = useState<boolean>(false);

const navBackground = topPage ? '' : 'bg-primary-100 drop-shadow';

  return (
  <nav>
    <div className={`${navBackground} ${flexbetween} fixed top-0 z-30 w-full py-6`}>

      <div className={`${flexbetween} mx-auto w-5/6`}>

        <div className={`${flexbetween} w-full gap-16`}>
          {/*left-side*/}
          <img src={Logo} alt="logo" width={50} height={50} />

          {/*right-side*/}
           {useMediaQuey ? (<div className={`${flexbetween} w-full`}>

            <div className={`${flexbetween} gap-8 text-sm tracking-widest uppercase`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Varieties" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Enroll Now" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className={`${flexbetween} gap-8`}>
              <p>Sign-In</p>
              <Buttons setSelectedPage={setSelectedPage}>Enroll Now</Buttons>
              
            </div>
          </div>
           ) : (

            <button className="rounded-full  bg-secondary-500 p-2" onClick={() => setToggleMenu(!menuToggle)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
           )}
        </div>
      </div>
    </div>

    {/*Mobile-menu*/}
    {!useMediaQuey && menuToggle && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">


        {/*close*/}
        <div className="flex justify-end p-12">
          <button onClick={() => setToggleMenu(!menuToggle)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/*items*/}
        <div className="ml-[33%] flex flex-col gap-10 text-xl tracking-widest">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Varieties" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Enroll Now" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
      </div>
    )}
  </nav>
  );
    
  
}

export default Navbar;