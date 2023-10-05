'use client'

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';


const Tiptap = () => {

  const editor = useEditor({
    extensions: [ StarterKit ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <>
        <EditorContent editor={editor} />
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={editor}>This is the bubble menue</BubbleMenu>
    </>
  )
}

export default Tiptap;