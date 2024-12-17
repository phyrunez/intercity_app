import Footer from "./Footer"
import Header from "./Header"

type Props = {
    children: JSX.Element
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout