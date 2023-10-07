// Dependencies
import { useState } from "react";
// Components
import Tiptap from '@/components/Tiptap';

const create = () => {
    const [postContent, setPostContent] = useState({
        title: null,
        author: null,
        content: null,

    })

    const handleSubmit = () => {

    }

    return (

        <Tiptap />

    );
}

export default create;