import Text from "@/Shared/Text";
import { BenefitType, SelectedPage } from "@/Shared/type";
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import Buttons from "@/Shared/buttons";
import fitness from '../../assets/Fitness8.jpg';


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "World class facilities",
    description: "We specializes in giving you the best training you'll ever experience elsewhere",
  },

  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Millions of subscribers all over the world",
    description: "We have millions of people enrolling for our and training and also joining our community network where we reach out to the less privilege all over the continent",
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "We offer both certificate and diploma course",
    description: "We've trained world class students who have also set-up their establishment and also training the younger generation as well",
  },
];

//want the container to have some effects
const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/*header*/}
            <div className="md:my-5 md:w-3/5">
               <Text>Top-Notch Gym Tutorials</Text>
               <p className="my-5 text-sm">Visit us today and experience top of the art gym tutorial with our well trained tutor Michael Tyson. You can as well join our club and be a member, also contribute for our community development service.</p> 
            </div>

            {/*benefit-card*/}
            <motion.div 
            initial= "hidden"
            whileInView= "visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            className="md:flex items-center justify-between mt-5 gap-8">
              {benefits.map((benefit: BenefitType) => (
                <Benefit 
                key={benefit.title} 
                icon={benefit.icon} 
                title={benefit.title} 
                description={benefit.description}
                setSelectedPage={setSelectedPage} />
              ))}
            </motion.div>

            {/*image and description*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/*image*/}
              <img className="mx-auto" alt="benefit-page-graphics" src={fitness} width={250} height={250} />

              {/*description*/}
              <div>
               {/*title*/}
                  <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-">
                      <div>
                        <Text>Millions of People Around the World Getting {' '} <span className="text-primary-500">Fit</span></Text>
                      </div>
                    </div>
                  </div>
               {/*description*/}
               <p className="my-5">Over the years we've work hard to be where we are today. It all started 15 years ago in Minneapolis, gone through rigorous heart-felt downsides but my dream, visions, missions and aspiration keeps me going</p>
               <p className="mb-5">Now we are now a thriving family that millions of families, loved ones, corporate organizations, groups etc enroll in their large number for our programme. At times we don't have room enough to contain the massive crowd...</p>

                {/*button*/}
                <div className="relative mt-16">
                  <Buttons setSelectedPage={setSelectedPage}>
                    Enroll Now..!
                  </Buttons>
                </div>
              </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;