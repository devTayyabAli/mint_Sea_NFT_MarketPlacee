import React from 'react';
import { formatCategory } from '../../helpers/utils';

function ItemThumbnail({ thumbnail,type, name, category }) {
    return (
        <div className='card shadow h-100' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "8px"}}>
            <div className='card-body'>
              
              <h1>{name}</h1>

            {type?.startsWith("image") ? (
            <>
              {" "}
              <img
                className="img-fluid rounded w-100"
                style={{ height: "500px", width: "100%" }}
                src={thumbnail}
           
              />{" "}
            </>
          ) : type?.startsWith("video") ? (
            <>
              <video
                className="VideoInput_video"
                width="100%"
                muted={true}
                loop
                autoPlay={true}
                controls={true}
                src={thumbnail}
                style={{ height: "500px", width: "100%" }}
              />
            </>
          ) : type == "true" ? (
            <>
              {" "}
              <img
                className="img-fluid rounded w-100"
                style={{ height: "500px", width: "100%" }}
                src={thumbnail}
                alt="..."
              />{" "}

            </>
          )
            :
            <>
              <audio controls={true} loop muted={true}   style={{ height: "500px", width: "100%" }}
                autoPlay={true} className="audio-element" src={thumbnail} />
            </>

          }
                {/* <img className='img-fluid rounded w-100' src={thumbnail} alt='...' /> */}
                <div className='row mt-2 text-white'>
                  <div className='col-6'>
                    <p className='py-2 mb-0 text-lg'>Category</p>
                  </div>
                  <div className='col-6'>
                    <p className='d-flex py-2 mb-0 align-items-center justify-content-end'>
                      {/* <i className='las la-image me-2 mb-1 align-middle text-white'></i> */}
                      <i className='las la-icons fs-3' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                      <span className='text-lg mx-2'>{formatCategory(category)}</span>
                    </p>
                  </div>
                </div>

                {/* <div className='row text-white'>
                  <div className='col-6'>
                    <p className='py-2 mb-0 text-lg'>Current Price</p>
                  </div>
                  <div className='col-6'>
                    <p className='d-flex py-2 mb-0 align-items-center justify-content-end'>
                      {/* <i className='las la-image me-2 mb-1 align-middle text-white'></i>
                      {/* <i className='las la-icons fs-3' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                      <span className='text-lg mx-2'>{formatCategory(category)}</span>
                    </p>
                  </div>
                </div> */}
            </div>
        </div>
    );
}

export default ItemThumbnail;
