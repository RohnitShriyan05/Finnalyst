"use client"
import { useEffect } from "react";
import Axios from "axios";
import Chart from "react-google-charts";
export const data = [
    ["day", "a", "b", "c", "d"],
    ["Mon", 1, 10, 30  , 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 50, 77, 66, 77],
    ["Fri", 15, 66, 22, 68],
  ];
  
  export const options = {
    legend: "none",
  };
  
export function HomePg() {
    useEffect(() => {
        Axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=5min&apikey=7MD0IF5H889QIZ0C')
            .then((res) => {
                console.log(res.data);
            })
    }, []);
    return (
        <div className="fixed h-full w-full text-black text-3xl flex items-center justify-center">
            <div className="w-1/2 h-full bg-white">
                <Chart
                    chartType="CandlestickChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
            <div className="w-1/2 h-full flex flex-col ">
                <p>NEWS TODAY</p>
            </div>
        </div>
    );
}