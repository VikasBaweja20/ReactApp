import React, { Component } from 'react'
import TaskForm from './taskForm';
import TaskList from './taskList';

class index extends Component {
  state={
      taskName:"",
      taskLists:[],
      status: "all",
  }

  onChange= e =>{
      console.log(e.target.value);
      this.setState({taskName: e.target.value})
  }

  addListitem = e => {
      e.preventDefault();
      const{ taskName, taskLists }=this.state;
      const maxTaskId=taskLists.length>0?taskLists[taskLists.length-1].id:0;
      console.log(taskName, taskLists);
      this.setState({ 
        taskLists:[...taskLists, {id: maxTaskId+1, name: taskName, isDone:false}],
        taskName:"" 
        });
  }

  deleteTask=(id)=>{
    const{  taskLists }=this.state;
    this.setState({ 
        taskLists: taskLists.filter(x => x.id !==id)
        });
  }

  taskDone=(id)=>{
    const{  taskLists }=this.state;
    const index=taskLists.findIndex(x => x.id ===id);
    this.setState({ 
        taskLists: [...taskLists.slice(0,index),
          {...taskLists[index],isDone:!taskLists[index].isDone},
           ...taskLists.slice(index+1)]
        });
  }

  changeStatus=status=>{
    this.setState({status: status});
  }

  render() {

    const{ taskName, taskLists, status }=this.state;
    let data = taskLists;
    if (status === "pending") {
      data = taskLists.filter(x => !x.isDone);
    }
    if (status === "completed") {
      data = taskLists.filter(x => x.isDone);
    }
      
    return (
      <div>
      <TaskForm onChange={this.onChange} value={taskName} addListitem={this.addListitem}></TaskForm>
      <TaskList taskLists={data} taskDone={this.taskDone} deleteTask={this.deleteTask} ></TaskList>
      <div>
      <button onClick={()=>this.changeStatus('all')} >All</button>
      <button onClick={()=>this.changeStatus('completed')} >Completed</button>
      <button onClick={()=>this.changeStatus('pending')} >Pending</button>
      </div>  

      </div>
    )
  }
}

export default index; 