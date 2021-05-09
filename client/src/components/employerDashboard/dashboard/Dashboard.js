import "./Dashboard.css";
import Tree from '../../../images/tree-1578.svg'

import CarLogo from '../../../images/car-1760.svg'

import CountUp from 'react-countup'

import Donut from "./Donut";

function Dashboard(props) {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-headers">
        <h2 style={{marginLeft: "40px", marginTop:"5rem"}}>Hello {props.user.name.split(" ")[0]},</h2>
        <h1 style={{marginLeft: "40px"}} className="dashboard-title">Your Dashboard</h1>
        <h5 style={{marginLeft: "40px", marginTop: "3rem", fontFamily: "Century-Gothic", fontSize: "20px"}}>With order coupling, we've managed to save <b>1234.21 kg </b> of carbon emissions.</h5>
        <div className="stats-container">
          <div className="orders-container">
            <h2>In total, your branch has saved </h2>
            <div className="stats-icon-container">
                <h1 className="trip-statistics"> <CountUp end={382} duration={5}/> Trips</h1>
                <img className="icons" src={CarLogo}/>

            </div>

          </div>
          <div className="orders-container">
            <h2>In terms of trees saved, thats </h2>
            <div className="stats-icon-container">
             <h1 className="trip-statistics"
             style={{color: "#45ad9f"}}> <CountUp end={672} duration={5}/> Trees</h1>
                <img  className="icons" src={Tree}/>

            </div>
          </div>

        </div>

        <div className="graphs">
                    <div className="dashboard-donut-graphs">
                        <Donut />
                    </div>
                    {/* <LineChart/> */}
                </div>
      </div>
    </div>
  );
}

export default Dashboard;
