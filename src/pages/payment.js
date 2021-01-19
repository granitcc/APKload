import React, { useState } from "react";
import "./payment.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function PaymentPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="payment">
        <form className="creddit">
          <div className="one">
            <p className="txt">Add credit or debit card</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.357"
              height="27.5"
              viewBox="0 0 35.357 27.5"
            >
              <path
                id="Icon_awesome-cc-visa"
                data-name="Icon awesome-cc-visa"
                d="M28.857,14.484s.467,2.283.571,2.762h-2.05c.2-.546.982-2.67.982-2.67-.012.018.2-.559.325-.915Zm6.5-9.287V26.8a2.947,2.947,0,0,1-2.946,2.946H2.946A2.947,2.947,0,0,1,0,26.8V5.2A2.947,2.947,0,0,1,2.946,2.25H32.411A2.947,2.947,0,0,1,35.357,5.2Zm-26,15.42,3.879-9.527H10.632L8.219,17.6l-.264-1.32L7.1,11.893a1.026,1.026,0,0,0-1.117-.8H2.007l-.043.19a9.741,9.741,0,0,1,2.59,1.05l2.2,8.287Zm5.795.012L16.7,11.089H14.235l-1.541,9.539h2.462Zm8.588-3.118c.012-1.087-.651-1.915-2.069-2.6-.866-.436-1.393-.73-1.393-1.179.012-.405.448-.823,1.418-.823a4.23,4.23,0,0,1,1.835.362l.221.1.338-2.063a6.13,6.13,0,0,0-2.21-.405c-2.437,0-4.15,1.3-4.162,3.155-.018,1.369,1.228,2.13,2.161,2.59.951.467,1.277.773,1.277,1.185-.012.638-.773.933-1.479.933a4.917,4.917,0,0,1-2.314-.509l-.325-.153L16.7,20.254a7.532,7.532,0,0,0,2.75.509C22.037,20.77,23.725,19.487,23.743,17.51Zm8.667,3.118-1.989-9.539H28.513a1.214,1.214,0,0,0-1.289.792l-3.665,8.747h2.59s.424-1.179.516-1.43h3.167c.074.338.295,1.43.295,1.43Z"
                transform="translate(0 -2.25)"
                fill="#0a62c3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="25"
              viewBox="0 0 38 25"
            >
              <g
                id="Group_386"
                data-name="Group 386"
                transform="translate(-389.436 -1192.745)"
              >
                <path
                  id="Exclusion_2"
                  data-name="Exclusion 2"
                  d="M12.5,0A12.5,12.5,0,1,1,0,12.5,12.5,12.5,0,0,1,12.5,0Z"
                  transform="translate(389.436 1192.745)"
                  fill="#eb001b"
                />
                <path
                  id="Exclusion_3"
                  data-name="Exclusion 3"
                  d="M12.5,0A12.5,12.5,0,1,1,0,12.5,12.5,12.5,0,0,1,12.5,0Z"
                  transform="translate(402.436 1192.745)"
                  fill="#f79e1b"
                />
                <path
                  id="Intersection_5"
                  data-name="Intersection 5"
                  d="M0,11.2A12.888,12.888,0,0,1,6.578,0a12.826,12.826,0,0,1,0,22.4A12.888,12.888,0,0,1,0,11.2Z"
                  transform="translate(401.593 1194.176)"
                  fill="#ff5f00"
                />
              </g>
            </svg>
          </div>

          <div className="two">
            <input
              className="input1"
              type="text"
              placeholder="First Name"
              id="name"
            />
            <input
              className="input1"
              type="text"
              placeholder="Last Name"
              id="lastname"
            />
          </div>
          <div className="three">
            <input
              className="input2"
              type="text"
              placeholder="Card number"
              id="email"
            />
          </div>
          <div className="four">
            <input
              className="input3"
              type="number"
              placeholder="Expiration date MM/YY"
              id="date"
            />

            <input
              className="input3"
              type="number"
              placeholder="CVV"
              id="cvv"
            />

            <input
              className="input3"
              type="number"
              placeholder="Billing ZIP"
              id="zip"
            />
          </div>
          <div className="five">
            <input
              className="input4"
              type="text"
              placeholder="Billing Address"
              id="badress"
            />
          </div>
          <div className="buttons">
            <button className="cancel" value="cancel">
              CANCEL
            </button>
            <button className="submit" value="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PaymentPage;
