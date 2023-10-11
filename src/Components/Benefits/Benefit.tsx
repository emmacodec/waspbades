import { SelectedPage } from '@/Shared/type';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const childVariant ={
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-lg border-2 border-gray-200 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-300 p-4'>
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink 
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={() => setSelectedPage(SelectedPage.EnrollNow)}
            href={`${SelectedPage.EnrollNow}`}
            >
              Discover More
            </AnchorLink>
    </motion.div>
  )
}

export default Benefit;