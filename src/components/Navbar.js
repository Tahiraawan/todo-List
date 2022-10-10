import React from 'react'
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {selectUserName} from '../store/userSlice';
import {logoutUser} from '../store/userSlice'

function Navbar() {
    const userName= useSelector(selectUserName)
    const dispatch =useDispatch()
    const logout=()=>{
        dispatch(logoutUser())
        toast.success("Logout Successfully")
    }
  return (
    <nav>
        Organize your to-do list by workflow, priority, or due date. ... 
    </nav>
  )
}

export default Navbar