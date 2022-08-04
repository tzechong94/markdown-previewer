import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';



function Previewer({ textfield, onPreviewerExpand }) {
    return (
      <div className="previewer-wrapper" id="previewer-wrapper">
        <div onClick={onPreviewerExpand} className="toolbar">Previewer</div>
        <div id="preview" className="preview-area">
            <ReactMarkdown children={textfield} remarkPlugins={[remarkGfm]}/>
        </div>
      </div>
    );
  }
  
  export default Previewer;
  