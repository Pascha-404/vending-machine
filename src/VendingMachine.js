import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./VendingMachine.css"

class VendingMachine extends Component{
    render() {
        return (
            <div className="VendingMachine">
                <div className="VendingMachine-data">
                    <p>Hello, I'm a Vendigmachine. What can I serve you?</p>
                    <div className="VendingMachine-products">
                        <Link to="/redbull">Redbull</Link>
                        <Link to="/cheetos">Cheetos</Link>
                        <Link to="/fruits">Fruits</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default VendingMachine;