import Editor from './components/Editor';
import Previewer from './components/Previewer';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import e from 'express';



function App() {
  const initialText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const [textfield, setTextfield] = useState(initialText);
  const [route, setRoute] = useState("home");
  const [editorClass, setEditorClass] = useState("");
  

  const onTextChange = (event) =>{
    setTextfield(event.target.value);
}

  const onButtonClick = () =>{
    console.log(textfield);
  }

  const onEditorExpand = () => {
    if (route === 'home') {
      setRoute('editor');
      setEditorClass('maximised');
    } else {
      setRoute('home');
      setEditorClass('');
    }
  }

  const onPreviewerExpand = () => {
    if (route === 'home') {
      setRoute('previewer');
    } else {
      setRoute('home');
    }
  }


  
  return (
    // <div className="App" id="app">
    //   <Editor onTextChange={onTextChange} onButtonClick={onButtonClick} initialText={initialText}/>
    //   <Previewer textfield={textfield}/>
    // </div>
    <div className="App" id="app">
      <h1>React Markdown Previewer</h1>
    { route === 'home'
    ? 
    <div>
      <p>Type in the editor and preview the markdown results below in the previewer.</p>
      <div>
        <Editor textfield={textfield} route={route} onTextChange={onTextChange} onButtonClick={onButtonClick} onEditorExpand={onEditorExpand} initialText={initialText}/>
        <Previewer textfield={textfield} onPreviewerExpand={onPreviewerExpand}/>
      </div>
    </div>
    : (
      route === 'editor' ? 
      <Editor textfield={textfield} editorClass={editorClass} onTextChange={onTextChange} route={route} onButtonClick={onButtonClick} onEditorExpand={onEditorExpand} initialText={initialText}/>
      : <Previewer textfield={textfield} onPreviewerExpand={onPreviewerExpand}/>
    )

}
</div>
    )
    }

export default App;
