import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteDepartamento from './DeleteDepartamento'

export default class Router extends Component {
    render() {

        function DetalleDepartamentoElement() {
            let { iddepartamento } = useParams();
            return (<DetalleDepartamento id={iddepartamento} />)
        }
        function UpdateDepartamentoElement(){
            let{iddepartamento,nombredepartamento,localidaddepartamento} = useParams();
            return (<UpdateDepartamento id={iddepartamento} nombre={nombredepartamento} localidad={localidaddepartamento}/>)
        }

        function DeleteDepartamentoElement(){
            let {iddepartamento} = useParams();
            return (<DeleteDepartamento id={iddepartamento}/>)
        }

        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<HomeDepartamentos />} />
                    <Route path='/createdept' element={<CreateDepartamentos />} />
                    <Route path='/detalles/:iddepartamento' element={<DetalleDepartamentoElement/>} />
                    <Route path='/update/:iddepartamento/:nombredepartamento/:localidaddepartamento' element ={<UpdateDepartamentoElement/>}/>
                    <Route path='/delete/:iddepartamento' element={<DeleteDepartamentoElement/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
