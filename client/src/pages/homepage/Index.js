import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ArrowUpButton from "./components/ArrowUpButton/ArrowUpButton"
import Sidebar from "./sidebar/Index"

const Index = () => {
    return (
        <div className="homepage">
            <Header />
            <Navbar />
            <Sidebar />
            <Body />
            <ArrowUpButton />
            <Footer />
        </div>
    )
}

export default Index