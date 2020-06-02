import React from 'react'
import './styles/Card.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButtonn = () =>(
    <Link to="/memories/new">
        <img src={buttomImg} className="Fitness-Add" alt="BtnPlus" />
    </Link>
)

export default AddButtonn