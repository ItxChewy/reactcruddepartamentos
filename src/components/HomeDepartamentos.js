import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import loadingImage from '../assets/images/loading.png'
import { NavLink } from 'react-router-dom'

export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos"
        axios.get(Global.urlDepartamentos + request).then(response => {
            this.setState({
                status: true,
                departamentos: response.data
            })
        })
    }

    deleteDepartamento = (idDepartamento) =>{
        let request = "api/departamentos/" + idDepartamento
        let url = Global.urlDepartamentos + request
        axios.delete(url).then(response =>{
            console.log("eliminando.....")
            this.loadDepartamentos();
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        if (this.state.status == false) {
            return (<img src={loadingImage}></img>)
        } else {
            return (
                <div style={{ padding: "5%", textAlign: "center" }}>
                    <h1>Home Departamentos</h1>
                    <table className="table table-light table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Detalle</th>
                                <th>Actualizar</th>
                                <th>Borrar</th>
                                <th>Borrar 2.0</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{departamento.numero}</td>
                                            <td>{departamento.nombre}</td>
                                            <td>{departamento.localidad}</td>
                                            <td>
                                                <NavLink to={"/detalles/" + departamento.numero}>
                                                    Detalles
                                                </NavLink>
                                            </td>
                                            <td>
                                                <NavLink to={"/update/" + departamento.numero + "/" + 
                                                    departamento.nombre + "/" + departamento.localidad}>
                                                    Actualizar
                                                </NavLink>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {
                                                    this.deleteDepartamento(departamento.numero);
                                                }}>
                                                    Borrar
                                                </button>
                                            </td>
                                            <td>
                                                <NavLink to={"/delete/" + departamento.numero}>
                                                <button className="btn btn-danger">Borrar 2.0</button>
                                                </NavLink>
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }

    }
}
