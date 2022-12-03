import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Details() {
    const [data, setData] = useState([]);
    const params=useParams()
    useEffect(()=>{
        const fetchData=async()=> {
            await fetch('/restaurants.json').then((res)=> res.json()).then((data)=>setData(data.restaurants))
        }
        fetchData()
    },[])

    const details=data.find((i)=> i.id==params.id)
    console.log(details);
        
  return (
    <div>
        <h1>This page contains details</h1>
    </div>
  )
}

export default Details