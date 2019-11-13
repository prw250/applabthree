import React from 'react';
import './App.css';
 
let post =[{
  date:
  content:
},{
  date:
  content:
}

]

function App() {
  return (
    <div>
  <Profile content={post[0].content} image={post[0].image} alt ={post[0].alt}/>
  <Profile content={post[1].content} image={post[1].image} alt ={post[1].alt}/>
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profileCard">
      <div className="profileImage" />
      <div className="profileHeader">
        <div>
          <h1>{props.date}</h1>
          <p>Columbia River, OR</p>
        </div>
        <div className="likes">
          <h3>100 likes</h3>
        </div>

      </div>
      <div className="profileDescription">
        <img src={props.image} alt={props.alt} />
        <p>{props.content}</p>
      </div>
    </div>
  )
}
export default App;