import Button from "../components/Button";
import Link from '../components/Link';
import Image from "../components/Image";
import resume from '../Assets/resume.pdf';
import Photo from '../Assets/photo.jpg';

function AboutPage(){
    return (
        <div>
            <div className="text-center p-16 text-4xl font-bold">
                About Me
            </div>
            <div className="flex pl-24 pb-12"> 
                <div className="h-fit py-4" style={{boxShadow:'10px 10px 5px 12px gray'}}>
                    <Image profile={Photo} className='w-5/12 m-auto'/>
                </div>
                <div className="text-xl pl-36 pr-16 py-4 font-semibold">
                    <div>
                        My name is Piyanshu Mangla, and I'm from Sonepat in Haryana. I graduated from 
                        Sikkim Manipal Institute of Technology with a B.Tech in computer science.
                        <br/>
                        <br/>
                        I'm constantly eager to learn about new technologies and try to find solutions 
                        to ever more problems, which helps me foreward in my life.
                        <br/>
                        <br/>
                        My Hobbies are playing cricket and working out.
                    </div>
                    <div className='border-2 my-12 w-fit px-8 py-4'>
                        <Link to={resume}>
                            <Button>
                                Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutPage;