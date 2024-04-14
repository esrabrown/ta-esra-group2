import {  Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"

export default function Trips() {
    const [trips, setTrips] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/trips/getAll").then(res=>res.json()).then((result)=>{setTrips(result);})
    },[])

    return (
    <div>
        <Header/>
        <Link to="/trips/add">Add a Trip</Link>
        <br/>
        <Link to="/trips/search">Search a Trip</Link>
        <br/>
        <hr/>
        <h1>All Trips</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Destination</th>
                <th>Budget</th>
            </tr>

            {trips.map(ans=>(
            <tr>
                <td><Link to={`/trips/ID/${ans.id}`}>{ans.id}</Link></td>
                <td>{ans.name}</td>
                <td>{ans.destination}</td>
                <td>{ans.budget}</td>
                <td><Link to={`/trips/ID/${ans.id}`}>See Trip Transactions</Link></td>
            </tr>
            ))}

        </table>
    </div>
)}