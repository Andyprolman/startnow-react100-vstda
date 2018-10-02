
import React, { Component } from 'react';

export default class View extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id){
        this.props.deleteItem(id)
        
    }
    render(){
        return(         
            <div className='col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel panel-heading'>View To-do's</div>
                    <div className='panel panel-body'>
                        {this.props.items.length === 0 ? 
                        <div>
                            <p>Welcome to Very Simple To-Do App!</p>
                            <p>Get started now by adding a new to-do on the left.</p>
                        </div>
                        : this.props.items.map(item =>(
                            <div hidden={this.props.showEdit} key={item.id} className='well'>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <h5>{item.description}</h5>
                                    </div>
                                    <div className='col-md-3'>
                                        <h5>{item.priority}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn btn-primary'onClick={this.props.editItem}>Edit</button>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn btn-primary' onClick={(e)=>this.deleteItem(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div hidden={!this.props.showEdit} className='panel panel-body'>
                            <label>Description</label>
                            <textarea  className='form-control'></textarea>
                            <label>Priority</label>
                            <div className='custom-select'>
                                <select className='form-control'>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>
                            <div>
                                <button className='btn btn-success'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
