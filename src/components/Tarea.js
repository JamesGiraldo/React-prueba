import React, { Component } from 'react';
// importar biblioteque
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <tbody>
            <tr>
              <th scope="row">
              <td>{ tarea.id }</td>
              <td>{ tarea.title }</td>
              <td>{ tarea.description }</td>
              <td>{ tarea.done }</td>
              <td>
                <input type="checkbox" className="mr-2" onChange={this.props.checkDone.bind(this, tarea.id)} />
                <button className="btn btn-outline-danger ml-2" onClick={this.props.deleteTarea.bind(this, tarea.id)}>
                 X
                </button>
              </td>
              </th>
            </tr>
          </tbody>
      </div>
    )
  }
}
// esto ayuda a identificar que tipo de datos son los props que estan pasando
Tarea.propTypes = {
  tarea: PropTypes.object.isRequired
}



export default Tarea;
