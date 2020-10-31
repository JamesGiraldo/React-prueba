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
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
             <label>Titulo</label>
             <input
               type="text"
               name="title"
               placeholder="Escribe una tarea"
               onChange={ this.onChange }
               value={ this.state.title }
               className="form-control" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                name="description"
                onChange={ this.onChange }
                value={ this.state.description }
                className="form-control" rows="3"></textarea>
            </div>
            <input type="submit" className="btn btn-outline-success ml-2"/>
          </form>
        </div>
      )
    }
}
