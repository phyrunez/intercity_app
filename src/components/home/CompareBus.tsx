// import { useState } from 'react'
import Clock from '../../assets/clock.png'
import LinkImg from '../../assets/link.png'
// import toast from 'react-hot-toast'

interface data {
    ride_meta: {
        brand: {
            brand_name: string
        },
        ride_departure_location: {
            city: {
                name: string
            }
        },
        ride_destination: {
            amount: number
            location: {
                city: {
                    name: string
                }
            }
        },
        currency: {
            symbol: string
        },
        departure_time: string
    }
}

type Ride = {
    message: string,
    status_code: Number,
    data: data[],
    errMessage: string
}

type Props = {
    rideInfo: Ride
    ridesAreAvailable: boolean
}

const convertToAMPM = (time: any) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    let period = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes}${period}`;
}

const CompareBus = ({ rideInfo, ridesAreAvailable }: Props) => {
    console.log("Rides", rideInfo)


    return (
        <div className="lg:mx-[85px] md:mx-[35px] mx-auto lg:w-full md:w-[100%] w-[90%] my-24 font-mulish">
            <div className="w-[270px] py-10">
                <p className="text-[#050d1b] font-bold text-xl mb-2">Compare bus operators travelling from City to City</p>
                <span className="text-gray500 text-[11px]">
                    For bookings, easily compare schedules <br /> bus operators, and pricing
                </span>
            </div>
            <div className={`border rounded-lg lg:w-[89%] md:w-[89%] w-full py-16 px-16 ${ridesAreAvailable && 'h-[500px] overflow-y-scroll'}`}>
                {ridesAreAvailable ? (
                    rideInfo?.data.map(d => {
                        return (
                            <div className="shadow-md px-5 py-10 my-8 border rounded-md text-center ">
                                <h2 className='lg:text-start px-24 pb-10 text-center'>{d.ride_meta.brand.brand_name}</h2>
                                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:space-x-24 md:space-x-15 lg:space-y-0 space-y-5 justify-center items-center'>
                                    <div className='text-center'>
                                        <p>{d?.ride_meta?.ride_departure_location?.city?.name}</p>
                                    </div>
                                    <div className=''><img src={LinkImg} alt="" className='mt-[5px] lg:w-full md:w-full w-[50%] lg:mx-0 mx-auto' /></div>
                                    <div className='lg:pl-20 pl-0 text-center'><span className='mb-10'>{d?.ride_meta?.ride_destination?.location?.city?.name}</span></div>
                                    <div className='flex gap-1 lg:pl-20 pl-0 justify-center text-center'>
                                        <img src={Clock} alt="" className='lg:w-[10px] lg:h-[10px] md:w-[10px] md:h-[10px] w-[10px] h-[10px] mt-[5px]' />
                                        <span className='text-[11px] mt-[2.5px]'>{convertToAMPM(d?.ride_meta?.departure_time)}</span>
                                    </div>
                                    <div className='text-[#f2761b]'>
                                        {d?.ride_meta?.currency?.symbol}{d?.ride_meta?.ride_destination?.amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className='text-center justify-center mx-auto lg:w-[50%] md:w-[50%] w-[70%]'>
                        <h3 className='lg:text-2xl md:text-xl text-lg'>No Rides Found!!!</h3>
                        <p className='lg:text-xl md:text-lg text-sm'>We could not find available rides for your search. Kindly tell us your location and destination with a future date.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CompareBus