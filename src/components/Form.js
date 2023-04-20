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

    // return <div>
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label>Title</label>
    //             <input type="string" onChange={handletitle}></input>
    //         </div>
    //         <div>
    //             <label>Url</label>
    //             <input type="string" onChange={handleurl}></input>
    //         </div>
    //         <button type="submit">Add</button>
    //     </form>

return <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="string" placeholder="Add Title" onChange={handletitle}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        URL
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="string" placeholder="Add URL" onChange={handleurl}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Add Skill
      </button>
    </div>
  </form>
</div>
};

export default Form;