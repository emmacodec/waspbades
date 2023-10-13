import Text from "@/Shared/Text";
import { SelectedPage } from "@/Shared/type";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Enroll = ({setSelectedPage}: Props) => {

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

const handleSubmit = async (e: any) => {
    const isCorrect = await trigger();
    if (!isCorrect) {
        e.preventDefault();
    }
}

const styles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white mt-5`

  return (
    <section id="enroll" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.EnrollNow)}
        >
            {/*header*/}
            <motion.div 
            initial="hidden" 
            whileInView='visible' 
            viewport={{once:true, amount:0.5}} 
            transition={{delay: 0.2, duration: 2}}
            variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0},}}
            className="md:w-3/5"
            >
                <Text>
                    <span className="text-primary-500">Enroll Now</span> To be Physically Fit
                </Text>
                <p className="my-5">Hurry now and register with us as our team of professionals awaits you to give you a ride on our world class facilities and training for the best body shape and fitness..</p>
            </motion.div>

            {/*forms*/}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div 
                     initial="hidden" 
                     whileInView='visible' 
                     viewport={{once:true, amount:0.5}} 
                     transition={{delay: 0.2, duration: 2}}
                     variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0},}}
                className="mt-10 basis-3/5 md:mt-0"
                >
                    <form
                    target="_blank"
                    onSubmit={handleSubmit}
                    method="POST"
                    action="https://formsubmit.co/461fc081ef4670429b29fad1762e823f"
                    >
                        <input 
                        className={styles} 
                        type="text" 
                        placeholder="FULL NAME" 
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-300">
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max length is a 100 character"}
                            </p>
                        )}

                        <input 
                        className={styles} 
                        type="email" 
                        placeholder="EMAIL" 
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-300">
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid email address"}
                            </p>
                        )}

                       <textarea 
                        className={styles} 
                        rows={4}
                        cols={40}
                        placeholder="MESSAGE" 
                        {...register("message", {
                            required: true,
                            maxLength: 3000,
                        })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-300">
                                {errors.message.type === "required" && "This field is required"}
                                {errors.message.type === "maxLength" && "Max length is a 3000 character"}
                            </p>
                        )}

                        <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Enroll;