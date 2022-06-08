import SidebarHeader from "./sidebar-header"
import SidebarItems from "./sidebar-items"
import { useToggle } from "./toggleContext"

const SidebarMenu = (ToggleProvider) => {
    const toggleState = useToggle()
    // const toggleSidebar = useToggleUpdate()

    // Style box-shadow: 5px 0px black inset

    return (
        <>
            {/* <ToggleProvider> */}
            <nav className={toggleState ? "sidebar close" : "sidebar"}>
                <SidebarHeader />
                <SidebarItems />
            </nav>
            {/* </ToggleProvider> */}
        </>
    )
}

export default SidebarMenu