import React  from 'react'


import { AiFillStar } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
// import {MdCheckBoxOutlineBlank} from 'react-icons/md';



export function handleClick(){
  
    let b = document.getElementById('display');
   

    if(b.style.display==='flex'){
        b.style.display='none'
        




    }
    else{
        b.style.display='flex'
       

    }

}

export default function FormCard() {
  return (
    <>
    <div className='product'><h4 className='proinner'> Products For You </h4></div>
    <div className="main6">
    <div className="outsideformcard">
        <div className="form">
        <div className="formin">
            <div className="one">
                <div className='flexj'>
                    <p className='slass'>Sort by :</p>
                   

                </div>
                <div className='divsv1'><RiArrowDropDownLine id='sv'  /></div>
                <div className='divsv2'><RiArrowDropUpLine id='sv1' onClick={handleClick}  /></div>
                {/* <select className='rolo' name="select" id="rollover" >
                    {/* <option value="opt1"><div className='widi'>Relevance</div></option>
                    <option value="opt2">New Arrivals</option>
                    <option value="opt3"> Price (Low to High)</option> */}
                {/* </select> */}
            </div>
            <div id="display">
                <div className='nano'><a href="/"> Relevance</a></div>
                <div className='nano'><a href="/">New Arrivals</a></div>
                <div className='nano'><a href="/">Price (Low to High)</a></div>
            </div>
            <div className='two'>
                <div className="fil">FILTERS</div>
                <div className="pa">1000+ Products</div>
                <hr className="line" />
                <div className="incon">
                    <div className='cat'>Category :</div>
                    {/* <div className='divsv3'><RiArrowDropDownLine id='sv2' /></div>
                    <div className='divsv4'><RiArrowDropUpLine id='sv3' /></div> */}
                    
<select className='rolo1' name="select" id="rollover"  >
                    {/* <option value="opt1"><div className='widi'>Price</div></option>
                    <option value="opt2">Discount</option>
                    <option value="opt3">Brand</option> */}
                </select>
               


                </div>
                <div className="secon">
                <div className='second1'><div className='icon1'><svg width="80%" height="100%" viewBox="0 0 20 20" fill="greyT2" xmlns="http://www.w3.org/2000/svg" iconSize="20" ><g clip-path="url(#clip0)"><path d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z" fill="#666666"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white" transform="translate(0 0.000244141)"></rect></clipPath></defs></svg></div></div>
                <div className='secon2'> <input type="text" placeholder='Search' /> </div>
                </div>

                <div className="cont">
                    <div className="check"><input  type="checkbox" /></div>
                    <div className="mad">Accupressure Rollers</div>
                </div>
                <div className="cont">
                    <div className="check"><input type="checkbox" /></div>
                    <div className="mad">Analog Watches</div>
                </div>
                <div className="cont">
                    <div className="check"><input type="checkbox" /></div>
                    <div className="mad">Battery</div>
                </div>
                <button className='press'>Show more</button>
                <div className="cont2">
                    <div className="check"><input type="checkbox" /></div>
                    <div className="mad">Bike Covers</div>
                </div>
                <div className="cont3">
                    <div className="check"><input type="checkbox" /></div>
                    <div className="mad">Bedsheets</div>
                </div>
                <hr className="line" />
                <div className="incon">
                    <div className='cat1'>Gender :</div>
                    {/* <div className='divsv5'><RiArrowDropDownLine  id='sv4' /></div>
                    <div className='divsv6'><RiArrowDropUpLine  id='sv5' /></div> */}

<select className='rolo1' name="select" id="rollover" >
                    <option value="opt1"><div className='widi'>Kids</div></option>
                    <option value="opt2">Men</option>
                    <option value="opt3">Women</option>
                </select>
                </div>
                {/* <div className='bub'>
                    <div className="a1">Girls</div>
                    <div className="a2">Boys</div>
                    <div className="a3">Men</div>
                    <div className="a4">Women</div>
                </div> */}
                
              
            </div>

            </div>












        </div>













        <div className="cards">
        <div className="carda">
            <div className='card1img'><img src="https://images.meesho.com/images/products/193737749/jcnvr_400.jpg" alt="" /></div>
            <div className='card1'>
                <div className='headi'>New Collections of face ...</div>
                <div className='flexi'>
                    <div className='bold'>Rs:175</div>
                    <div>onwards</div>
                </div>
                <div className='free'>Free Delivery</div>
                <div className='rating'>
                    <div className='ratinginside'>
                        <div>4.0</div>
                        <div><AiFillStar id='star'/></div>
                    </div>
                    <div>9 reviews</div>
                    </div>
                </div>
            </div>          <div className="carda">
            <div className='card1img'><img src="https://images.meesho.com/images/products/193737749/jcnvr_400.jpg" alt="" /></div>
            <div className='card1'>
                <div className='headi'>New Collections of face ...</div>
                <div className='flexi'>
                    <div className='bold'>Rs:175</div>
                    <div>onwards</div>
                </div>
                <div className='free'>Free Delivery</div>
                <div className='rating'>
                    <div className='ratinginside'>
                        <div>4.0</div>
                        <div><AiFillStar id='star'/></div>
                    </div>
                    <div>9 reviews</div>
                    </div>
                </div>
            </div>          <div className="carda">
            <div className='card1img'><img src="https://images.meesho.com/images/products/193737749/jcnvr_400.jpg" alt="" /></div>
            <div className='card1'>
                <div className='headi'>New Collections of face ...</div>
                <div className='flexi'>
                    <div className='bold'>Rs:175</div>
                    <div>onwards</div>
                </div>
                <div className='free'>Free Delivery</div>
                <div className='rating'>
                    <div className='ratinginside'>
                        <div>4.0</div>
                        <div><AiFillStar id='star'/></div>
                    </div>
                    <div>9 reviews</div>
                    </div>
                </div>
            </div>          <div className="carda">
            <div className='card1img'><img src="https://images.meesho.com/images/products/193737749/jcnvr_400.jpg" alt="" /></div>
            <div className='card1'>
                <div className='headi'>New Collections of face ...</div>
                <div className='flexi'>
                    <div className='bold'>Rs:175</div>
                    <div>onwards</div>
                </div>
                <div className='free'>Free Delivery</div>
                <div className='rating'>
                    <div className='ratinginside'>
                        <div>4.0</div>
                        <div><AiFillStar id='star'/></div>
                    </div>
                    <div>9 reviews</div>
                    </div>
                </div>
            </div>
    </div>
    </div>


    </div>
    
    </>
  )
}
