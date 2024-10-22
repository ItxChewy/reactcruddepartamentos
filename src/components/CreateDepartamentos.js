import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamentos extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false,
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        let request = "api/departamentos"
        let url = Global.urlDepartamentos + request
        let id = parseInt(this.cajaId.current.value)
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        axios.post(url, departamento).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div style={{ padding: "5%" }}>
                    <h1>CreateDepartamentos</h1>
                    <form onSubmit={this.insertarDepartamento}>
                        <label className="form-label">Id</label>
                        <input className="form-control" ref={this.cajaId}></input>
                        <label className="form-label">Nombre</label>
                        <input className="form-control" ref={this.cajaNombre}></input>
                        <label className="form-label">Localidad</label>
                        <input className="form-control" ref={this.cajaLocalidad}></input> <br />
                        <button className="btn btn-primary">Crear Departamento</button>
                    </form>
                </div>
            )
        }
    }
}
