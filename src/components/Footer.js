import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import Iconlink from "./Iconlink";

function Footer(){
    return <div className="flex justify-around w-full bg-zinc-500">
        <div className="text-left text-xl p-4 w-full pl-20">
            Designed and Developed By Piyanshu Mangla
        </div>
        <div className="flex justify-around w-1/6 text-xl p-4 mr-8">
            <Iconlink to='https://github.com/piyanshu'><GrGithub/></Iconlink>
            <Iconlink to='https://www.linkedin.com/in/piyanshu-mangla-7240a81a6/'><BsLinkedin/></Iconlink>
            <Iconlink to='https://www.facebook.com/piyanshu.mangla.3'><GrFacebook/></Iconlink>
        </div>
    </div>
};
export default Footer;