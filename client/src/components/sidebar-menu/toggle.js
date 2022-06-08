import { useToggleUpdate } from "./toggleContext"

export default function Toggle() {
    // const toggleState = useToggle()
    const toggleSidebar = useToggleUpdate()

    return (
        <button className="menu-toggle" onClick={toggleSidebar}>
            <i className="bi bi-list toggle"></i>
        </button >
    )
}

    // import $ from 'jquery';

    // const body = document.querySelector('body'),
    //     sidebar = body.querySelector('nav'),
    //     toggleS = body.querySelector('button'),
    //     schoolName = body.querySelector('schoolname'),
    //     menuBar = body.querySelector('nav-link');

    // // To add active class to menu items
    // $(document).ready(function () {
    //     $("a[href*='" + location.pathname + "']").addClass("active");
    // });

    // toggle.addEventListener("click", () => {
    //     sidebar.classList.toggleS("close");
    // })

    // menuBar.addEventListener("click", () => {
    //     sidebar.classList.toggleS("active");
    // })

    // schoolName.addEventListener("click", () => {
    //     sidebar.classList.remove("close");
    // })