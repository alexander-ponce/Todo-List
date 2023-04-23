import List from './components/List';
import Form from './components/Form';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [content, setContent] = useState ([]);

  return (
    <div className="App container">
      <Form content = {content} setContent={setContent} />
      <List content = {content} setContent={setContent}/>
    </div>
  );
}

export default App;
