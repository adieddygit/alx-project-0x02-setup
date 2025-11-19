import { PostData, PostModalProps} from "@/interfaces";
import React, {useState} from 'react'

const PostModal: React.FC<PostModalProps> = ({onClose, onSubmit})=>{
    const [post, setPost] = useState<PostData>({
        title: "",
        content: "",
    });

    const [extraInputs, setExtraInputs] = useState([""]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setPost((prevPost)=> ({...prevPost, [name]: value}))
    };

    const addInput = ()=>{
        setExtraInputs([...extraInputs, ""])
    }

const handleExtraInputChange = (value: string, index:number)=>{
    const updated = [...extraInputs];
    updated[index] = value;
    setExtraInputs(updated)
    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        // Convert content text into bullet list
        const lines = post.content.split("\n").filter((l) => l.trim() !== "");

        const formattedContent = (
            <ul className="list-disc ml-5">
                {lines.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        );

        onSubmit({
            title: post.title,
            content: formattedContent,
        });

        onClose();
    };

    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Card</h2>
                <form action="Post" onSubmit={handleSubmit}>
                    <div className="mb-4 p-5">
                        <label htmlFor="title" className="block text-gray-700 mb-2">
                            <input type="text" name="title" value={post.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter title"/> 
                            <ul>
                                <li>
                                    <input type="text" name="content" id="content" value={post.content} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-3
                                    " placeholder="Add content"/></li>
                                {extraInputs.map((value, index)=>(
                                <li key={index}>
                                    <input type="text"
                                    value={value}
                                    onChange={(e)=>
                                        handleExtraInputChange(e.target.value, index)
                                    }className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-3"
                                    placeholder={`Additional input ${index + 1}`} 
                                    />
                                </li>
                                    ))}
                            </ul>  
                        </label>  

                        <button type="button" onClick={addInput} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white focus:outline-none rounded-lg">Add Input Field</button>  
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none border rounded-lg">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PostModal;