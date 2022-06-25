
import './App.css';




import {useState,useEffect} from 'react';
//now we just have to insert our click action here and also we have to delete and update each element

let messagearray=[];
function App() {
	const[message,setMessage]=useState('');
	const[toDos,setTodos]=useState([]);

	const handlechange=event=>{
		setMessage(event.target.value);
		


	}
	const change=event=>{
		messagearray.push(message);
		setTodos([...messagearray]);
		console.log(messagearray);
	}
	const Del=event=>{
		messagearray.pop();
		setTodos([...messagearray])
	}
  return (
  	<div>
  	<h3>To Do List</h3>
  	<div className="content">


  	<input type="text" id="message" name="message" value={message}
  	placeholder="Enter the task to be added here" className="textbox" onChange={handlechange}/>
  	<button className="submit" onClick={change}>Add Task</button>
	</div>


	{toDos.map((value)=>{
		return(

	 <div className="dynamic">

	 <p className="dynamicontent" align="center"  id="">{value}</p>
	<button className="submit1" key={value} onClick={Del}>Done</button>
	</div>)
	})    }


	<p>For the Psychological reasons of completing a task we have
	only allowed deletion from end so that you would be able to
	complete everything</p>

	</div>





  );
}

export default App;
