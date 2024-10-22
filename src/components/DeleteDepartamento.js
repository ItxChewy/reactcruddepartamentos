import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class DeleteDepartamento extends Component {
    
    state = {
        status:false
    }

    borrarDepartamento = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este departamento?");
        if (!confirmDelete) {
            return; 
        }
        let request = "api/departamentos/" + this.props.id
        let url = Global.urlDepartamentos + request
        axios.delete(url).then(response =>{
            console.log("eliminando.....")
            this.setState({
                status:true
            })
        })
    }
    render() {
        return (
            <div style={{ padding: "5%", textAlign: "center" }}>
                {
                    this.state.status == true &&
                    (<Navigate to='/' />)
                }
                <h1>Delete Departamento</h1>
                <NavLink to="/">Atras</NavLink>
                <h2>Vas a borrar el departamento con id : {this.props.id}</h2><br></br>
                <hr></hr>
                <button className="btn btn-danger" onClick={this.borrarDepartamento}>Eliminar</button>

            </div>
        )
    }
}
