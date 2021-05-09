// import './Donut.css'
import {useState, useEffect, useRef} from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts'
import Chart from "react-google-charts";
function LineChart() {
    const data = [
        ['x', 'Carbon Dioxide'],
        [2021, 51.7],
        [2022, 50],
        [2023, 48],
        [2024, 45],
        [2025, 40],
        [2026, 39],
        [2027, 31],
        [2028, 27],
        [2029, 23],
        [2030, 20],
        [2031, 20],
    ]
    return (
        <>
            <Chart
                width={'80vw'}
                height={'60vh'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Amazon\'s Carbon Footprint (2021-2031)',
                    hAxis: {
                    title: 'Year',
                    },
                    vAxis: {
                    title: 'Carbon Footprint (million)',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </>
    );
}

export default LineChart;
