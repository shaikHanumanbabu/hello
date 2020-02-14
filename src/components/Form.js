import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             role:''
        }
    }
    handlerUsernameChange = (e) => {
        this.setState({
            username : e.target.value
        }, ()=> {
            console.log(this.state.username);
            
        })
    }
    handlerCommentChange = (e) => {
        this.setState({
            comments:e.target.value
        }, ()=> {
            console.log(this.state.comments);
            
        })
    }
    handlerCourseChange = (e) => {
        this.setState({
            role:e.target.value
        })
    }
    handleSubmit = (e) => {
       alert(`${this.state.username} has posted ${this.state.comments} and he has ${this.state.role} role`)
       e.preventDefault()
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   
                   <div>
                       <label>Username </label>
                       <input type="text"  value={this.state.username} onChange={this.handlerUsernameChange} />
                   </div>
                   <div>
                       <label>Comments</label>
                       <textarea value={this.state.comments} onChange={this.handlerCommentChange}></textarea>
                   </div>
                   <div>
                       <label>Course</label>
                        <select value={this.state.role} onChange={this.handlerCourseChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                   </div>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

export default Form
