// App.js
import React, { useState } from 'react';
import BarChart from './component/Barchart';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import Linechart from './component/Linechart';
import BarGraph from './component/BarGraph';



const App = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleNewInvoiceClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 15 },
    { label: 'C', value: 20 },
    { label: 'D', value: 16 },
    { label: 'E', value: 19 },
    { label: 'F', value: 12 },
    // Add more data as needed
  ];

  const myChartData = [
    { value: 10 },
    { value: 40 },
    { value: 30 },
    { value: 45 },
    { value: 41 },
    { value: 60 },
    { value: 50 },
    { value: 55 },
    // Add more data as needed
  ];

  
  const barChartData = [ 10,15,20,16,19,12];


  const watchListData = [
    { account: 'Account1', thisMonth: 100, oneYear: 1200 },
    { account: 'Account2', thisMonth: 150, oneYear: 1800 },
    // Add more data as needed
  ];

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <Dashboard />
        </div>
             {/* File upload popup */}
      {isPopupOpen && (
        <div className='col-12 d-flex '>
        <div className='popup bg-dark col-6 text-light text-center p-3' style={{position:"absolute"}}>
          <h4>Choose invoice file</h4>
        <input type="file" className='' /> <br />
          <button className='btn btn-danger px-4' onClick={handleClosePopup}>Close</button>
        </div>
        </div>
      )}
        <div className=' p-2 col-9 rounded' style={{ backgroundColor: "#f6f7f9" }}>
          <div className='d-flex flex-lg-row flex-column justify-content-evenly '>
            <div className=''>
              <div className='d-flex justify-content-between mb-2'>
                <h6>Checking Account</h6>
                <div>
                  <button className='bg-transparent px-2 me-2 rounded'>Manage<i class="ri-arrow-drop-down-line ms-2"></i></button>
                  <button className='bg-transparent px-2 me-2 rounded'>Janurary <i class="ri-arrow-drop-down-line ms-2"></i></button>
                </div>
              </div>
              <hr />

              <Linechart chartData={myChartData} />

            </div>
            <div className='ms-5 me-5'>
              <div className='d-flex justify-content-between mb-2'>
                <h6>invoices owed to you</h6>
                <button   onClick={handleNewInvoiceClick} className='border border-none bg-primary bg-opacity-25 px-2 text-primary me-2 rounded'>New sales invoice</button>
              </div>
              <hr />
              <BarChart data={data} />
          
            </div>
          </div>
          <div className='mt-4 d-flex flex-lg-row flex-column justify-content-evenly '>
            <div>
              <div className='d-flex justify-content-between mb-2'>
                <p>Total cash flow</p>
                <div>
                  <i class="ri-square-fill rounded " style={{color:"aqua"}}></i>
                  <span>In</span>
                  <i class="ri-square-fill rounded " style={{color:"green"}}></i>
                  <span>Out</span>
                </div>
               
              </div>
              <hr />
              
              <BarGraph barData={barChartData} />
            </div>

            <div className='col-5 ms-5 me-5' >
              <div className='d-flex justify-content-between mb-2'>
              <p>Account Watch List</p>
              </div>
              <hr />
             <div className='col-12  rounded p-5' style={{backgroundColor:"white"}}>
              <div className='col-12 d-flex justify-content-evenly' style={{fontSize:"12px"}}>
               <p className='col'>Account</p>
               <p className='col'>This Month</p>
               <p className='col'>YTD</p>
              </div>
              <div className='col-12 d-flex justify-content-evenly' style={{fontSize:"12px"}}>
               <p className='col'>Sales</p>
               <p className='col '>12,254</p>
               <p className='col'>1563,65.56</p><br />
               </div>
              <div className='col-12 d-flex justify-content-evenly' style={{fontSize:"12px"}}>

               <p className='col'>Advertising</p>
               <p className='col'>25,456</p>
               <p className='col'>655,65.45</p><br />
               </div>
              <div className='col-12 d-flex justify-content-evenly' style={{fontSize:"12px"}}>

               <p className='col'>Inventory</p>
               <p className='col'>45,689</p>
               <p className='col'>56,754.56</p>
               </div>
              <div className='col-12 d-flex justify-content-evenly' style={{fontSize:"12px"}}>

               <p className='col'>Entertainment</p>
               <p className='col'>654,659</p>
               <p className='col'>45,656</p>

              </div>

             </div>

              
     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
