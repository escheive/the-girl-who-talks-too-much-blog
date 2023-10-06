'use client'

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';


const Tiptap = () => {

  const editor = useEditor({
    extensions: [
        StarterKit,
        Heading.configure({
            levels: [1, 2, 3],
        }),
        Underline,
    ],
    content: 'Write your blog here...',
  })

  return (
    <>
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