import { Component } from "solid-js";
import Nav from "../components/Nav";

interface MainLayoutProps {
    children: any;
}

const MainLayout:Component<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Nav />
            <div class="w-full">
                {children}
            </div>
        </>
    )
}

export default MainLayout;