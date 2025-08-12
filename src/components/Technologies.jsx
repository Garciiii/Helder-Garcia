import { RiReactjsLine } from "react-icons/ri";
import { SiDotnet, SiMysql, SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3, FaCss3Alt, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaP } from "react-icons/fa6";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <TiHtml5 className="text-7xl text-orange-500" />
                </div>
                <div className="p-4">
                    <FaCss3Alt className="text-7xl text-blue-500" />
                </div>
                <div className="p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </div>
                <div className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <SiMysql className="text-7xl" />
                </div>
                <div className="p-4">
                    <SiDotnet className="text-7xl text-purple-400" />
                </div>
                <div className="p-4">
                    <FaPython className="text-7xl text-yellow-400" />
                </div>
                <div className="p-4">
                    <SiPhp className="text-7xl text-indigo-600" />
                </div>
            </div>
        </div>
    );
}

export default Technologies;
