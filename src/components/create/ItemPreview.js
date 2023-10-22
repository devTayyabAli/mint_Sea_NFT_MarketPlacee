import React, { useRef } from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { formatCategory } from '../../helpers/utils';

function ItemPreview({ heading, preview, title, category, author, filename }) {
    // console.log("filename",filename.startsWith("audio"));
    const vidRef = useRef(null);
    const vidButtonRef = useRef(null);


    const handlePlay = () => {
        vidRef.current.play();
        // hide overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.add('is-playing');
    };
    const handlePause = () => {
        vidRef.current.pause();
        // show overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.remove('is-playing');
    };
    const handleToggleVideo = () => (vidRef.current.paused ? handlePlay() : handlePause());

    return (
        <>
            <div className='d-flex align-items-center mb-4'>
                <div className='me-2 flex-shrink-0 bg-primary text-white' style={{borderRadius: "5px"}}>
                    <i className='las la-eye' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                </div>
                <h2 className='mb-0 fs-5 fw-bold ms-2'>{heading}</h2>
            </div>

            <div className='card' style={{borderRadius: "8px", border: "1px solid rgb(19, 29, 255)", background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", boxShadow: "0 0 10px 5px #2c1cb5aa"}}>
                <div className='card-body p-3 position-relative'>
                    <div className='position-relative mb-4 shadow'>
                        <div className='author z-index-20'>
                            {author && (
                                <>
                                    <div
                                        className='ms-3 rounded-circle bd-3 border-dark'
                                        style={{ width: '45px', height: '45px' }}
                                    >
                                        <Jazzicon address={author} />
                                    </div>
                                    <span className='icon bg-primary text-white me-1'>
                                        <i className='las la-check-double'></i>
                                    </span>
                                </>
                            )}
                        </div>
                        {/* card-img-holder */}
                        <div className=' rounded overflow-hidden'>
                            {
                                filename.startsWith("audio") ? <>

                                    <div ref={vidButtonRef} class="c-mm" style={{ height: "10rem" }} >
                                        <details>
                                            <summary class="c-mm__play" style={{ top: "5rem" }} onClick={handleToggleVideo} ><span data-css-icon="play"><i></i></span></summary>
                                            <span hidden></span>
                                        </details>
                                        <div class="c-mm__inner">
                                            <figure data-filter="grainy text" class="c-mm__frame" style={{ height: "10rem" }} >
                                                <img src="https://deliverysources.web.app/IstanbulMUN/images/redenx-min.jpg" width="100%" alt="" />
                                            </figure>
                                        </div>
                                        <audio src={preview} ref={vidRef} loop></audio>
                                    </div>
                                </> : filename.startsWith("video") ? <>
                         
                                    <div ref={vidButtonRef} class="c-mm">
                                        <details>
                                            <summary class="c-mm__play"

                                            ><span data-css-icon="play" onClick={handleToggleVideo}><i></i></span></summary>
                                            <span hidden></span>
                                        </details>

                                        <video src={preview} ref={vidRef} loop width="100%" style={{ height: "10rem" }}></video>
                                    </div>
                                </>
                                    :
                                    <>
                                        <img className='img-fluid rounded w-100' src={preview} alt={title} />
                                    </>
                            }



                        </div>
                    </div>
                    <p className='text-reset fw-bold mb-3'>{title === '' ? 'Crypto Funk' : title}</p>
                    <p className='text-sm text-white fw-normal mb-2 d-flex align-items-center mx-2 mb-3'>
                        <span className='icon bg-primary text-white me-2'>
                            <i className='lab la-ethereum fa-fw' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px", fontSize: "15px"}}></i>
                        </span>
                        <span className='ms-2'>Price: </span>
                        <span className='ms-2' style={{color: "#1ADFBB"}}>0.08 ETH</span>
                    </p>
                    <p className='text-sm text-white fw-normal d-flex align-items-center mx-2'>
                        <span className='icon bg-primary text-white me-2'>
                            <i className='las la-icons fa-fw' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px", fontSize: "15px"}}></i>
                        </span>
                        <span className='ms-2'>Category: </span>
                        <span className='ms-2' style={{color: "#1ADFBB"}}>{formatCategory(category)}</span>
                    </p>
                    {/* <div className='my-3 pt-1 bg-body rounded-pill'></div> */}
                    <div classNames="pt-1 mb-2" style={{background: "#1adfbb", boxShadow: "rgba(70, 89, 207, 0.467) 0px 0px 30px 10px", height: "2px", margin: "20px 0px"}}></div>
                    <p className='text-white fw-normal mb-0 text-sm d-flex align-items-center'>
                        <i className='la-sm text-white las la-clock mx-1 mt-1 text-primary'></i>
                        Created
                        <span className='mx-2' style={{color: "#1ADFBB"}}>12 hrs</span> ago
                    </p>
                </div>
            </div>
        </>
    );
}

ItemPreview.defaultProps = {
    title: 'Crypto Funk',
    category: 'music',
    preview: 'images/nft-placeholder.webp',
};

export default ItemPreview;
