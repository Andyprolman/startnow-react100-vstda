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
      rowHidden: false,
      changeColor: true,
    }
    
    this.changeValues = this.changeValues.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.displayEditPanel = this.displayEditPanel.bind(this);
    this.editItem = this.editItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  changeValues(e){
    this.setState({
       [e.target.name]:e.target.value,
    })
    
}
  
  addItem(e){
    e.preventDefault()
    let color = ''
    switch(this.state.priority){
      case 'High':
        color = 'red'
        break;
      case 'Medium':
        color = 'yellow'
        break;
      case 'Low':
        color = 'green'
      
    }
    const newItem = {
      description: this.state.description,
      priority: this.state.priority,
      id: Date.now(),
      isEditing: false,
      color: {backgroundColor: color}
      
    }
    this.state.items.push(newItem);
    this.setState({
      items: this.state.items,
      id: newItem.id,
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

  displayEditPanel(id){
    const index = this.state.items.findIndex((item)=>{
      return item.id===id
     })
     console.log(index);
     const newItems = [...this.state.items]
    for(let i=0; i<newItems.length; i++){
      if(newItems[i].isEditing == true){
        newItems[i].isEditing = false;
      }
    }
   newItems[index].isEditing = true;
    this.setState({
      items: newItems,
      index: index,
      
    })
  }

  editItem(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, ':', e.target.value, this.state.index)
  }

  saveItem(e){
    
    let color = ''
    switch(this.state.priority){
      case 'High':
        color = 'red'
        break;
      case 'Medium':
        color = 'yellow'
        break;
      case 'Low':
        color = 'green'
      
    }
    
    const newItems = [...this.state.items];
    const editedItem = {
      description: this.state.description,
      priority: this.state.priority,
      id: this.state.items[this.state.index].id,
      isEditing: false,
      color: {backgroundColor: color}
      
    }

    for(let i=0; i<newItems.length; i++){
      if(editedItem.id == newItems[i].id){
        this.state.items.splice(i,1,editedItem)

      }
      console.log(this.state.items);
    }

    this.setState({
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
            displayEditPanel={this.displayEditPanel}
            showEdit={this.state.showEdit}
            editItem={this.editItem}
            saveItem={this.saveItem}
            rowHidden={this.state.rowHidden}
            />
        </div>
      </div>
    );
  }
}

export default App;
