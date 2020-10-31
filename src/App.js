import React, { Component } from 'react';
import './App.css';
// routes
// con el (as) le cambio el nombre pero no su función
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// importar el arreglo de objestos .json
import tareas from './ejemplos/tareas.json';
// importar componentes
import TareaForm from './components/TareaForm.js';
import Tareas from './components/Tareas.js';
import Posts from './components/Posts.js';

// bootstrap
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    tareas: tareas
  }

  addTarea = (title, description) =>{
    // console.log(title, description);
    const newTarea = {
      title: title,
      description: description,
      id: this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas, newTarea]
    })
  }

  deleteTarea = (id) => {
    const newTareas = this.state.tareas.filter(tarea => tarea.id !== id);
    this.setState({tareas: newTareas});
  }

  checkDone = (id) => {
    const newTareas = this.state.tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.done = !tarea.done
      }
      return tarea;
    })
    this.setState({tareas: newTareas});
  }

  render() {
    return(
      <div className="container mt-4">
        <Router>
          <Breadcrumb className="mt-4 salta">
            <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/posts">API</Link></Breadcrumb.Item>
          </Breadcrumb>
          <Route exact path="/" render={() => {
            return(
              <div>
                  <TareaForm addTarea={this.addTarea} />
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                          <Tareas
                           tareas={this.state.tareas}
                           deleteTarea={this.deleteTarea}
                           checkDone={this.checkDone} />
                  </table>
              </div>
              )
            }}>
          </Route>
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    )
  }
}

// exportar por defecto el componente
export default App;
