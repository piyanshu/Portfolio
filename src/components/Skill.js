function Skill({ skill }){
    return <div className="flex border border-sky-500 w-auto h-auto p-4 ml-8 mb-4">
        <div className=" flex items-center w-14 h-14 mr-4">
            <img src={skill.url} alt="skill image"/>
        </div>
        <div className="m-auto">
            {skill.title}
        </div>
    </div>
};
export default Skill;