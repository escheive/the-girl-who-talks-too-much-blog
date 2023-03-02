// Dependencies
import { useState } from "react";

// An array for each input added so they can be rendered on the page
const inputArr: any[] | (() => any[]) = [
    
];

// Keeps track of number of inputs added so that they can be looped over and stored into an array
let numberOfInputs = 0


export default function create() {

    // useState to dynamically render inputs on page
    const [arr, setArr] = useState(inputArr);

    // Function to add a textarea input on the page
    const addTextarea = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'textArea',
                    class: 'w-3/4 my-1 py-4',
                    placeholder: 'Paragraph',
                    value: '',
                }
            ];
        });
    };

    // Function to add a title input on the page
    const addTitle = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'text',
                    class: 'w-1/2 my-2',
                    placeholder: 'Title',
                    value: '',
                }
            ];
        });
    };

    // Function to add an image input on the page
    const addImage = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'text',
                    class: 'my-2',
                    placeholder: 'Image url here',
                    value: ''
                }
            ];
        });
    };

    // Function to remove the last added input from the page
    const removeInput = () => {
        arr.pop()
        setArr(s => {
            return [
                ...s
            ];
        });
    }

    // Function to update the values on page as they are typed
    const handleChange = (e: { preventDefault: () => void; target: { id: any; value: string; }; }) => {
        e.preventDefault();

        const index = e.target.id;
        console.log(arr)
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;

            return newArr;
        });
    };

    // Function to handle submission of the form
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        let content: any[] = []
        
    }

    return (

        <div className='flex flex-col'>
            <h1>Lets make a post</h1>

            <div>
            
                <button onClick={addTextarea} type="button" className="m-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Paragraph
                </button>

                <button onClick={addTitle} type="button" className="m-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Title
                </button>

                <button onClick={addImage} type="button" className="m-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Image
                </button>

                <button onClick={removeInput} type="button" className="m-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Remove
                </button>

            </div>

            <form action="POST" className="flex flex-col items-center my-4">

                <input
                    name='title'
                    className='my-4 w-1/2 py-4'
                    placeholder='Post Title'
                    type='text'
                />

                {arr.map((item, i) => {
                    numberOfInputs += 1
                    if ( item.type == 'textArea' ) {
                        return (
                            <textarea
                                onChange={handleChange}
                                className={item.class}
                                placeholder={item.placeholder}
                                value={item.value}
                                id={i}
                                type={item.type}
                            />
                        )
                    }
                    return (
                        <input
                            onChange={handleChange}
                            className={item.class}
                            placeholder={item.placeholder}
                            value={item.value}
                            id={i}
                            type={item.type}
                        />
                    );
                })}

                <button type='submit' className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
            </form>

        </div>

    );
}