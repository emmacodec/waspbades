import Buttons from '@/Shared/buttons';
import { SelectedPage } from '@/Shared/type'
import mediaQuery from '@/custom-taiwind/mediaQuery';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import Text from '@/assets/text.jpeg';
import Heineken from '@/assets/heineken.jpeg';
import Bull from '@/assets/bull.jpeg';
import Versache from '@/assets/versache.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  const useMediaQuey = mediaQuery("(min-width: 1060px)");

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/*image and header*/}
      <motion.div 
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/*header*/}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/*heading*/}
          <motion.div 
          className='md:-mt-20' 
          initial="hidden" 
          whileInView='visible' 
          viewport={{once:true, amount:0.5}} 
          transition={{duration: 2}}
          variants={{hidden:{opacity: 0, x: -100}, visible:{opacity: 1, x: 0},}}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <h1 className='text-7xl font-bold tracking-widest uppercase text-gray-500'>Fitness</h1>
              </div>
            </div>

            <p className='mt-8 text-sm'>Come and experience world class Gym with world class facilities, well trained gym-instructors, relaxation center, bar and restaurant. We also provide home training as well with our top-notch equipments for effective training.</p>
          </motion.div>

          {/*buttons*/}
          <motion.div 
          initial="hidden" 
          whileInView='visible' 
          viewport={{once:true, amount:0.5}} 
          transition={{delay: 0.2, duration: 2}}
          variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0},}}
          className='mt-8 flex items-center gap-8'>
            <Buttons setSelectedPage={setSelectedPage}>
              Enroll Now.!!
            </Buttons>
            <AnchorLink 
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={() => setSelectedPage(SelectedPage.EnrollNow)}
            href={`${SelectedPage.EnrollNow}`}
            >
              Discover More
            </AnchorLink>
          </motion.div>
        </div>

        {/*image*/}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt='home-page-image' />
        </div>
      </motion.div>

      {/*sponsors*/}
      {useMediaQuey && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={Bull} alt='sponsor-1' width={50} height={50} />
              <img src={Heineken} alt='sponsor-2' width={50} height={50} />
              <img src={Versache} alt='sponsor-3' width={50} height={50} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;