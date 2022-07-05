import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ArrowUpButton from "./components/ArrowUpButton"
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