import Form from "../components/Form";
import Link from '../components/Link';
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { GoDeviceMobile } from "react-icons/go";
import { AiTwotoneMail } from "react-icons/ai";

function ContactPage(){
    return (
        <div>
            <div className="flex"> 
                <div className="w-3/5 pt-20">
                    <p className="text-4xl font-bold text-center">Send Message</p>
                    <Form width="w-4/6" string1="Your Email" string2="Your Message" btnText="Send Message"/>
                </div>
                <div className="w-2/5 my-auto pl-8">
                    <p className="text-2xl font-bold mt-24">My Address</p>
                    <div className="flex mt-8 text-lg">
                        <ImLocation2 className="text-xl mr-2"/>
                        <p className="">Haryana, India</p>
                    </div>
                    <div className="flex mt-4 text-lg">
                        <GoDeviceMobile className="text-xl mr-2"/>
                        <p>9999999999</p>
                    </div>
                    <div className="flex mt-4 text-lg">
                        <AiTwotoneMail className="text-xl mr-2"/>
                        <p>piyanshumangla456@gmail.com</p>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-around w-1/6 text-3xl p-4 mx-auto mt-16">
                <Link to='https://github.com/piyanshu'><GrGithub/></Link>
                <Link to='https://www.linkedin.com/in/piyanshu-mangla-7240a81a6/'><BsLinkedin/></Link>
                <Link to='https://www.facebook.com/piyanshu.mangla.3'><GrFacebook/></Link>
            </div>
        </div>
    );
};
export default ContactPage;