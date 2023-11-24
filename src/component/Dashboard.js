import React, { useRef, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import  gsap  from 'gsap';
import "./Dashboard.css" 

const Dashboard = () => {
  

    const [flag, setFlag] = useState(1);
  const first = useRef (null);
  const rightNAV = (e) => {
    e.preventDefault();
    if (flag === 1) {
      if(window.innerWidth<=600){
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      }else {
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      }
      setFlag(0);
    } else {
      if(window.innerWidth<=600){
        gsap.to(first.current, {
          left: "-75%",
          duration: 1,
        });
      }else {
        gsap.to(first.current, {
          left: "-70%",
          duration: 1,
        });
      }

      setFlag(1);
    }
  };

    return (
        <div>
            <div id="main1">
    <div className="rightNav   text-light " style={{backgroundColor:"green"}} ref={first} >
      
      <p className="dashmargin pt-3" style={{marginLeft: "20px"}} onClick={rightNAV}><i class="ri-dashboard-fill me-3"></i>DASHBOARD <i class="ri-arrow-right-s-fill " style={{position:"absolute",left:"22vmax",color:"green",fontSize:"8vmax",top:"-2vmax"}}></i></p>
      <div className="txtdash">
            <Sidebar>
                <Menu
                   menuItemStyles={{
                    button: {
                      color: "black",
                      backgroundColor: "white",
                      [`&.active`]: {
                        backgroundColor: 'red',
                        color: 'blue',
                      },
                    },
                  }} 
                >
                    
                    <MenuItem> <i class="ri-wallet-3-fill me-3 fs-5"></i>Account </MenuItem>
                    <MenuItem><i class="ri-money-dollar-circle-line me-3 fs-5"></i> Payroll </MenuItem>
                  
                    <MenuItem><i class="ri-file-3-fill me-3 fs-5"></i> Reports </MenuItem>
                    <MenuItem><i class="ri-user-3-fill me-3 fs-5"></i> Advisor </MenuItem>
                    
                    <MenuItem> <i class="ri-contacts-book-fill me-3 fs-5"></i>Contacts </MenuItem>
                   
                </Menu>
            </Sidebar>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard