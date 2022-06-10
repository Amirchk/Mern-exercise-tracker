import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav>
            <Link to="/" className="navbar-brand" >ExcerTracker</Link>
            <div>
                <ul>
                    <li>
                        <Link to="/" >Exercises</Link>
                    </li>
                    <li>
                        <Link to="/create1" >CreateExercises</Link>
                    </li>
                    <li>
                        <Link to="/user" >Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;