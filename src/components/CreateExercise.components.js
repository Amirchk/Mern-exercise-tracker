import axios from 'axios';
import React,{Component, useEffect, useState} from 'react';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

const CreateExercise = (props)=>{
    //usestate to set state values
    const [MakeExercise,setMakeExercise] = useState({
        username:'',
        description:'',
        duration:0,
        date:new Date(),
        users:[]
    });  

    useEffect( ()=>{
        return (
            axios.get('http://localhost:8000/users')
            .then(
                (res )=>{
                    if(res.data.length > 0){
                        setMakeExercise({
                            users: res.data.map((users)=>{
                                return (users.username)
                            }),
                            username: res.data[0].username
                        })
                    }
                }
             )
        )
    },[] );
//-----
//------functions for settign values of exercise objects

const onchangeUsername = (e)=>{
    const uname = e.target.value;
    
    setMakeExercise((oldval)=>{
        return {...oldval,username : uname}
    });
}

const onchangeDescp = (e)=>{
    const Descp = e.target.value;
    setMakeExercise(
        (OldVal)=>{
            return {...OldVal,description : Descp}
    });
}
const onchangeDuration = (e)=>{
    const Duration = e.target.value;
    setMakeExercise( (oldVal)=>{
        return {...oldVal,duration : Duration}
    });
}
const onchangeDate = (Date)=>{
    setMakeExercise((oldVal)=>{
        return {...oldVal,date:Date}
    })
}
const onSubmit = (event)=>{
    event.preventDefault();
    const exercise1 = {
        username: MakeExercise.username,
        description:MakeExercise.description,
        duration:MakeExercise.duration,
        date:MakeExercise.date
    }
    console.log(exercise1);
    
axios.post('http://localhost:8000/exercises/add',exercise1)
.then( res=> console.log(res.data) )
    // window.location='/';
}

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit} >
                <div>
                <label>UserName: </label>
                <br/>
                <select 
                    required
                    value={MakeExercise.username}
                    onChange={onchangeUsername}
                    >
                        {MakeExercise.users.map((user)=>{
                            return <option key={user} value={user}> {user} </option>
                        })}
                </select>
                </div>

                <div>
                <label>Description: </label>
                <br/>
                <input 
                    type="text"
                    value={MakeExercise.description}
                    onChange={onchangeDescp} />
                </div>

                <div>
                <label>DURATIOIN: (in minute)</label>
                <input
                    required
                    type="text"
                    value={MakeExercise.duration}
                    onChange={onchangeDuration} />
                </div>

                <div>
                <label>DATE: </label>
                <div>
                    <Datepicker 
                    selected={MakeExercise.date}
                    onChange={onchangeDate}/>
                </div>
                </div>
                <div>
                    <input type="submit" value="Create exercise log"  />
                </div>
            </form>
        </div>
    )
}
export default CreateExercise;