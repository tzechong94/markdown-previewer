import React from "react";


function Editor({ editorClass, onEditorExpand, onTextChange, onButtonClick, textfield }) {
    return (
        <div className="editor-wrapper" id="editor-wrapper">
            <div className="toolbar" onClick={onEditorExpand}>
                Editor 
            </div>
            <textarea 
            id="editor" 
            type="text" 
            onChange={onTextChange}
            defaultValue={textfield}
            className={editorClass}></textarea>
        </div>
    );
  }
  
  export default Editor;
  