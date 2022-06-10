import React,{Component, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const CreateUser = ()=>{
    const [makeUser,setUser] = useState({
        username:'',
    });

    const onchangeUsername = (e)=>{
        const uname = e.target.value;
        
        setUser((oldval)=>{
            return {...oldval,username : uname}
        });
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const user = {
            username: makeUser.username,
        }

        axios.post('http://localhost:8000/users/add',user)
        .then( (res)=> console.log(res.data) )
        .catch( (err)=> console.log(err) )

        console.log(user);
    
        setUser({
            username:'',
        })
    }
    
    return (
        <div>
            <h3>Create User</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>USERNAME: </label>
                    <input type="text"
                        required
                        value={makeUser.username}
                        onChange={onchangeUsername}
                    />
                </div>
                <div>
                    <input type="Submit" value="Create User"/>
                </div>
            </form>
        </div>
    )
}
export default CreateUser;