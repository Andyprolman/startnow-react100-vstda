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
                    <div className='panel panel-heading'>Add new To-Do</div>
                    <div className='panel panel-body'>
                        <div>
                            <label>I want to...</label>
                        </div>
                        <div>
                            <textarea name='description' className='form-control' type='text' placeholder='add task' onChange={this.props.changeValues}/>
                        </div>
                        <div>
                            <label>How much of a priority is this?</label>
                        </div>
                        <div className='custom-select'>
                            <select name='priority' className='form-control' onChange={this.props.changeValues}>
                                <option value='High'>High</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div>
                            <button className='btn btn-success' onClick={this.props.addItem}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
                           
           
        )
    }
}