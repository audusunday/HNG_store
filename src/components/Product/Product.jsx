import React from "react";
import Mainitem from "../../assets/Mainitem.png";
import shoe1 from "../../assets/shoe1.png";
import shoe2 from "../../assets/shoe2.png";
import shoe3 from "../../assets/shoe3.png";
import shoe4 from "../../assets/shoe4.png";
import Rect1 from "../../assets/Rect1.png";
import "./Product.css";

function Product() {
  return (
    <main>
      <section>
        <div>
          <img src={Mainitem} alt="" />
        </div>
      </section>

      <section id="firstrow">
        <div>
          <img src={shoe1} alt="" />
          <p>
            <span>
              Green trainers
              <br />
              N450,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe2} alt="" />
          <p>
            <span>
              Vans shoe
              <br />
              N327,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe3} alt="" />
          <p>
            <span>
              Converse
              <br />
              N240,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe4} alt="" />
          <p>
            <span>
              Nike lebrons
              <br />
              N510,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
      </section>

      <section id="firstrow">
        <div>
          <img src={shoe1} alt="" />
          <p>
            <span>
              Nike runner
              <br />
              N200,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe2} alt="" />
          <p>
            <span>
              Airforce1 colured
              <br />
              N370,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe3} alt="" />
          <p>
            <span>
              Trainers
              <br />
              N490,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe4} alt="" />
          <p>
            <span>
              Converse all star
              <br />
              N300,500
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
      </section>
      <section id="firstrow">
        <div>
          <img src={shoe1} alt="" />
          <p>
            <span>
              Air jordans
              <br />
              N450,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe2} alt="" />
          <p>
            <span>
              Airforce 1
              <br />
              N245,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe3} alt="" />
          <p>
            <span>
              New balance
              <br />
              N275,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
        <div>
          <img src={shoe4} alt="" />
          <p>
            <span>
              Gym trainers
              <br />
              N230,000
            </span>
            <img src={Rect1} alt="" />
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
