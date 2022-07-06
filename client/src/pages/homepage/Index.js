import Header from "./Index/components/Header/Header"
import Body from "./Index/components/Body/Body"
import Footer from "./Index/components/Footer/Footer"
import Navbar from "./Index/components/Navbar/Navbar"
import ArrowUpButton from "./Index/components/ArrowUpButton/ArrowUpButton"
import Sidebar from "./Index/components/sidebar/Index"

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