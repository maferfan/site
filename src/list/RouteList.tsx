import { About } from "../components/About"
import { Banner } from "../components/Banner"
import { Contact } from "../components/Contact"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Services } from "../components/Services"
import { Work } from "../components/Work"

export const List = () => {
    return (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header/>
            <Banner/>
            <Nav/>
            <About/>
            <Services/>
            <Work/>
            <Contact/>
        </div>
    )
}