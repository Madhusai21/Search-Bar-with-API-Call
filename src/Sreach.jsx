import React, { useEffect, useState } from 'react'
import './Search.css'
const Sreach = () => {
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=> res.json())
     .then(data =>{
      console.log(data);
      setFilters(data);
     })
     .catch(err=> console.log(err));
  },[])

  const [data , setData]=useState([])
  const [filters, setFilters]=useState([])
  const handler =(value)=>{
     const res = filters.filter(f => f.name.toLowerCase().includes(value))
     setData(res)
  }




  return (
  <div className='serach-top'>
    <div className='search'>
      <input type='text' placeholder='serach here.. ' onChange={ e=>handler(e.target.value)}/>
    </div>
    <div className='serah-result'>
      {data.map((items,index)=>{
        return(
          <div key={index}>
            {items.name}
            </div>
        )
      })}
    </div>
    </div>
  )
}

export default Sreach