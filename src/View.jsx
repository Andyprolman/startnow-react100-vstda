
import React, { Component } from 'react';

export default class View extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.displayEditPanel = this.displayEditPanel.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    deleteItem(id){
        this.props.deleteItem(id)   
    }

    displayEditPanel(id){
        this.props.displayEditPanel(id)
    }

    editItem(e, id){
        this.props.editItem(e, id)
    }
    
    render(){
        const priority = this.props.priority
            let color = '';

            switch(priority){
                case 'High':
                    color = 'red';
                    break; 
                case 'Medium':
                    color = 'yellow';
                    break;
                case 'Low':
                    color = 'green'
            }
        
        const style ={
            backgroundColor: color
        }
        
            return(         
            <div className='col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel panel-heading' style={{marginBottom:'0px'}}>View To-do's</div>
                    <div className='panel panel-body' style={{marginBottom:'0px',backgroundColor:'#e6f9ff'}}>
                        {this.props.items.length === 0 ? 
                        <div style={{color:'#0059b3'}}>
                            <p style={{fontWeight:'bold',marginBottom:'0px'}}>Welcome to Very Simple To-Do App!</p>
                            <p>Get started now by adding a new to-do on the left.</p>
                        </div>
                        : this.props.items.map(item =>(
                            <div  key={item.id} className='well' style={item.color}>
                                
                                {!item.isEditing ? <div  className='row'>
                                    <div className='col-md-1'>
                                        <input className='form-control' type='checkbox' style={{height:'15px', width:'15px'}}/>
                                    </div>
                                    <div className='col-md-4'>
                                        <h5>{item.description}</h5>
                                    </div>
                                    <div className='col-md-3'>
                                        <h5>{item.priority}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn btn-primary edit-todo'onClick={(e)=>this.displayEditPanel(item.id)}>Edit</button>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn btn-primary delete-todo' onClick={(e)=>this.deleteItem(item.id)}>Delete</button>
                                    </div>
                                </div> :
                            <div key={item.id} className='panel panel-body'>
                            <label>Description</label>
                            <textarea name='description' className='form-control update-todo-text' onChange={this.props.editItem}></textarea>
                            <label>Priority</label>
                            <div className='custom-select'>
                                <select name='priority' className='form-control' onChange={this.props.editItem}>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>
                            <div>
                                <button className='btn btn-success update-todo' onClick={this.props.saveItem}>Save</button>
                            </div>
                        </div>} 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}
