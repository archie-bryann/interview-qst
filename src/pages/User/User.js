import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import './User.css'

function User() {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        axios.get('https://api.e-care.life/api/user',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data})=>{
            console.log(data)
            setUser(data);
        }).catch(err=>{

        })
    },[])

    return (
        <Fragment>
            <h1 className = "law-title">User Details</h1>
            <div className = "container">
                <div className = "law-body">
                    {user && (
                        <div className = "small-container cart-page">
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        </table>
                    </div>
                        
                    )}
                </div>
            </div>
            <div style={{height:'400px'}}></div>
        </Fragment>
    )
}

export default User;
