import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div>
      <div className="bg-secondary p-3 mt-3">
        <h4 className="text-center text-white">Q-Zone</h4>
        <div>
          <img className=" img-fluid" src={qZone1} alt="" />
          <img className="img-fluid" src={qZone2} alt="" />
          <img className="img-fluid" src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QZone;
