import React from 'react'
import "./result_modal.css";

export default function ResultModal({data}) {
  return (
    <div className='result-modal'>
      <a href={data.url} target="_blank">
        <img 
          src={data.image_url}
          alt='result'
        />
      </a>

      <a href={data.url} target="_blank">
        {data.name}
      </a>

      <p>
        {data.address}
      </p>
    </div>
  )
}
