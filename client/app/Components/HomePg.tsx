import { useEffect } from "react";
import {axios} from axios;

export function HomePg() {
    useEffect(()=>{
        axios.get("https://api.upstox.com/v2/historical-candle/:instrument_key/:interval/:to_date/:from_date")
    },[]);
    return (
        <div className="fixed h-full w-full text-black text-3xl flex items-center justify-center">
            <div className="w-1/2 h-full bg-white">
                
            </div>
            <div className="w-1/2 h-full flex flex-col ">
                <p>NEWS TODAY</p>
            </div>
        </div>
    );
}