import React from 'react';
import logo from './logo.svg';
import './App.css';
import {convertFromRaw, DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils} from "draft-js";

function App() {

    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    return (
        <>
            <Editor
                editorState={editorState}
                onChange={setEditorState}
            />
        </>
    );
}

export default App;
