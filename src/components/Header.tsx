import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <div className='border border-b-[#e5e7eb] border-t-0 border-x-0 py-5 px-12 w-screen'>
            <div className="flex space-x-3">
                <img src={Logo} alt="Logo" />
                <h4 className='font-mulish text-lg font-semibold'>intercity</h4>
            </div>
        </div>
    )
}

export default Header