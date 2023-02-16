import Menu from "./Menu";
import React ,{useState} from 'react'
import Navbar from "./Navbar";
import {AiOutlineInfoCircle } from 'react-icons/ai';
import {AiFillStar } from 'react-icons/ai';

export default function Click() {
    const [items, setItems] = useState(Menu);
  return (
    <>
    <Navbar/>
    <div className="kido">
        <div className="kido0">
        <div className="kido1">
            <div className="subKido">
                <div><img src="https://images.meesho.com/images/products/45738958/dfzrs_64.jpg" alt="" />
                </div>
                <div><img src="https://images.meesho.com/images/products/45738958/ryp8o_64.jpg" alt="" /></div>
                <div><img src="https://images.meesho.com/images/products/45738958/fr9sj_64.jpg" alt="" /></div>
                <div><img src="https://images.meesho.com/images/products/45738958/onfmi_64.jpg" alt="" /></div>
            </div>
            <div className="supkido"><img src="https://images.meesho.com/images/products/45738958/ryp8o_512.jpg" alt="" className="subKidoimg" /></div>
        </div>
        <div className="subkaido2">
            <div className="subkido2-1"> 
                <div className="classico">Classic Pan</div>
                <div className="flexo" >
                    <div className="prico">Rs:422</div>
                    <div className="ico"><AiOutlineInfoCircle/></div>
                </div>
                <div className="flexo">
                    <div className="fomo">3.8
                    <div className="svgo"><AiFillStar/></div>
                    </div>
                    <div className="light">4148 Ratings, 734 Reviews</div>
                </div>
                <div className="freedelivery">Free delivery</div>
            </div>
            <div className="selecto">
                <div className="sizo">Select Size</div>
                <div className="sizo1">Free Size</div>
            </div>
            <div className="selecto1">
                <div className="producto">Product Details</div>
                <div className="pano">Name : Classic Pan</div>
                <div className="parao">The Nirlon Non Stick Tawa is your kitchen essential providing oil-free and healthy cooking. This 100% virgin aluminium tawa offers effective heat distribution while cooking at a high temperature. Being Perfluorooctanoic Acid (PFOA) & Lead free, you are assured a food grade safe cooking surface. This non-stick 3 layer coating is smooth, long lasting and durable. This non-stick tawa is compatible with gas stove cooktop surfaces, fitting well with modern kitchens. Resting easy, the Nirlon Non Stick Tawa is sturdy and durable. This tawa has a High Temperature Resistant (HTR) outer surface coating that is long lasting. With long bake lite designer finished handle, this tawa is easy to grip. Make rotis, chapatis, parathas, dosas and pizzas for the entire family with this easy to use non-stick tawa. For your convenience, this tawa is also dishwasher safe.</div>
                <div>Sizes : </div>
                <div>Free Size</div>
                <div>Country of Origin : Pakistan</div>
                <div className="minfo">More Information</div>
            </div>
           
        </div>
        </div>
    </div>
    <div className="cardio">
    <div className="cards1">
            {items.map((elem) => {
              const { id, image, category, name, rating, review, price } = elem;
              return (
                <div className="carda">
                  <div className="card1img">
                    <img src={image} alt="" />
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
        
    </>
  )
}
