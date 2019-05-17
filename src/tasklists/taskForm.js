import React, { Component } from 'react'
import PropTypes from 'prop-types'

class taskForm extends Component {
  render() {
    return (
        <form>
        <input type="text" onChange={this.props.onChange} value={this.props.taskName}></input>
        <button onClick ={this.props.addListitem}>Add Task</button>
        </form>
    )
  }
}

taskForm.propTypes = {
    taskName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    addListitem: PropTypes.func.isRequired 
  }

export default taskForm;