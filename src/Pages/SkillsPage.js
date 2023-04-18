import { useAddSkillsMutation, useFetchSkillsQuery } from "../store";

function SkillsPage(){
    const [addSkills] = useAddSkillsMutation();
    const handleClick = () => {
        addSkills({
            url: 'Piyanshu',
            title: 'Mangla'
        });
    }
   
    return <div>
        <button onClick={handleClick}>
            Skills
        </button>
    </div>
};
export default SkillsPage;