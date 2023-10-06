'use client'

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';


const Tiptap = () => {

  const editor = useEditor({
    extensions: [ StarterKit ],
    content: '<p>Write your blog here...</p>',
  })

  return (
    <>
    {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
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
    </BubbleMenu>}
    <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap;