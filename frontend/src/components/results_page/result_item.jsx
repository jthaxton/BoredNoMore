import React from 'react'

export default function ResultItem({caption, imgSrc, modalFn}) {
  return (
    <li
      onClick={() => modalFn()}
      >
      <img src={imgSrc} alt="result placeholder" />
      <p>{caption}</p>
    </li>
  );
}
