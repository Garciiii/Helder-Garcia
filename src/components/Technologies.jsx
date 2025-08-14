import { RiReactjsLine } from "react-icons/ri";
import { SiDotnet, SiMysql, SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3, FaCss3Alt, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaP } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: -100 }}
               transition={{ duration: 1.5 }}
               className="my-20 text-center text-4xl">
               Technologies
            </motion.h2>

            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                    <TiHtml5 className="text-7xl text-orange-500" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(2.8)} className="p-4">
                    <FaCss3Alt className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(2.2)} className="p-4">
                    <SiMysql className="text-7xl" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                    <SiDotnet className="text-7xl text-purple-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3.2)} className="p-4">
                    <FaPython className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(2.6)} className="p-4">
                    <SiPhp className="text-7xl text-indigo-600" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;