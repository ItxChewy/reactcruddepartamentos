import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDepartamentos extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand nav-link" to="/">Departamentos</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/createdept">Crear Departamento</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/update">Hospitales</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/detalles">Detalles</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                    <ul className="dropdown-menu">
                                        {/* {
                                            this.state.hospitales.map((hospital,index) =>{
                                                return(
                                                    <li key={index}>
                                                        <NavLink to={"/doctores/" + hospital.idhospital} className={"dropdown-item"}>{hospital.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
      </div>
    )
  }
}
