import React from 'react'

function Reviews({data}) {
  return (
    <div>
        {data.map(item=>(
            <div>
                <h4>{item.name}</h4>
                <h5>{item.date}</h5>
                <h4 style={{color:"orange"}}>{item.rating}</h4>
                <p>{item.comments}</p>
            </div>
        ))}
    </div>
  )
}

export default Reviews