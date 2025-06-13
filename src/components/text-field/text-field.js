// src/components/text-field/text-field.js
// Load TipTap via ESM-style CDN
import { Editor }     from 'https://cdn.jsdelivr.net/npm/@tiptap/core@2.0.0-beta.142/+esm';
import StarterKit      from 'https://cdn.jsdelivr.net/npm/@tiptap/starter-kit@2.0.0-beta.20/+esm';

export default function initTextField() {
    const editor = new Editor({
        element: document.getElementById('text-field'),
        extensions: [StarterKit],
        content: '<p>Click here to start typing…</p>',
        onUpdate: ({ editor }) => {
            // persist HTML if you like:
            localStorage.setItem('textFieldContent', editor.getHTML());
        }
    });

    // Load saved content from localStorage
    const saved = localStorage.getItem('textFieldContent');
    if (saved) {
        editor.commands.setContent(saved);
    }
}
