import Text from "@/Shared/Text";
import { SelectedPage } from "@/Shared/type";
import Fitness1 from "@/assets/Fitness1.jpeg";
import Fitness2 from "@/assets/Fitness2.jpg";
import Fitness3 from '@/assets/Fitness3.jpg';
import Fitness4 from '@/assets/Fitness4.jpeg';
import Fitness5 from '@/assets/Fitness5.jpeg';
import Fitness6 from '@/assets/Fitness6.webp';
import Fitness7 from '@/assets/Fitness7.jpeg';
import { motion } from "framer-motion";



const classes = [
    {
        name: "Weight Training Classes",
        description: "We offer world class weight training tutorials to keep your body fit and boost your muscles.",
        image: Fitness1,
    },

    {
        name: "Training Classes",
        description: "We offer world class training tutorials to keep your body fit and boost your muscles.",
        image: Fitness2,
    },

    {
        name: "Fitness Classes",
        description: "We offer world class fitness training tutorials to keep your body fit and boost your muscles.",
        image: Fitness3,
    },

    {
        name: "Yoga Classes",
        description: "We offer world class yoga training tutorials to keep your body fit and boost your mental capacity.",
        image: Fitness4,
    },

    {
        name: "Ji-jutsu Classes",
        description: "We offer world class tai-chi training tutorials to keep your body fit and boost your chi skills.",
        image: Fitness5,
    },

    {
        name: "Wrestling Classes",
        description: "We offer world class wrestling training tutorials to keep your body fit and boost your stamina.",
        image: Fitness6,
    },

    {
        name: "Sword Classes",
        description: "We offer world class sword training tutorials to keep your body fit and boost your sword skills.",
        image: Fitness7,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Classes = ({setSelectedPage}: Props) => {
  return (
    <section id="classes" className="w-full bg-primary-300 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Varieties)}
        >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            className="mx-auto w-5/6">
                <div className="md:w-3/5">
                    <Text>Our Varieties</Text>
                    <p className="py-5">Our varieties ranges from beginner, to amateur, and then to professional. All this requires a certain minimum duration before you pass to the next phase as thorough screening abd examination will be conducted. Only successful candidate who scaled through the exams and physical challenge will deem fit to enter next level.</p>
                </div>
            </motion.div>

            {/*side-scroller*/}
            <div className="mt-10 h-[400px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item, index) => (
                        <Variety />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Classes;