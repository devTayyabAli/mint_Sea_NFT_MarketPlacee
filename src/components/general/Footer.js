import React from "react";
import { useForm } from "@formspree/react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Load_offers";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAccount } from "wagmi";
import { useToasts } from "react-toast-notifications";

function Footer() {
  // const [state, handleSubmit] = useForm("xlezgplp");
  const [getNewsletter, setgetNewsletter] = useState("")
  const [spinner, setSpinner] = useState(false)
  const { address } = useAccount();

  let dispatch = useDispatch();
  const { addToast } = useToasts();
  const handleSubmit = async () => {
    try {
      if (getNewsletter == "") {
        toast.error("Please Enter Email Address!")
      } else {

        setSpinner(true)
        let res = await axios.post('https://sanjhavehra.womenempowerment.online/Newsletter_mail', {
          email: getNewsletter
        })
        console.log("ResNewsLetter", res.data);
        if (res.data.success == true) {

          setgetNewsletter(res.data.success)
          setSpinner(false)
        } else {
          toast.error("This email is already exist")
          setSpinner(false)

        }
      }
    } catch (error) {
      console.log(error);
      setSpinner(false)

    }
  }

  


  return (
    <>
      <div className="container px-0">
        <div className="pt-1 section-seprator"></div>
      </div>

      <footer className="footer">
        {/** style={{background: 'url(img/world-map.png) no-repeat', backgroundSize: 'contain'}} */}
        <div className="container pt-5 z-index-20 px-5">
          <div className="row pt-5" style={{ display: "none" }}>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>Marketplace</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/explore">
                    All NFTs
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/art"
                    onClick={() => dispatch(setCategory("art"))}
                  >
                    Art
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/music"
                    onClick={() => dispatch(setCategory("music"))}
                  >
                    Music
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/domainNames"
                    onClick={() => dispatch(setCategory("domainNames"))}
                  >
                    Domain Names
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/virtualWorlds"
                    onClick={() => dispatch(setCategory("virtualWorlds"))}
                  >
                    Virtual World
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>Account</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/User_Profile">
                    Profile
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/Favorite">
                    Favourites
                  </NavLink>
                </li>
                <li className="mb-1">
                  {
                    address ? <>

                      <NavLink className="text-sm text-reset" to="/User_Collection">
                        Collection
                      </NavLink>
                    </>
                      :
                      <>
                        <div className="text-sm text-reset" style={{cursor:"pointer"}} onClick={()=>
                         addToast(`Please Connect Wallet First!`, {
                          appearance: "error",
                        })
                        }   >
                          Collection
                        </div>  
                      </>
                  }
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>About Us</h6>
              <ul className="list-unstyled text-white mb-4">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/about-us">
                    About us
                  </NavLink>
                </li>
              </ul>

              <h6>Support</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/docs">
                    Docs
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/privacy-policy">
                    Privacy & Policy
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/terms-of-service">
                    Terms of Service
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h6>Newsletter</h6>
              <p className="text-sm text-white">
                Subscribe to our newsletter to get updates regarding all NFTs and
                the marketplace.
              </p>

              <div className="input-group shadow-sm bg-body rounded-sm">
                <input
                  className="form-control border-0 bg-none shadow-0"
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email address..."
                  onChange={(e) => setgetNewsletter(e.target.value)}
                />
                <button className="btn btn-primary btn-sm" type="submit" onClick={handleSubmit}>
                  {
                    spinner ?
                      <>
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </>
                      :
                      <i className='las la-paper-plane'></i>
                  }

                </button>
              </div>

              {getNewsletter == true ? (
                <p className='bg-primary text-white mt-1 px-3 py-1  rounded-sm'>Thanks!</p>
              ) : null

              }
            </div>
          </div>

          <div className="row pt-5 pb-2">
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-6 col-sm-3 ">
                  <h6>Marketplace</h6>
                  <ul className="list-unstyled text-white mb-0">
                    <li className="mb-1">
                      <NavLink className="text-sm text-reset" to="/explore">
                        All NFTs
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/art"
                        onClick={() => dispatch(setCategory("art"))}
                      >
                        Art
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/music"
                        onClick={() => dispatch(setCategory("music"))}
                      >
                        Music
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/domainNames"
                        onClick={() => dispatch(setCategory("domainNames"))}
                      >
                        Domain Names
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/virtualWorlds"
                        onClick={() => dispatch(setCategory("virtualWorlds"))}
                      >
                        Virtual World
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3 ">
                  <div className="row">
                    <div className="d-none d-md-block col-md-1 px-0">
                      <img className="mt-1 mx-auto" src="/images/side_icon.png" alt="side icon" style={{ height: "4.3rem" }} />
                    </div>

                    <div className="col-12 col-md-11">
                      <h6>Account</h6>
                      <ul className="list-unstyled text-white mb-0">
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/User_Profile">
                            Profile
                          </NavLink>
                        </li>
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/Favorite">
                            Favourites
                          </NavLink>
                        </li>
                        <li className="mb-1">
                  {
                    address ? <>

                      <NavLink className="text-sm text-reset" to="/User_Collection">
                        Collection
                      </NavLink>
                    </>
                      :
                      <>
                        <div className="text-sm text-reset" style={{cursor:"pointer"}} onClick={()=>
                         addToast(`Please Connect Wallet First!`, {
                          appearance: "error",
                        })
                        }   >
                          Collection
                        </div>  
                      </>
                  }
                </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-3 mt-4 mt-sm-0">
                  <div className="row">
                    <div className="d-none d-md-block col-md-1 px-0">
                      <img className="mt-1 mx-auto" src="/images/side_icon.png" alt="side icon" style={{ height: "4.3rem" }} />
                    </div>
                    <div className="col-12 col-md-11">
                      <h6>About Us</h6>
                      <ul className="list-unstyled text-white mb-4">
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/about-us">
                            About us
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-3 mt-4 mt-sm-0">
                  <div className="row">
                    <div className="d-none d-md-block col-md-1 px-0">
                      <img className="mt-1 mx-auto" src="/images/side_icon.png" alt="side icon" style={{ height: "4.3rem" }} />
                    </div>

                    <div className="col-12 col-md-11">
                      <h6>Support</h6>
                      <ul className="list-unstyled text-white mb-0">
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/docs">
                            Docs
                          </NavLink>
                        </li>
                        <li className="mb-1">
                          <NavLink
                            className="text-sm text-reset"
                            to="/privacy-policy"
                          >
                            Privacy & Policy
                          </NavLink>
                        </li>
                        <li className="mb-1">
                          <NavLink
                            className="text-sm text-reset"
                            to="/terms-of-service"
                          >
                            Terms of Service
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 pt-5 pt-md-0">
              <div className="row">
                <div className="d-none d-md-block col-md-1 px-0">
                  <img className="mt-1 mx-auto" src="/images/side_icon.png" alt="side icon" style={{ height: "4.3rem" }} />
                </div>

                <div className="col-12 col-md-11">
                  <h6>Newsletter</h6>
                  <p className="text-sm text-white mb-4 px-0">
                    Subscribe to our newsletter to get updates regarding all NFTs and
                    the marketplace.
                  </p>

                  <div className="input-group email-input-group">
                    <input
                      className="form-control border-0 shadow-0"
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Enter your email address..."
                      onChange={(e) => setgetNewsletter(e.target.value)}
                    />
                    <button className="btn btn-primary btn-sm" type="submit" onClick={handleSubmit}>
                      {
                        spinner ?
                          <>
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </>
                          :
                          <i className='las la-paper-plane'></i>
                      }
                    </button>
                  </div>

                  {getNewsletter == true ? (
                    <p className='bg-primary text-white mt-1 px-3 py-1  rounded-sm'>Thanks!</p>
                  ) : null

                  }
                </div>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-12 d-flex justify-content-center my-4 pt-4 my-md-0 pt-sm-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="social-link"
                    rel="noreferrer"
                    href={process.env.REACT_APP_SOCIAL_FACEBOOK}
                    target="_blank"
                  >
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-link"
                    rel="noreferrer"
                    href={process.env.REACT_APP_SOCIAL_PINTEREST}
                    target="_blank"
                  >
                    <i className="lab la-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-link"
                    rel="noreferrer"
                    href={process.env.REACT_APP_SOCIAL_TWITTER}
                    target="_blank"
                  >
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-link"
                    rel="noreferrer"
                    href={process.env.REACT_APP_SOCIAL_INSTAGRAM}
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-link"
                    rel="noreferrer"
                    href={process.env.REACT_APP_SITE_URL}
                    target="_blank"
                  >
                    <i className="las la-link"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="row py-4">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <p className="text-white text-xs mb-0">
                © 2023 All rights reserved. Designed with
                <i className="las la-xs la-heart mx-1" style={{color: "#1ADFBB"}}></i> by
                <span className="ms-1" style={{color: "#1ADFBB"}}>Grands Digital</span>
              </p>
            </div>
          </div> */}

        </div>

        {/* <div className="container">
          <div className="pt-1 bg-body rounded-pill"></div>
        </div> */}

        {/* <div className="container py-4 position-relative">
          <div className="row">
            <div className="col-12 col-md-6 cd-flex align-items-center">
              <p className="text-white text-lg mb-0">
                © 2023 All rights reserved. Designed with
                <i className="las la-xs text-primary la-heart mx-1"></i> by
                <span className="text-primary ms-1">Grands Digital</span>
              </p>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end my-4 pt-4 my-md-0 pt-sm-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    className="social-link bg-hover-primary"
                    rel="noreferrer"
                    to={process.env.REACT_APP_SOCIAL_FACEBOOK}
                    target="_blank"
                  >
                    <i className="lab la-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="social-link bg-hover-primary"
                    rel="noreferrer"
                    to={process.env.REACT_APP_SOCIAL_PINTEREST}
                    target="_blank"
                  >
                    <i className="lab la-pinterest"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="social-link bg-hover-primary"
                    rel="noreferrer"
                    to={process.env.REACT_APP_SOCIAL_TWITTER}
                    target="_blank"
                  >
                    <i className="lab la-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="social-link bg-hover-primary"
                    rel="noreferrer"
                    to={process.env.REACT_APP_SOCIAL_INSTAGRAM}
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="social-link bg-hover-primary"
                    rel="noreferrer"
                    to={process.env.REACT_APP_SITE_URL}
                    target="_blank"
                  >
                    <i className="las la-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </footer>

      <div className="footer-mask">
        <div className="py-0">
          <div className="col-12 d-flex align-items-center justify-content-center pt-4">
            <p className="text-white text-center text-xs mb-0">
              © 2023 All rights reserved. Designed with
              <i className="las la-xs la-heart mx-1" style={{ color: "#1ADFBB" }}></i> by
              <span className="ms-1" style={{ color: "#1ADFBB" }}>Grands Digital</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
