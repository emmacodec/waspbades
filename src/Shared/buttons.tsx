import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react';
import { SelectedPage } from "./type";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const Buttons = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink 
    href={`#${SelectedPage.EnrollNow}`}
    onClick={() => setSelectedPage(SelectedPage.EnrollNow)}
    className="rounded-lg bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {children}
    </AnchorLink>
  )
}

export default Buttons;