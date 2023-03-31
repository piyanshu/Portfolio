import Image from '../components/Image';
import profile from '../Assets/profile.jpg';
import Link from '../components/Link';
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

function HomePage(){
    return <div className='h-4/5 flex flex-col justify-center items-center p-20'>
        <div>
            <Image profile={profile} className='h-56 rounded-full'/>
        </div>
        <div className='py-8'>
            <p className='text-4xl text-center font-bold'>I'M Piyanshu Mangla</p>
            <p className='text-2xl py-2'>Competitive programmer & Full Stack Web Developer</p>
        </div>
        <div className="flex justify-around w-1/6 text-3xl p-4 mr-8">
            <Link to='https://github.com/piyanshu'><GrGithub/></Link>
            <Link to='https://www.linkedin.com/in/piyanshu-mangla-7240a81a6/'><BsLinkedin/></Link>
            <Link to='https://www.facebook.com/piyanshu.mangla.3'><GrFacebook/></Link>
        </div>
    </div>
};
export default HomePage;