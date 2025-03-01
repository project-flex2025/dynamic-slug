import React from "react";

function Card(props: any) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="card card-stats card-round">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col col-stats ms-3 ms-sm-0">
              <div className="numbers">
                <p className="card-category">{props?.title}</p>
                <h4 className="card-title">{props?.value}</h4>
              </div>
            </div>
            <div className="col-icon">
              <div className="icon-big text-center icon-primary bubble-shadow-small">
                <i className={`fa-solid ${props?.icon}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
