import React from 'react'

export default function Section1() {
  return (
   <>
    <div className="fat">
        <div className="fatinner">
        <div className="fatinner1">
            <div className="text1"><h3>Lowest Prices Best Quality Shopping</h3></div>
            <div className="add">
                <div className='packets'>
                    <div  className='packpic'><img id='img1' src="https://images.meesho.com/images/pow/freeDelivery.svg" alt="" /></div>
                    <div className='pap'>Free Delivery</div>
                </div>
                <vl className="verticalline"/>
                <div className='packets'>
                    <div className='packpic'><img src="https://images.meesho.com/images/pow/cod.svg" alt="" /></div>
                    <div className='pap'>Cash on Delivery</div>
                </div>
                <vl className="verticalline"/>
                <div className='packets'>
                    <div className='packpic'><img src="https://images.meesho.com/images/pow/easyReturns.svg" alt="" /></div>
                    <div className='pap'>Easy Returns</div>
                </div>
            </div>
            <div><button className="bunto">
                <div><img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg" alt="" /></div>
                <div>Download the Meesho App</div>
            </button></div>
        </div>
        <div className="fatinner2"><img src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="" /></div>

        </div>    
    </div>
    <div className="last1">
    <div className='lastinner'>
        <div><hr className='hrr' /></div>
        <div className='cen'>Top Categories to choose from</div>
        <div><hr className='hrr' /></div>
    </div>
    </div>
   
   </>
  )
}
