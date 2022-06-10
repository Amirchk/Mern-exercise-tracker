import axios from 'axios';
import React,{Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Exercise = (props)=>{
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}>EDIT</Link> | 
                <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}} >delete</a>
            </td>
        </tr>
    )
}

const ExerciseList = (props)=>{
    const [listExercise, setListExercise]= useState({
        exercises_ : []
    });

    useEffect( ()=>{
        axios.get('http://localhost:8000/exercises')
        .then( (res)=>{
            setListExercise({
                exercises_ : res.data
            })
        } )
        .catch( (error)=>{ console.log(error)})
    } );

    const deleteList = (id)=>{
        axios.delete('http://localhost:8000/exercises/'+id)
        .then( (res)=>{
            console.log(res.data)
        } )

        setListExercise({
            exercises_: listExercise.exercises_.filter(el=> el._id !== id)
        })
    }

    const Exercise_List = ()=>{
        return (listExercise.exercises_.map( (currentEx)=>{
            return <Exercise exercise={currentEx} deleteExercise={deleteList} key={listExercise._id} />
        } ))
    }

    return (
        <div>
            <h3>exercise list</h3>
            <table className ="table_design" >
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{Exercise_List()}</tbody>
            </table>
        </div>
    )
}
export default ExerciseList;
export {Exercise};