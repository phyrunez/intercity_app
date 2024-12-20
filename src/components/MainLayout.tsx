import CompareBus from './home/CompareBus.tsx'
import { FormEvent, useState } from "react"
import WindowImg from "../assets/window.png"
import Users from "../assets/Vector.png"
import VectorImg from "../assets/Vector (5).png"
import arrangeHorizontal from "../assets/arrangehorizontalcircle.png"
import TravelTips from './home/TravelTips.tsx'
import Footer from './Footer'
import toast from 'react-hot-toast'
import Header from './Header'
import fetchRidesData from '../services/getRides.tsx'
import Spinner from './Spinner'

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
    const [btnLoadingState, setBtnLoadingState] = useState(true)

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

        setBtnLoadingState(false)

        fetchRidesData(`${API_URL}?from_city=${fromLocation}&to_city=${toLocation}&departure_date=${departureDate}`, TOKEN)
            .then(data => {
                setRideInfo(data)
                setRidesAreAvailable(true)
                toast.success(data?.data.length + " " + data.message)
                setBtnLoadingState(true)
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.error("Error occurred:", error.message);
                    setRidesAreAvailable(false)
                    toast.error(error.message === 'failed to fetch' ? error.message + ": Kindly check that you are connected to the Internet" : error.message + " with different locations and a future date")
                    setBtnLoadingState(true)
                }
            })

    }

    return (
        <div className='max-w-full overflow-hidden w-full'>
            <Header />
            <div className="lg:mx-[85px] md:mx-[20px] lg:w-[90%] w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-8 gap-y-8 justify-between lg:gap-x-64 md:gap-x-24 gap-x-12">
                <div className='lg:mx-[3px] md:mx-auto mx-auto xl:text-start lg:text-start md:text-center text-center'>
                    <h1 className="font-mulish font-bold lg:text-5xl md:text-5xl text-2xl lg:w-[450px] md:w-[450px] w-[350px] word-spacing-[0.5rem]">
                        Buy <span className="text-indigo">cheap</span><br /> bus tickets online in Nigeria
                    </h1>

                    <p className="pt-11 font-mulish text-sm text-[#6B7280]">
                        Book bus tickets for all interstate <br /> travels in Nigeria
                    </p>
                </div>
                <div className="border bg-blue rounded-2xl xl:w-[91%] lg:w-[100%] md:w-[70%] w-[90%] mx-auto border-[#e5e7eb]">
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

                        <form className="bg-[#ffffff] lg:mx-0 md:mx-0 mx-[2px]">
                            <div className="lg:w-[85%] w-full lg:mx-0 mx-auto border-gray-900/10 pb-8 font-mulish">
                                <div className="mt-10 grid grid-cols-3 lg:gap-x-2 gap-x-0 lg:mx-[30px] md:mx-[30px] mx-[10px] lg:w-full w-[90%]">
                                    <div className="">
                                        <label className="block text-sm/6 font-medium text-gray-900">From</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={fromLocation}
                                                className="block lg:w-[200px] md:w-[200px] w-[150px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleFromLocationChange}
                                            />
                                        </div>
                                    </div>

                                    <img src={arrangeHorizontal} alt="" className="mt-10 lg:ml-16 md:mx-16 mx-10 h-6 z-10 w-6 cursor-pointer" onClick={handleChangeLocation} />

                                    <div className="-ml-[50px]">
                                        <label className="block text-sm/6 font-medium text-gray-900">To</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={toLocation}
                                                className="block lg:w-[200px] md:w-[200px] w-[150px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleToLocationChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4 lg:w-full mt-4">
                                        <label className="block text-sm/6 font-medium text-gray-900">Departure date</label>
                                        <div className="mt-2 items-center justify-center">
                                            <input
                                                type="date"
                                                value={departureDate}
                                                className="block lg:w-[430px] md:w-[480px] w-[300px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                onChange={handleDepartureDateChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-2 flex items-center justify-center gap-x-6 lg:ml-16 mx-auto lg:w-[81%] w-[60%]">
                                <button
                                    type="button"
                                    className="text-sm/6 font-sm font-mulish w-full py-3 border rounded-xl bg-[#102751] text-white"
                                    onClick={handleGetRides}
                                >
                                    {!btnLoadingState ? <Spinner /> : "Submit"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <CompareBus rideInfo={rideInfo} ridesAreAvailable={ridesAreAvailable} />
            <TravelTips />
            <Footer />
        </div>
    )
}

export default MainLayout