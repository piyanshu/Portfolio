import { useAddSkillsMutation, useFetchSkillsQuery } from "../store";
import Button from "../components/Button";
import Skill from "../components/Skill";

function SkillsPage(){
    const { data, isFetching } = useFetchSkillsQuery();
    const [ addSkill ] = useAddSkillsMutation();

    const handleAddSkill = () => {
        addSkill({
            url: 'Piyanshu', title: 'Mangla'
        });
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
        <button onClick={handleAddSkill}>
            Add Skill
        </button>
        <div className="flex flex-wrap">{content}</div>
    </div>
};
export default SkillsPage;