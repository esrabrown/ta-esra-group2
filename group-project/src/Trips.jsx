import { useNavigate, Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx";

export default function Trips() {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/trips/getAll", {
            headers: {Authorization: 'Bearer ' + localStorage.getItem('token')
                                                         	}}).then(res=>res.json()).then((result)=>{setTrips(result);})
    },[trips])

    const handleUpdate = (e,id)=>{
        e.preventDefault();
        navigate('/trips/update/' + id);
    }

    const handleDelete = (e,id)=>{
        e.preventDefault();
        navigate("/trips/delete/" + id);
    }

    return (
    <div>
        <NavBar/>
        <Link to="/trips/add" className="btn btn-outline-primary transaction-button"><span>➕</span></Link>
            <br/>
            <br/>

        <h1>All Trips</h1>

        <hr/>
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
                <button className="btn btn-primary trip-button" onClick={(e)=>handleUpdate(e,ans.id)}>Update</button>
                <button className="btn btn-outline-primary trip-button" onClick={(e)=>handleDelete(e,ans.id)}>Delete</button>
            </tr>
            ))}

        </table>
                <br/>
                <br/>     
        <Link to="/trips/search" className="btn btn-primary trip-button">Search a Trip</Link>
        <br/>
    </div>
)}