import React, { useState } from 'react'
import MyAccountCell from './MyAccountCell'

const MyAccountRow = ({item}) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log("item", item);
  return (
    <div className='detection-history-row border-bottom border-3'>
        <span className='date d-block mt-3 fs-5 text-muted'>{item[0]}</span>
    {/* <span className="d-flex align-items-center gap-3 fs-5 text-muted mb-3">
    <span className='date'>{item[0]}</span>
    </span>
    <div className="row flex-nowrap py-3 border border-3 ps-2" style={{"overflowX": "auto"}}>
    {
        item[1].map((item, index) => <MyAccountCell key={index} item={item} />)
    }
    </div> */}
    {/* <Slider> */}
        <div className="d-flex flex-wrap">
              {isLoading ? (
                <>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                        <div className="card shadow-sm border-0" aria-hidden="true">
                            <div className="ratio ratio-4x3">
                                <div className="card-img-top"></div>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                </h5>
                            </div>
                        </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                        <div className="card shadow-sm border-0" aria-hidden="true">
                            <div className="ratio ratio-4x3">
                                <div className="card-img-top"></div>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                </h5>
                            </div>
                        </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                        <div className="card shadow-sm border-0" aria-hidden="true">
                            <div className="ratio ratio-4x3">
                                <div className="card-img-top"></div>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                </h5>
                            </div>
                        </div>
                  </div>
                </>
              ) : 
              (
                <>
                    {
                        item[1].map((item, index) => <MyAccountCell key={index} item={item} />)
                    }
                </>
              )}
            {/* </Slider> */}
        </div>
    </div>
  )
}

export default MyAccountRow
