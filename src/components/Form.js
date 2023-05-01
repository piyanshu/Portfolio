import { useState } from "react";
import Button from "./Button";
import classNames from "classnames";

function Form({ width, onAddSkill, string1, string2, btnText }){
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
    const classes1 = classNames(
      'shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-2 px-3 rounded w-full', 
    );
    const classes2 = classNames(
      'w-1/2 m-auto pt-6',
      width
    )
// return <div className="w-full w-2/3 mt-6">
//   <form className="bg-grey shadow-xl rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         {string1}
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="string" placeholder={`Add ${string1}`} onChange={handletitle} required/>
//     </div>
//     <div className="mb-6">
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         {string2}
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="string" placeholder={`Add ${string2}`} onChange={handleurl} required/>
//     </div>
//     <div className="flex items-center justify-between">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//         {btnText}
//       </button>
//     </div>
//   </form>
// </div>


    return (
      <div className={classes2}>
        <form onSubmit={handleSubmit} className="bg-grey shadow-xl rounded px-8 pt-8 pb-6">
          <div className="mb-6">
            <label className="block mb-4 font-bold text-gray-700">
              {string1}
            </label>
            <input type="string" placeholder={`Add ${string1}`} onChange={handletitle} className={classes1} required/>
          </div>
          <div className="mb-8">
            <label className="block mb-4 font-bold text-gray-700">
              {string2}
            </label>
            <input type="string" placeholder={`Add ${string2}`} onChange={handleurl} className={classes1} required/>
          </div>
          <div>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {btnText}
            </Button>
          </div>
        </form>
      </div>
    );
};

export default Form;