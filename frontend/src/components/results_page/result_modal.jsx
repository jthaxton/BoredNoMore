import React from 'react'
import "./result_modal.css";

export default function ResultModal({data}) {
  return <div className="result-modal">
    <div className="result-modal-image-div hover-glow">
        <a href={data.url} target="_blank">
          <img src={data.image_url} alt="result" />
        </a>
      </div>

      <div className="result-modal-info-div">
      <p className='hover-glow'>
          <a href={data.url} target="_blank">
            {data.name}
          </a>
        </p>

        <p>{data.address}</p>
      </div>
    </div>;
}
