import React from 'react'

export default function List(props){
  return (
    <div className='person'>
        <img src={ props.image } 
            alt="img" />
        <button className='del-btn'
                onClick={()=> props.removeCard(props.id)}>
            Delete
            </button>
        <div>
            <h4>
                { props.name }
            </h4>
            <p> { props.age } years</p>
        </div>
    </div>
  )
}
