import React, { Component } from 'react';
import Tarea from './Tarea.js';
import PropTypes from 'prop-types';

class Tareas extends Component {
  render() {
    return  this.props.tareas.map(tarea =>
      <Tarea
       tarea={tarea}
       key={tarea.id}
       deleteTarea={this.props.deleteTarea}
       checkDone={this.props.checkDone}  /> )
  }
}
// esto ayuda a identificar que tipo de datos son los props que estan pasando
Tareas.propTypes = {
  tareas: PropTypes.array.isRequired
}

export default Tareas;
