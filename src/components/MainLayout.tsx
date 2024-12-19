import CompareBus from './home/CompareBus'
import { FormEvent, useState } from "react"
import WindowImg from "../assets/window.png"
import Users from "../assets/Vector.png"
import VectorImg from "../assets/Vector (5).png"
import arrangeHorizontal from "../assets/arrangehorizontalcircle.png"
import TravelTips from './home/TravelTips'
import Footer from './Footer'
import toast from 'react-hot-toast'
import Header from './Header'
import fetchRidesData from '../services/getRides'

const MainLayout = () => {
    const [fromLocation, setFromLocation] = useState('')
    const [toLocation, setToLocation] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [rideInfo, setRideInfo] = useState({
        message: '',
        status_code: 200,
        data: [],
        errMessage: ''
    })
    const [ridesAreAvailable, setRidesAreAvailable] = useState(false)

    const API_URL = `https://sandbox.myt40.com/api/v1/retailer/connections/find`
    const TOKEN = "pk_$2y$10$GzjIderiZcRDLnqtwhCCZu.U1TlQ4S.PtZIxeNMLu/ywoYioDWEGS"

    const handleFromLocationChange = (e: any) => {
        setFromLocation(e.target.value)
    }

    const handleToLocationChange = (e: any) => {
        setToLocation(e.target.value)
    }

    const handleDepartureDateChange = (e: any) => {
        setDepartureDate(e.target.value)
    }

    const handleChangeLocation = () => {
        console.log("JUST CHECKING");
        setFromLocation(toLocation)
        setToLocation(fromLocation)
    }

    const handleGetRides = (e: FormEvent) => {
        e.preventDefault()
        console.log(fromLocation, toLocation, departureDate)

        if (!fromLocation || !toLocation || !departureDate) {
            toast.error("Kindly enter valid Locations and Departure Date")
            return
        }

        fetchRidesData(`${API_URL}?from_city=${fromLocation}&to_city=${toLocation}&departure_date=${departureDate}`, TOKEN)
            .then(data => {
                setRideInfo(data)
                setRidesAreAvailable(true)
                toast.success(data?.data.length + " " + data.message)
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.error("Error occurred:", error.message);
                    setRidesAreAvailable(false)
                    toast.error(error.message === 'failed to fetch' ? error.message + ": Kindly check that you are connected to the Internet" : error.message + " with different locations and a future date")
                }
            })
    }

    return (
        <>
            <Header />
            <div className="mx-[85px] w-full grid grid-cols-2 justify-between gap-x-48 my-8">
                <div>
                    <h1 className="font-mulish font-bold text-5xl w-[450px] word-spacing-[0.5rem]">
                        Buy <span className="text-indigo">cheap</span><br /> bus tickets online in Nigeria
                    </h1>

                    <p className="pt-11 font-mulish text-sm text-[#6B7280]">
                        Book bus tickets for all interstate <br /> travels in Nigeria
                    </p>
                </div>
                <div className="border bg-blue rounded-2xl w-[500px] border-[#e5e7eb]">
                    <div className="bg-blue rounded-t-2xl border-0 text-white w-full text-center py-4 font-mulish ">
                        <div className="flex gap-3 justify-center">
                            <img src={WindowImg} alt="window" width='18px' height="5px" />
                            <p>Buy tickets</p>
                        </div>
                        <div className="justify-center flex pt-2"><hr className="w-[21%] border-[#6B7280]" /></div>
                    </div>

                    <div className="bg-white border border-[#e5e7eb] rounded-2xl py-5">
                        <div className="flex gap-4 relative">

                            <div className="w-[50%] relative ml-8 justify-center font-mulish text-sm border-0">
                                <img src={Users} alt="" className="absolute top-[6px]" />
                                <select className="block w-full border-0 px-[13px] py-[2px] right-[10px] appearance-none outline-none cursor-pointer left-36">
                                    <option>1 Passenger</option>
                                    <option>2 Passengers</option>
                                    <option>3 Passengers</option>
                                </select>
                                <img src={VectorImg} alt="" width="8px" className=" absolute bottom-[8px] h-[6px] left-[100px]" />

                            </div>

                        </div>

                        <form className="bg-[#ffffff]">
                            <div className="w-[85%] mx-auto border-gray-900/10 pb-8 font-mulish">
                                <div className="mt-10 grid grid-cols-3 gap-x-2  w-full">
                                    <div className="">
                                        <label className="block text-sm/6 font-medium text-gray-900">From</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={fromLocation}
                                                className="block w-[200px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleFromLocationChange}
                                            />
                                        </div>
                                    </div>

                                    <img src={arrangeHorizontal} alt="" className="mt-10 ml-16 cursor-pointer" onClick={handleChangeLocation} />

                                    <div className="-ml-[50px]">
                                        <label className="block text-sm/6 font-medium text-gray-900">To</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={toLocation}
                                                className="block w-[200px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleToLocationChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4 w-full mt-4">
                                        <label className="block text-sm/6 font-medium text-gray-900">Departure date</label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                value={departureDate}
                                                className="block w-[430px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleDepartureDateChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-2 flex items-center justify-center gap-x-6 ml-16 w-[81%]">
                                <button
                                    type="button"
                                    className="text-sm/6 font-sm font-mulish w-full py-3 border rounded-xl bg-[#102751] text-white"
                                    onClick={handleGetRides}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <CompareBus rideInfo={rideInfo} ridesAreAvailable={ridesAreAvailable} />
            <TravelTips />
            <Footer />
        </>
    )
}

export default MainLayout