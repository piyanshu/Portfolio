import { useAddSkillsMutation, useFetchSkillsQuery } from "../store";
import Form from "../components/Form";
import Button from "../components/Button";
import Skill from "../components/Skill";
import { useState } from "react";

function SkillsPage(){
    const [isShown, setIsShown] = useState(false);

    const { data, isFetching } = useFetchSkillsQuery();
    const [ addSkill ] = useAddSkillsMutation();

    const handleClick = () => {
        setIsShown(true);
    }
    const handleAddSkill = (skill) => {
        addSkill(skill);
    }
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
        <button onClick={handleClick}>
            Add Skill
        </button>
        {isShown && <Form onAddSkill={handleAddSkill}/>}

        <div className="flex flex-wrap">{content}</div>
    </div>
};
export default SkillsPage;