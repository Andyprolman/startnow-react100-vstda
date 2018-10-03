import React, { Component } from 'react';

export default class Task extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    } 
    
    

    render(){
        
        return(          
            <div className='col-md-4'>
                <div className='panel panel-default'>
                    <div className='panel panel-heading' style={{marginBottom: '0px'}}>Add new To-Do</div>
                    <div className='panel panel-body' style={{paddingTop:'10px', marginBottom:'0px'}}>
                        <div>
                            <label>I want to...</label>
                        </div>
                        <div>
                            <textarea name='description' className='form-control create-todo-text' type='text' placeholder='add task' onChange={this.props.changeValues}/>
                        </div>
                        <div>
                            <label style={{paddingTop:'10px'}}>How much of a priority is this?</label>
                        </div>
                        <div className='custom-select'>
                            <select name='priority' className='form-control create-todo-priority' onChange={this.props.changeValues}>
                                <option style={{color:'red'}}value='High'>High</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div>
                            <button className='btn btn-success create-todo' onClick={this.props.addItem} style={{width:'326px', marginTop:'20px'}}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
                           
           
        )
    }
}