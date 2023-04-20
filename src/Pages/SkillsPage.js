import { useAddSkillsMutation, useFetchSkillsQuery } from "../store";
import Form from "../components/Form";
import Skill from "../components/Skill";
import { useState } from "react";

function SkillsPage(){
    const [isShown, setIsShown] = useState(false);

    const { data, isFetching } = useFetchSkillsQuery();
    const [ addSkill ] = useAddSkillsMutation();

    const handleClick = () => {
        setIsShown(true);
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
    return <div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mr-2" onClick={handleClick}>
            Add Skill
        </button>

        {isShown && <Form onAddSkill={handleAddSkill}/>}

        <div className="flex flex-wrap">{content}</div>
    </div>
};
export default SkillsPage;