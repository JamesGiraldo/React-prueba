import React, { Component } from 'react';
// importar biblioteque
import PropTypes from 'prop-types';

class Tarea extends Component {
  StyleCompleted(){
    return{
      fontSize: '20px',
      color:  this.props.tarea.done ? 'gray' : 'green',
      textDecoration: this.props.tarea.done ? 'line-through' : 'none'
    }
  }
  render(){
    const {tarea} = this.props;
    return(
      <div style={this.StyleCompleted()}>
        { tarea.title } -
        { tarea.description } -
        { tarea.done } -
        { tarea.id }
        <input type="checkbox" onChange={this.props.checkDone.bind(this, tarea.id)} />
        <button onClick={this.props.deleteTarea.bind(this, tarea.id)}>
         X
        </button>
      </div>
    )
  }
}
// esto ayuda a identificar que tipo de datos son los props que estan pasando
Tarea.propTypes = {
  tarea: PropTypes.object.isRequired
}



export default Tarea;
