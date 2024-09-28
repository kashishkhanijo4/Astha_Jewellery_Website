import React from 'react'

const SmallCards = ({data}) => {
  return (
    <div className="sm-card d-flex justify-content-center align-items-center flex-column gap-2">
      <img src={data.image} alt="Card Image" />
      <p style={{ fontSize: '13px' }}>{data.label}</p>
    </div>
  )
}

export default SmallCards

