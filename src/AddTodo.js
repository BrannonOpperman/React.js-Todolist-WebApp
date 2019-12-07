import React, { Component } from 'react'

// Responsible for the input field and allowing input functionality of new list items
class AddTodo extends Component {
    state = {
        content: ''
    }
    //Updating the value in content upon text entry
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        //Clears the input field after a submit
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;