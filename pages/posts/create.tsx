
import { useState } from "react";

const inputArr = [
    {
        type: 'text',
        id: 1,
        value: ''
    }
];


export default function create() {

    const [arr, setArr] = useState(inputArr);

    const addTextarea = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'text',
                    class: 'create-paragraph',
                    value: '',
                }
            ];
        });
    };

    const addTitle = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'text',
                    class: 'create-title',
                    value: '',
                }
            ];
        });
    };

    const addImage = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'file',
                    class: 'create-image',
                    value: '',
                }
            ];
        });
    };

    const removeInput = () => {
        arr.pop()
        setArr(s => {
            return [
                ...s
            ];
        });
    }

    const handleChange = (e: { preventDefault: () => void; target: { id: any; value: string; }; }) => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;

            return newArr;
        });
    };

    return (

        <div className='flex flex-col'>
            <h1>Lets make a post</h1>

            <div>
            
                <button onClick={addTextarea} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Paragraph
                </button>

                <button onClick={addTitle} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Title
                </button>

                <button onClick={addImage} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Image
                </button>

                <button onClick={removeInput} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Remove
                </button>

            </div>

            {arr.map((item, i) => {
                return (
                    <input
                        onChange={handleChange}
                        value={item.value}
                        id={i}
                        type={item.type}
                    />
                );
            })}
        </div>

    );
}