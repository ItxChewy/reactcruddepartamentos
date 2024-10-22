import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status:false
    }

    updateDepartamento = (e) =>{
        e.preventDefault();
        let request = "api/departamentos";
        let url = Global.urlDepartamentos + request;
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero:id,
            nombre:nombre,
            localidad:localidad
        }

        axios.put(url,departamento).then(response =>{
            this.setState({
                status:true
            })
        })
    }

    render() {
        return (
            <div style={{ padding: "5%" }}>
                {
                    this.state.status == true &&
                    (<Navigate to='/' />)
                }
                <h1>Update Departamento</h1>
                <NavLink to="/">Atras</NavLink>
                <form >
                    <label className="form-label">Id</label>
                    <input className="form-control" ref={this.cajaId} defaultValue={this.props.id} disabled/>
                    <label className="form-label">Nombre</label>
                    <input className="form-control"ref={this.cajaNombre} defaultValue={this.props.nombre}/>
                    <label className="form-label">Localidad</label>
                    <input className="form-control"ref={this.cajaLocalidad} defaultValue={this.props.localidad}/> <br />
                    <button className="btn btn-success" onClick={this.updateDepartamento}>Actualizar Departamento</button>
                </form>
            </div>
        )
    }
}
