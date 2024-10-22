import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import imagen from '../assets/images/loading.png'
import { NavLink } from 'react-router-dom'

export default class DetalleDepartamento extends Component {
    state = {
        departamento: null
    }

    buscarDepartamento = () => {
        let request = "api/departamentos/" + this.props.id
        let url = Global.urlDepartamentos + request

        axios.get(url).then(response =>{
            this.setState({
                departamento:response.data
            })
        })
    }

    componentDidMount = () => {
        this.buscarDepartamento();
    }
    render() {
        return (
            <div>
           
            {
                this.state.departamento ?
                (
                    <ul className="list-group">
                        <li className="list-group-item">
                            Numero : {this.state.departamento.numero}
                        </li>
                        <li className="list-group-item">
                            Nombre : {this.state.departamento.nombre}
                        </li>
                        <li className="list-group-item">
                            Localidad : {this.state.departamento.localidad}
                        </li>
                    </ul>
                ):
                (
                    <img src={imagen}></img>
                )
            }
             <NavLink to="/">Atrás</NavLink>
           </div> 
        )
        
    }
}
