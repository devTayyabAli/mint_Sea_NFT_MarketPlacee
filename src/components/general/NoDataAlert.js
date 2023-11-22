import React from 'react';

function NoDataAlert({ heading, subheading }) {
    return (
        <div className='px-4 py-5 bd-3 text-muted d-flex mb-4' style={{height: "100%", background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
            {/* <i className='las la-info-circle me-2 mt-1 text-primary' style={{ fontSize: '1.4rem' }}></i> */}
            <i className='las la-info-circle d-flex align-items-center me-4' style={{fontSize: '2.5rem', background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
            <h6 className='fw-bold text-white mb-0 fs-4'>
                {heading}
                <p className='text-white mt-2 text-sm mb-0'>{subheading}</p>
            </h6>
        </div>
    );
}

export default NoDataAlert;
