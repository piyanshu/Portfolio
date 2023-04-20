import { useState } from "react";

function Form({ onAddSkill }){
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handletitle = (event) => {
        setTitle(event.target.value);
    };
    const handleurl = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddSkill({
            title: title,
            url: url
        })
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="string" onChange={handletitle}></input>
            </div>
            <div>
                <label>Url</label>
                <input type="string" onChange={handleurl}></input>
            </div>
            <button type="submit">Add</button>
        </form>
    </div>
};
export default Form;