import React from 'react'
import "./result_modal.css";

export default function ResultModal({data}) {
  return (
    <div className='result-modal'>
      <a href='https://www.google.com'>
        <img 
          src={data.image_url}
          alt='result'
        />
      </a>

      <a href='/'>
        {data.name}
      </a>

      <p>
        {data.address}
      </p>
    </div>
  )
}
