import Image from '../components/Image';
import profile from '../images/profile.jpg';

function HomePage(){
    return <div className='h-3/4 flex flex-col justify-center items-center'>
            <div>
                <Image profile={profile} className='h-56'/>
            </div>
            <div className='py-8'>
                <p className='text-5xl text-center font-bold'>I'M Piyanshu Mangla</p>
                <p className='text-3xl py-2'>Competitive programmer & Full Stack Web Developer</p>
            </div>
    </div>
};
export default HomePage;