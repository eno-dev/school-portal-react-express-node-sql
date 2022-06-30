import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ArrowUpButton from "./components/ArrowUpButton"

const Index = () => {
    return (
        <div className="homepage">
            <Header />
            <Navbar />
            <Body />
            <ArrowUpButton />
            <Footer />
        </div>
    )
}

export default Index