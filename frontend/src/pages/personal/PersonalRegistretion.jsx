import React, { useState } from 'react'
import "./PersonalRegistretion.css"
import { Link, Outlet } from "react-router-dom"

export default function PersonalRegistretion() {



    return <>
        <div className='header'>
            <nav className="navbar navbar-expand-sm  navbar-dark p-3 navW">
                <div className="container">
                    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#SecondNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="SecondNav">
                        <div className="navbar-nav myLink">
                            <Link className="nav-link active" to="/PersonalRegistretion/personaldetails">Profile Details</Link>
                            <Link className="nav-link active" to="/PersonalRegistretion/carrer">Carrer Details</Link>
                            <Link className="nav-link active" to="/PersonalRegistretion/lifeStyle">LifeStyle&Family</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
        <Outlet />



    </>
}
