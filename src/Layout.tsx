import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="h-full pt-16">
                {children}
            </div>
        </>
    )
}

export default Layout