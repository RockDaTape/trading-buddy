// src/components/text-field/text-field.js

import { Editor }   from '@tiptap/core';
import StarterKit   from '@tiptap/starter-kit';

export default function initTextField() {
    // 1) Mount the editor into the <div id="text-field">
    const editor = new Editor({
        element: document.getElementById('text-field'),
        extensions: [StarterKit],
        content: '<p>Click here to start typing…</p>',
        onUpdate: ({ editor }) => {
            // 3) Persist content
            localStorage.setItem('textFieldContent', editor.getHTML());
        }
    });

    // 2) Hydrate from localStorage if present
    const saved = localStorage.getItem('textFieldContent');
    if (saved) {
        editor.commands.setContent(saved);
    }
}
