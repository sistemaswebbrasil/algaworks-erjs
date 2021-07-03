import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Clock from './components/Clock';
import Person from './components/Person';
import Post from './components/Post';
import Sidebar from './components/Sidebar';


function App() {

  const [post] = useState({
    title: "Meu primeiro Post",
    content: "Este é o meu primeiro Post"
  })

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Person />
        <Sidebar post={post} />
        
        <Card title={"Card"}>
          <Post post={post} totalComments={12} />
        </Card>


      </header>
    </div>
  );
}

export default App;