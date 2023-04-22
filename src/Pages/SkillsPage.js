import { useAddSkillsMutation, useFetchSkillsQuery } from "../store";
import Form from "../components/Form";
import Skill from "../components/Skill";
import { useState } from "react";

function SkillsPage(){
    const [isShown, setIsShown] = useState(false);

    const { data, isFetching } = useFetchSkillsQuery();
    const [ addSkill ] = useAddSkillsMutation();

    const handleClick = () => {
        setIsShown(!isShown);
    };
    const handleAddSkill = (skill) => {
        addSkill(skill);
        setIsShown(false);
    };

    let content;
    if(isFetching){
        content = <div>Please wait till your skills are fetch...</div>
    }
    else{
        content = data.map((skill) => {
            return <Skill key={skill.id} skill={skill}/>
        })
    }
    let value;
    if(isShown){
        value = 'Show Skills';
    }else{
        value= 'Add Skill';
    }
    return <div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mt-4" onClick={handleClick}>
            {value}
        </button>

        {isShown && <Form onAddSkill={handleAddSkill}/>}

        {!isShown && <div className="flex flex-wrap mt-4">{content}</div>}
    </div>
};
export default SkillsPage;