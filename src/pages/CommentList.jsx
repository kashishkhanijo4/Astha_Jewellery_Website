import React from 'react'
import comment from  '../data';
const CommentList = ({data}) => {
  return (
    <div className='comment position-relative d-flex flex-column gap-2' style={{paddingRight:"20px",paddingBottom:"20px"}}>
          <div className="star">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                            fill="#EDB61A" fill-opacity="0.7"></path>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                            fill="#EDB61A" fill-opacity="0.7"></path>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                            fill="#EDB61A" fill-opacity="0.7"></path>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                            fill="#EDB61A" fill-opacity="0.7"></path>
                    </svg>
          </div>


             {/* <div className='d-flex justify-content-center gap-2'  >
             <div className='d-flex justify-content-center gap-2'>
             <div className="logo d-flex justify-content-center align-items-center"><i className="fa-solid fa-user"></i></div>
             <span style={{ fontSize: '14px' }}>{data.name}</span>
             <div className="verify-icon d-flex justify-content-center align-items-center">{data.isVerified}</div>
             </div>
             </div>
             <div className='d-flex justify-content-center gap-2' >
             <p>{data.comment}</p>
            <img src={data.commentImage} alt="hppy"  style={{ width: '94px', height: '94px' }}/>
            </div> */}

         <div className='d-flex justify-content-center gap-2'>

            <div className='d-flex gap-2'>
             <div className="logo d-flex justify-content-center align-items-center"><i className="fa-solid fa-user"></i></div>
             <span style={{ fontSize: '14px' }}>{data.name}</span>
             <div className="verify-icon d-flex justify-content-center align-items-center">{data.isVerified}</div>
             </div>
            </div>
             <div className='d-flex  justify-content-center gap-2 '>
             <p>{data.comment}</p>
            </div>
            <div className='comment-image'>
             <img src={data.commentImage} alt="hppy"  style={{ width: '94px', height: '94px' }}/>
            </div>
    
            <div className="line" style={{right:"130px"}}></div>
         </div>
  )
}

export default CommentList;