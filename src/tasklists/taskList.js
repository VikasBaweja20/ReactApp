import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class taskList extends Component {


  render() {
    return (
      <Fragment>
      {
          this.props.taskLists.map((item) =>
              <div key={item.id} 
              style={{
                display: "flex",
                margin: 10,
                alignItems: "center"}}>

              <input type="checkbox" 
              value={item.isDone} 
              onClick={()=>this.props.taskDone(item.id)} ></input>
              
              <span style={{
                flex: 1,
                textDecoration: item.isDone ? "line-through" : "none"
              }}>{item.name}</span>
               
              <button onClick={()=>this.props.deleteTask(item.id)}>Delete</button> 
              </div>
          )
      }
      </Fragment>
    )
  }
}

taskList.propTypes={
    taskLists: PropTypes.array,
     taskDone: PropTypes.func.isRequired,
     deleteTask: PropTypes.func.isRequired
}

export default taskList;