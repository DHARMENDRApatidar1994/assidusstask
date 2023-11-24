import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='d-flex justify-content-between mb-3 mt-2'>
            <img className='ms-5' src="https://mms.businesswire.com/media/20220705005145/en/1503595/2/Assiduus-Logo2x.jpg" alt="" />
            <div className='col-2 d-flex  align-items-center'>
                <div className='me-5' style={{position:"relative"}}>
                <i style={{position:"absolute",zIndex:"999",left:"-8.4vmax",top:"-0.9vmax"}} class="ri-search-line d-none d-lg-block"></i>
                <input className='rounded d-none d-lg-block' style={{position:"absolute",left:"-9vmax",top:"-1vmax"}} type="text" />
                </div>
                <i class="ri-notification-3-fill ms-4" style={{position:"relative"}}><span  style={{position:"absolute",fontSize:"5vmax",color:"green",top:"-4.9vmax",left:"0.2px",marginLeft:"0.3vmax"}}>.</span></i>
                <img className='rounded-circle ms-3' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={40} height={40} alt="" />
                <i class="ri-arrow-down-s-fill ms-3"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar