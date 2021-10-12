import React from "react";
import "./pricingtable.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import pricingData from "./pricingSource";

const pricingtable = () => {
  return (
    <>
      <section className="pricing">
        {pricingData.map(function (x, index) {
          return (
            <div className="container" key={index}>
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    {x.Plan}
                  </h5>
                  <h6 className="card-price text-center">
                    ${x.price}
                    <span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    {x.Details.map(function (data, index) {
                      return (
                        <li key={index} className={data.class}>
                          {data.value}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default pricingtable;
