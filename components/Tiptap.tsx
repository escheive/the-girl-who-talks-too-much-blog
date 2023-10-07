'use client'

import React, { useState } from 'react';
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';
import { createPostfix, formatDiagnosticsWithColorAndContext } from 'typescript';


const Tiptap = () => {
    const [formState, setFormState] = useState({});

    const createPost = (postData: {}) => {
       
    }
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event?.preventDefault();

        createPost(formState)
    }

    const handleChange = (event: { target: { value: any; name: any; }; }) => {
        console.log(event.target.value)
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

  const editor = useEditor({
    extensions: [
        StarterKit,
        Heading,
        Underline,
    ],
    content: '<h1>Write your blog here...</h1>',
  })

  return (
    <>
        <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={formState.title || ''}
            required
        />
        <input
            name="Author"
            placeholder="Author"
        ></input>
        <input
            name="Published"
            placeholder="Published: True or False"
        ></input>
        {editor && (
            <div className="tiptap-menu-container">
                <div className="tiptap-menu">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        <strong>B</strong>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        <em>i</em>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        <s>S</s>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'is-active' : ''}
                    >
                        <u>U</u>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                    >
                        H3
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                    >
                        H4
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                    >
                        H5
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                    >
                        H6
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active' : ''}
                    >
                        UL
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active' : ''}
                    >
                        OL
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeBlock') ? 'is-active' : ''}
                    >
                        Code Block
                    </button>
                    <button
                        onClick={() => {
                        // Replace 'your-image-url' with the actual URL of the image
                        const imageUrl = prompt('Enter the URL of the image:');
                        if (imageUrl) {
                            editor.chain().focus().setImage({ src: imageUrl }).run();
                        }
                        }}
                    >
                        Image
                    </button>
                    <button
                        onClick={() => {
                        // Replace 'your-link-url' with the actual URL of the link
                        const linkUrl = prompt('Enter the URL of the link:');
                        if (linkUrl) {
                            editor.chain().focus().setLink({ href: linkUrl }).run();
                        }
                        }}
                    >
                        Link
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHorizontalRule().run()}
                        className={editor.isActive('horizontalRule') ? 'is-active' : ''}
                    >
                        Horizontal Rule
                    </button>
                </div>
                <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        <strong>B</strong>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        <em>i</em>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        <s>S</s>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'is-active' : ''}
                    >
                        <u>U</u>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                    >
                        H3
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active' : ''}
                    >
                        UL
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active' : ''}
                    >
                        OL
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeBlock') ? 'is-active' : ''}
                    >
                        Code Block
                    </button>
                    <button
                        onClick={() => {
                        // Replace 'your-image-url' with the actual URL of the image
                        const imageUrl = prompt('Enter the URL of the image:');
                        if (imageUrl) {
                            editor.chain().focus().setImage({ src: imageUrl }).run();
                        }
                        }}
                    >
                        Image
                    </button>
                    <button
                        onClick={() => {
                        // Replace 'your-link-url' with the actual URL of the link
                        const linkUrl = prompt('Enter the URL of the link:');
                        if (linkUrl) {
                            editor.chain().focus().setLink({ href: linkUrl }).run();
                        }
                        }}
                    >
                        Link
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHorizontalRule().run()}
                        className={editor.isActive('horizontalRule') ? 'is-active' : ''}
                    >
                        Horizontal Rule
                    </button>
                </BubbleMenu>
            </div>
        )}
        <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap;