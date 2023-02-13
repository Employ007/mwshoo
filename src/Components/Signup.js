import React from 'react'
// import { Link } from 'react-router-dom';
// import { AiOutlineShopping} from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// export function ticking(){
//   document.getElementsByClassName("vl1").style.display='none';
//   document.getElementsByClassName('third3').style.display='none';
// }

export default function Signup() {
  return (
    <><div className='main'>
    <div className='inner'>
        <div className='first'>
           <svg  viewBox="0 0 87 20" fill="none" xmlns="http://www.w3.org/2000/svg"   width="235px" height="36" iconsize="20" className="sc-bcXHqe hpUsVz"><path d="M12.844 6.814c1.453.011 2.677.516 3.685 1.507 1.02.998 1.523 2.188 1.512 3.593L18 18.522c-.006.788-.668 1.423-1.488 1.423-.815-.006-1.471-.646-1.465-1.434l.04-6.608a2.048 2.048 0 00-.661-1.57c-.428-.43-.967-.646-1.6-.646a2.227 2.227 0 00-1.664.686c-.416.42-.621.997-.627 1.581l-.035 6.511c-.006.8-.68 1.446-1.506 1.44-.826-.006-1.494-.657-1.488-1.457l.04-6.55a2.21 2.21 0 00-.603-1.56c-.45-.464-1.002-.69-1.658-.696a2.236 2.236 0 00-1.611.629c-.434.425-.668.946-.668 1.558l-.041 6.602c-.006.794-.674 1.434-1.494 1.429-.82-.006-1.477-.652-1.471-1.445l.041-6.58a4.928 4.928 0 011.29-3.32c1.083-1.168 2.419-1.752 3.972-1.74 1.482.01 2.748.526 3.761 1.575 1.043-1.043 2.297-1.542 3.78-1.536zm18.682 7.316l-8.479-.052c.07 1.02.41 1.83 1.008 2.436.603.596 1.377.902 2.32.907.738.006 1.348-.159 1.834-.499.287-.204.598-.504.932-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.369 2.034 7.51 7.51 0 01-.287.318 6.416 6.416 0 01-1.389 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.445-.617-4.594-1.813-1.148-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.143-1.19 2.643-1.78 4.512-1.763 1.886.012 3.375.601 4.459 1.774 1.078 1.162 1.61 2.76 1.6 4.806a.703.703 0 01-.721.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.972-2.306a2.985 2.985 0 00-1.013.153 2.928 2.928 0 00-.867.453c-.258.198-.48.436-.668.714a3.24 3.24 0 00-.428.952l5.947.034zM45.64 14.13l-8.478-.052c.07 1.02.41 1.83 1.007 2.436.604.596 1.377.902 2.32.907.739.006 1.348-.159 1.835-.499.287-.204.597-.504.931-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.37 2.034 7.442 7.442 0 01-.288.318 6.416 6.416 0 01-1.388 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.446-.617-4.594-1.813-1.149-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.142-1.19 2.642-1.78 4.511-1.763 1.887.012 3.375.601 4.46 1.774 1.077 1.162 1.61 2.76 1.599 4.806a.703.703 0 01-.72.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.971-2.306a2.985 2.985 0 00-1.014.153 2.928 2.928 0 00-1.535 1.167 3.24 3.24 0 00-.427.952l5.947.034zM61.976 0c.838.006 1.506.663 1.5 1.474l-.062 6.478c1.084-.93 2.277-1.14 3.578-1.134 1.3.006 2.66.566 3.539 1.501.75.81 1.113 2.103 1.101 3.871l-.047 6.302c-.005.81-.685 1.456-1.523 1.45-.838-.005-1.506-.663-1.5-1.473l.041-6.024c.006-1.014-.176-1.751-.54-2.204-.368-.46-.966-.692-1.792-.692-1.055-.006-1.805.306-2.238.935-.428.64-.645 1.74-.657 3.298l-.035 4.664c-.005.81-.685 1.457-1.523 1.451-.838-.005-1.506-.663-1.5-1.473l.129-16.962c.012-.822.691-1.468 1.53-1.462zM73.44 13.46c.012-1.751.668-3.236 1.975-4.454 1.3-1.219 2.888-1.825 4.746-1.808 1.869.011 3.451.64 4.746 1.887 1.277 1.241 1.91 2.766 1.898 4.562-.012 1.82-.668 3.332-1.974 4.556-1.313 1.213-2.918 1.808-4.81 1.797-1.882-.012-3.446-.646-4.712-1.899-1.254-1.235-1.88-2.782-1.869-4.641zm2.96.068c-.007 1.213.316 2.17.984 2.879.68.72 1.582 1.082 2.707 1.088 1.13.006 2.039-.34 2.718-1.043.68-.703 1.026-1.638 1.037-2.816.006-1.18-.322-2.12-.996-2.828-.68-.714-1.582-1.083-2.707-1.088-1.107-.006-2.004.345-2.695 1.054-.691.708-1.037 1.626-1.049 2.754zm-19.405-.257c.907.664 1.363 1.53 1.38 2.582v.044c0 1.286-.507 2.348-1.453 3.067-.868.66-2.073 1.008-3.476 1.008-1.492 0-3.064-.42-4.427-1.177a1.362 1.362 0 01-.485-1.967 1.443 1.443 0 011.2-.626c.248 0 .49.06.704.18 1.042.577 2.107.882 3.076.882 1.532 0 1.695-.74 1.695-1.062v-.044c0-.648-.884-.953-2.332-1.378-.101-.033-.197-.06-.293-.087-.963-.267-1.965-.589-2.743-1.144-.924-.665-1.374-1.537-1.374-2.67v-.044c0-2.326 1.949-3.955 4.737-3.955 1.172 0 2.45.283 3.617.806.36.164.642.463.766.834a1.36 1.36 0 01-.113 1.106l-.006.005a1.449 1.449 0 01-1.256.714c-.214 0-.417-.043-.608-.13-.907-.41-1.763-.627-2.479-.627-.912 0-1.504.37-1.504.948v.043c0 .67 1.172 1.03 2.411 1.417l.242.076c.952.284 1.938.632 2.721 1.199z" fill="#F43397"></path></svg>
        </div>
        <div className='second'>
            <div className='second1'><div className='icon1'><svg width="80%" height="100%" viewBox="0 0 20 20" fill="greyT2" xmlns="http://www.w3.org/2000/svg" iconSize="20" ><g clipPath="url(#clip0)"><path d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z" fill="#666666"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white" transform="translate(0 0.000244141)"></rect></clipPath></defs></svg></div></div>
            <div className='second2'> <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' /> </div>
        </div>
        <div className='third'>
            <div className='third1'>
                <div className='gap'>
                    <div className='innerthird1'><svg   viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" mr="8" className='icon' iconSize="20"><path fillRule="evenodd" clip-rule="evenodd" d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z" fill="#333"></path></svg></div>
                    <div className='innerthird2'>Download App</div>
                </div>
                
            </div>
             <div className="vl"></div>
            <a className='anchor' href="/becomeseller"><div className='third2'>Become a Supplier</div></a>
            {/* <div className="vl1"></div> */}
            {/* <div className='third3'> */}
               
                {/* <div className='innert3c1'>
                    <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon3" mr="8" iconSize="20"><g  clip-path="url(#user_svg__clip0)"><path width="50%" height="50%" d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0012 2.4a5.835 5.835 0 00-5.832 5.832 5.79 5.79 0 002.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354zM7.853 8.232a4.148 4.148 0 018.294 0 4.148 4.148 0 01-8.294 0zm13.122 14.083H3.025a.245.245 0 01-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 01-.14.032z" fill="#333"></path></g><defs><clipPath id="user_svg__clip0"><path fill="#fff" transform="translate(1.2 2.4)" width="50%" height="50%" d="M0 0h21.6v21.6H0z"></path></clipPath></defs></svg>
                    <div className='innert3c2sc2'>Profile</div>
                    <hr className='hr' /> 
                    <div className="profilecard">
                        <div className='pcard'>
                           <h1> Hello User</h1>
                           <p>To access your Meesho account</p>
                            <div> <button className='botton' > <Link to="/signup" onClick={ticking} className='botton' >Sign up</Link>     </button></div>
                            <div><hr className='profilehr' /></div>
                            <div className='psvg'>
                                <div className='shoppingwallet' ><AiOutlineShopping id='svg' /></div>
                                <div className='myorder'>My Orders</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='innert3c2'>
                    <div className='innert3c2sc1'><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" mr="8" className="icon3" stroke="greyBase" iconSize="20"><path d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1" stroke="#666" stroke-width="1.5" stroke-linecap="round"></path><ellipse cx="9.421" cy="16.744" rx="1.243" ry="1.256" stroke="#666" stroke-width="1.5"></ellipse><ellipse cx="15.221" cy="16.744" rx="1.243" ry="1.256" stroke="#666" stroke-width="1.5"></ellipse></svg></div>
                    <div className='innert3c2sc2'>Cart</div>
                
            </div>    
            </div> */}
        </div>
    </div>

</div>
    <div className="sup">
    <div className="ssup">
        <div className="images">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="#" />
            <div className='sign'>
                <div className='signuptext'>Sign Up to view your profile</div>
                <div className='country'>Country</div>
                <div className='num'>
                    <div className='yup'>PK +92
                   <hr className='underline' /></div>
                    <div className='comp'> <input type="text" placeholder='Phone Number' />
                    <hr className='underline' /></div>
                </div>
                <div className='tap'> <button>Send OTP</button></div>
                <div className='continue'>By continuing, you agree to Meesho’s </div>
                <div className='span'>
                <span className='classic'>Terms and Conditions</span>
                <span> and</span>
                <span className='classic'>Privacy and Policy</span>
                </div>
            </div>
        </div>

    </div>


    </div>
    
    </>
  )
}
