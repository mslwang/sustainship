import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

import "./Donut.css";

function Donut() {
  return (
    <div>
      <div className="donut-graphs">
        <div>
          <div className="donut1-item html">
            <h2>84%</h2>
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <g>
                <title>Layer 1</title>
                <circle
                  id="donut1-circle"
                  className="donut1_circle_animation"
                  r="69.85699"
                  cy="100"
                  cx="100"
                  strokeWidth="30"
                  stroke="#98AF24"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </div>
        <h2 className="donut-description">
          <b>84% </b>of consumers are more satisfied with your branches increased
          Sustainability Choices
        </h2>
      </div>
      <div className="donut-graphs">
        <div className="donut2-item html">
          <h2>61%</h2>
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>
              {/* <title>Layer 1</title> */}
              <circle
                id="donut2-circle"
                className="donut2_circle_animation"
                r="69.85699"
                cy="100"
                cx="100"
                strokeWidth="30"
                stroke="#45ad9f"
                fill="none"
              />
            </g>
          </svg>
        </div>
        <h2 className="donut-description">As of today, Amazon has reduced its carbon footprint by <b>61%</b>.</h2>
      </div>
      <div className="donut-graphs">
        <div className="donut3-item html">
          <h2>90%</h2>
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle
                id="donut3-circle"
                className="donut3_circle_animation"
                r="69.85699"
                cy="100"
                cx="100"
                strokeWidth="30"
                stroke="#FFC71C"
                fill="none"
              />
            </g>
          </svg>
        </div>
        <h2 className="donut-description">
          As of today, <b>90% </b> of Amazon’s customers have continued using
          Sustainship for all future orders.
        </h2>
      </div>
    </div>
  );
}

export default Donut;
