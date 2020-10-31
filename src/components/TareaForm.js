import React, { Component } from 'react';
// // importar biblioteque
// import PropTypes from 'prop-types';

export default class TareaForm extends Component {
    state = {
      title: '',
      description: ''
    }
    onSubmit = (e) => {
      this.props.addTarea(this.state.title, this.state.description);
      e.preventDefault();
    }
    onChange = (e) => {
      // console.log(e.target.value);
      // console.log(e.target.name, e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render(){
      return(
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Escribe una tarea"
              onChange={ this.onChange }
              value={ this.state.title } />
            <br />
            <textarea
             name="description"
             onChange={ this.onChange }
             value={ this.state.description } >
             </textarea>
            <input type="submit" />
          </form>
        </div>
      )
    }
}
