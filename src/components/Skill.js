import { GoTrashcan } from 'react-icons/go';
import { useRemoveSkillsMutation } from '../store';

function Skill({ skill }){
    const [removeSkill] = useRemoveSkillsMutation();

    const handleRemoveSkill = () => {
        removeSkill(skill);
    };

    return <div onClick={handleRemoveSkill} className="flex border border-sky-500 w-auto h-auto p-4 ml-8 mb-4 relative cursor-pointer m-2">
        <div className=" flex items-center w-14 h-14 mr-4">
            <img src={skill.url} alt="skill image"/>
        </div>
        <div className="m-auto">
            {skill.title}
        </div>
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
        </div>
    </div>
};
export default Skill;