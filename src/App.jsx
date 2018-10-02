import React, { Component } from 'react';
import Task from './Task'
import View from './View'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
      priority: 'High',
      items: [],
      showEdit: false,
    }
    
    this.changeValues = this.changeValues.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  changeValues(e){
    this.setState({
       [e.target.name]:e.target.value,
    })
    
}
  
  addItem(e){
    e.preventDefault()
    const newItem = {
      description: this.state.description,
      priority: this.state.priority,
      id: this.state.items.length
      
    }
    this.state.items.push(newItem);
    this.setState({
      items: this.state.items,
    },()=>console.log(newItem))
  }

  deleteItem(id){
    const index = this.state.items.findIndex((item)=>{
     return item.id===id
    })
    console.log(index);
    this.state.items.splice(index,1);
    this.setState({
      items: this.state.items,
    })      
  }

  editItem(){
    this.setState({
      showEdit: true,
    })
  }
  

  

  render() {
    return (
      <div className='container'>
        <div style={{color: 'white'}}>
          <h1>Very Simple To-Do App</h1>
          <h4>Track all of the things</h4>
          <hr></hr>
        </div>
        <div className='row'>
          <Task 
            addItem={this.addItem}
            changeValues={this.changeValues}
            id={this.state.items.length}
          />
          <View
            items={this.state.items}
            description={this.state.items.description}
            priority={this.state.priority}
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            showEdit={this.state.showEdit}
            />
        </div>
      </div>
    );
  }
}

export default App;
