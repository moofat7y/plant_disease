import React from 'react'
import images from '../../assets/images'

const MyAccountCell = ({item: {image, percent}}) => {
    console.log("image", image)
  return (
    // <div className='detection-history-cell col-6 col-md-4 col-lg-3 border-end border-3 d-flex flex-column align-item-center gap-3 p-1 px-2 p-lg-3'
    // style={{"minWidth": "200px"}}>
    //   <img
    //     className='card-img w-100 h-100'
    //     style={{"objectFit": "fill"}} 
    //     src={image} alt="..." />
    //     <span className='card-title mt-auto fw-bold text-center p-2'>
    //         Possibility of infected by Apple Scab Disease :  
    //         <span className='text-primary ms-2'>{percent}</span>
    //     </span>
    // </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 ps-sm-0 pe-sm-2 py-sm-2 p-lg-3">
        <div class="card h-100">
            <img src={image} class="card-img-top w-100 h-100" alt="..." style={{"objectFit": "fill", "minHeight": "220px"}}/>
            <div class="card-body">
                <p class="card-text">
                    Possibility of infected by Apple Scab Disease :  
                    <span className='text-primary ms-2'>{percent}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default MyAccountCell
