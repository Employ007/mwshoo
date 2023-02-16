import React, { useState, useCallback } from "react";
import Menu from "./Menu";
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

// import {MdCheckBoxOutlineBlank} from 'react-icons/md';
export function hellman() {
  let hellman1 = document.getElementById("MoonBlood");
  if (hellman1.style.display === "flex") {
    hellman1.style.display = "none";
  } else {
    hellman1.style.display = "flex";
  }
}

export function handleClick() {
  let b = document.getElementById("display");

  if (b.style.display === "flex") {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
}
export function top() {
  let canon = document.getElementById("eaon");
  if (canon.style.display === "none") {
    canon.style.display = "block";
  } else {
    canon.style.display = "none";
  }
}
// export function shore(){

//     let  mars = document.getElementById('madman');

//     if(mars.style.dispaly ==='block'){
//         mars.style.display = 'none';
//     }
//     else{
//         mars.style.display = 'block'
//     }

// }

export default function FormCard() {
  // let sox = document.getElementById('madman');
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
    
  };
  
    







   
    
  const filterItems = (catItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === catItem;
    });
    setItems(updatedItems);
  };
  const [items, setItems] = useState(Menu);
  const [toggle, setToggle] = useToggle();
  const [text, setText] = useState();
  function changed(event) {
    setText(event.target.value);
    // console.log(text);

    const updateText = Menu.filter((Curent) => {
      return Curent.category === text;
    });
    setItems(updateText);
  }
 

  return (
    <>
      <div className="product">
        <h4 className="proinner"> Products For You </h4>
      </div>
      <div className="main6">
        <div className="outsideformcard">
          <div className="form">
            <div className="formin">
              
              <div className="one">
                <div className="flexj">
                  <p className="slass">Sort by :</p>
                </div>
                <div className="divsv1">
                  <RiArrowDropDownLine id="sv" onClick={handleClick} />
                </div>
                <div className="divsv2">
                  <RiArrowDropUpLine id="sv1" />
                </div>
                {/* <select className='rolo' name="select" id="rollover" >
                    {/* <option value="opt1"><div className='widi'>Relevance</div></option>
                    <option value="opt2">New Arrivals</option>
                    <option value="opt3"> Price (Low to High)</option> */}
                {/* </select> */}
              </div>
              <div id="display">
                <div className="nano" id="rel">
                  <div onClick={() => setItems(Menu)}>All</div>
                </div>
                <div className="nano">
                  <div
                    onClick={() => {
                      filterItems("gift");
                    }}
                  >
                    {" "}
                    Relevance
                  </div>
                </div>
                <div className="nano">
                  <div
                    onClick={() => {
                      filterItems("newarrival");
                    }}
                  >
                    New Arrivals
                  </div>
                </div>
                <div className="nano">
                  <div
                    onClick={() => {
                      filterItems("price");
                    }}
                  >
                    Price (Low to High)
                  </div>
                </div>
              </div>
              <div className="two">
                <div className="fil">FILTERS</div>
                <div className="pa">1000+ Products</div>
                <hr className="line" />
                <div className="incon">
                  <div className="cat">Category:</div>
                  {/* <div className='divsv3'><RiArrowDropDownLine id='sv2' /></div>
                    <div className='divsv4'><RiArrowDropUpLine id='sv3' /></div> */}

                  <div
                    className="rolo1"
                    onClick={top}
                    name="select"
                    id="rollover"
                  >
                    <div className="divsv3" id="divo">
                      <RiArrowDropDownLine id="sv2" />
                    </div>
                  </div>
                </div>
                <div id="eaon">
                  <div className="secon">
                    <div className="second1">
                      <div className="icon1" onClick={changed}>
                        <svg
                          width="80%"
                          height="100%"
                          viewBox="0 0 20 20"
                          fill="greyT2"
                          xmlns="http://www.w3.org/2000/svg"
                          iconSize="20"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z"
                              fill="#666666"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.000244141)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="secon2">
                      {" "}
                      <input type="text" placeholder="Search"  onChange={changed}  />{" "}
                    </div>
                  </div>

                  <div className="cont">
                    <div>
                      {" "}
                      <div
                        itemType="button"
                        className="check"
                        onClick={() => {
                          filterItems("accupressure");
                        }}
                        id="maxpane"
                      >
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div
                      className="mad"
                      onClick={() => {
                        filterItems("accupressure");
                      }}
                    >
                      Accupressure Rollers
                    </div>
                  </div>
                  <div className="cont">
                    <div
                      className="check"
                      onClick={() => {
                        filterItems("watches");
                      }}
                    >
                      <input type="checkbox" />
                    </div>
                    <div
                      className="mad"
                      onClick={() => {
                        filterItems("watches");
                      }}
                    >
                      Analog Watches
                    </div>
                  </div>
                  <div className="cont">
                    <div className="check">
                      <input type="checkbox" />
                    </div>
                    <div className="mad">Battery</div>
                  </div>
                  {toggle && (
                    <div>
                      <div className="cont2">
                        <div className="check">
                          <input type="checkbox" />
                        </div>
                        <div className="mad">Bike Covers</div>
                      </div>
                      <div className="cont3">
                        <div className="check">
                          <input type="checkbox" />
                        </div>
                        <div className="mad">Bedsheets</div>
                      </div>
                    </div>
                  )}
                  <div className="shom">
                    <button className="press" onClick={setToggle}>
                      Show more
                    </button>
                  </div>
                </div>
                <hr className="line" />
                <div className="incon">
                  <div className="cat1">Gender :</div>
                  <div className="divsv5" onClick={hellman}>
                    <RiArrowDropDownLine id="sv4" />
                  </div>
                  {/* <div className='divsv6'><RiArrowDropUpLine  id='sv5' /></div>  */}
                </div>
                {/* <div className='bub'>
                    <div className="a1">Girls</div>
                    <div className="a2">Boys</div>
                    <div className="a3">Men</div>
                    <div className="a4">Women</div>
                </div> */}
                <div id="MoonBlood">
                  <div className="upmoon">Boys</div>
                  <div className="upmoon">Girls</div>
                  <div className="upmoon">Men</div>
                  <div className="upmoon">Women</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            {items.map((elem) => {
              const { id, image,  name, rating, review, price } = elem;
              return (
               <div className="carda">
                  <div className="card1img">
                  <Link to={'/click/'+id}> <img src={image} alt="" /></Link>
                  </div>
                  <div className="card1">
                    <div className="headi">{name}</div>
                    <div className="flexi">
                      <div className="bold">{price}</div>
                      <div>onwards</div>
                    </div>
                    <div className="free">Free Delivery</div>
                    <div className="rating">
                      <div className="ratinginside">
                        <div>{rating}</div>
                        <div>
                          <AiFillStar id="star" />
                        </div>
                      </div>
                      <div>{review}</div>
                    </div>
                  </div>
                </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
