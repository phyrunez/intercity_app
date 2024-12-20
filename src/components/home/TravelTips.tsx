
const TravelTips = () => {
    return (
        <div className="lg:mx-[85px] md:mx-[35px] mx-auto lg:w-full md:w-full w-[90%] my-10 font-mulish">
            <h3 className="font-bold text-xl">Travel Tips</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:w-[78%] md:w-[70%] w-[100%] my-8 lg:gap-16 md:gap-16 gap-5">
                <div className="bg-blue50 p-5 border border-none  rounded-lg">
                    <span className="bg-blue800 border border-none rounded-[100%] px-2 py-1"><span className="text-white">1</span></span>
                    <h3 className="text-blue800 py-4 text-sm font-bold">Travel with our verified operators</h3>
                    <p className="text-blue800 text-[11px] lg:w-[210px] md:w-[180px] w-[150px]">
                        Avoid travelling with unregistered buses called “Sole”. Travel with our verified operators instead.
                    </p>
                </div>
                <div className="bg-indigo50 p-5 border border-none rounded-lg">
                    <span className="bg-indigo700 border border-none rounded-[100%] px-2 py-1"><span className="text-white">2</span></span>
                    <h3 className="text-indigo700 py-4 text-sm font-bold">Inform your loved ones</h3>
                    <p className="text-indigo700 text-[11px] lg:w-[210px] md:w-[180px] w-[140px]">
                        Inform your loved ones about your trip and keep them updated on your journey.
                    </p>
                </div>
                <div className="bg-yellow50 p-5 border border-none rounded-lg">
                    <span className="bg-yellow600 border border-none rounded-[100%] px-2 py-1"><span className="text-white">3</span></span>
                    <h3 className="text-yellow600 py-4 text-sm font-bold">Avoid late night travels</h3>
                    <p className="text-yellow600 text-[11px] lg:w-[210px] md:w-[180px] w-[140px]">
                        Avoid travelling at night as much as possible. Road trips during the night are not advisable due to the heightened nationwide insecurity.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TravelTips