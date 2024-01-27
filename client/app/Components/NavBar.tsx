import { RiAccountCircleFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
export function NavBar() {
    return (
        <nav className="w-screen h-max absolute z-40 bg-white text-black relative">
            <ul className="w-full h-max flex items-center justify-center px-20 pt-4">
                <li className="text-xl font-semibold pr-10 logofont">FINNALYST</li>
                <li className="px-8 flex flex-col group relative ">
                    <button className="group-hover:border px-2 py-1 border-neutral-500 rounded-md">Markets</button>
                    <div className="transition ease-in-out duration-300 hidden group-hover:block opacity-0 group-hover:opacity-100  absolute top-full w-max">
                        <ul className=" mt-2 py-4 px-4 bg-neutral-800 text-white rounded-md text-sm flex">
                            <div className="w-max">
                                <li className="pb-2 font-semibold">MARKETS TODAY</li>
                                <li className="">Top Gainers & Losers</li>
                                <li className="pt-1">Research Reports</li>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">PERFORMANCE</li>
                                <li className="">Industries</li>
                                <li className="pt-1">Sectors</li>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">ANALYTICS</li>
                                <li className="">Buy/Sell Zones</li>
                                <li className="pt-1">Best Performers</li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="pr-8 flex flex-col group relative ">
                    <button className="group-hover:border px-2 py-1 border-neutral-500 rounded-md">IPO</button>
                    <div className="transition ease-in-out duration-300 hidden group-hover:block opacity-0 group-hover:opacity-100  absolute top-full w-max">

                        <ul className=" mt-2 py-4 px-4 bg-neutral-800 text-white rounded-md text-sm flex">
                            <div className="w-max">
                                <li className="pb-2 font-semibold">UPCOMMING</li>
                                <li className="">IPO Coming Soon</li>
                                <li className="pt-1">New IPO</li>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">ANALYSIS</li>
                                <li className="">IPO Reports</li>
                                <li className="pt-1">Buy / Sell Calls</li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className=" flex flex-col group relative ">
                    <button className="group-hover:border px-2 py-1 border-neutral-500 rounded-md">Mutual Funds</button>
                    <div className="transition ease-in-out duration-300 hidden group-hover:block opacity-0 group-hover:opacity-100  absolute top-full w-max">

                        <ul className=" mt-2 py-4 px-4 bg-neutral-800 text-white rounded-md text-sm flex">
                            <div className="w-max">
                                <li className="pb-2 font-semibold">BY SIZE</li>
                                <div className="flex">
                                    <li className="">Small Cap</li>
                                    <li className="pl-5">Mid Cap</li>
                                </div>
                                <div className="flex pt-1">
                                    <li className="">Large Cap</li>
                                    <li className="pl-5">Other</li>
                                </div>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">BY RISK</li>
                                <li className="">High Risk</li>
                                <li className="pt-1">Low Risk</li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="px-8 flex flex-col group relative ">
                    <button className="group-hover:border px-2 py-1 border-neutral-500 rounded-md">Finnancial Results</button>
                    <div className="transition ease-in-out duration-300 hidden group-hover:block opacity-0  group-hover:opacity-100  absolute top-full w-max">
                        <ul className=" mt-2 py-4 px-4 bg-neutral-800 text-white rounded-md text-sm flex">
                            <div className="w-max">
                                <li className="pb-2 font-semibold">UPCOMMING RESULTS</li>
                                <li className="pb-1">Quaterly Results</li>
                                <li>Annual Results</li>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">ALL RESULTS</li>
                                <li className="">Quaterly Results</li>
                                <li className="pt-1">Annual Results</li>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">ANALYSIS</li>
                                <li className="">Revenue Jumps</li>
                                <li className="pt-1">Revenue Forecasting</li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li>News & Insider Trades</li>
                <li className="px-8">Watchlist</li>
                <li className=" flex flex-col group relative ">
                    <button className="group-hover:border px-2 py-1 border-neutral-500 rounded-md">Filters</button>
                    <div className="transition ease-in-out duration-300 hidden group-hover:block opacity-0  group-hover:opacity-100  absolute top-full w-max">

                        <ul className=" mt-2 py-4 px-4 bg-neutral-800 text-white rounded-md text-sm flex">
                            <div className="w-max">
                                <li className="pb-2 font-semibold">OUR FILTERS</li>
                                <div className="flex">
                                    <li className="">3 Stars Filter</li>
                                    <li className="pl-5">P/E Filter</li>
                                </div>
                                <div className="flex pt-1">
                                    <li className="">Fundamental Filter</li>
                                    <li className="pl-5">Other</li>
                                </div>
                            </div>
                            <li className="smallw h-20 mx-4"></li>
                            <div>
                                <li className="pb-2 font-semibold">PERSONAL FILTERS</li>
                                <li className="">Created by me</li>
                                <li className="pt-1">Create new filter</li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="flex-1"></li>
                <li className="w-max flex items-center border border-neutral-500 py-2 px-2 rounded-md text-black">
                    <IoSearch className="text-xl text-neutral-500"/>
                    <input className="flex-1 pl-2 placeholder-neutral-500" placeholder="Search for a stock, industry..."/>
                </li>
                <li className="text-4xl pl-8"><RiAccountCircleFill /></li>
            </ul>
        </nav>
    );
}