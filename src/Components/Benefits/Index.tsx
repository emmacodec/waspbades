import Text from "@/Shared/Text";
import { SelectedPage } from "@/Shared/type";
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/*header*/}
            <div>
               <Text>Top-Notch Gym Tutorials</Text>
               <p>Visit us today and experience top of the art gym tutorial with our well trained tutor Michael Tyson. You can as well join our club and be a member, also contribute for our community development service.</p> 
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;