import { Component } from "solid-js";
import Nav from "../components/Nav";

interface MainLayoutProps {
    children: any;
}

const MainLayout:Component<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default MainLayout;