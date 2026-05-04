import { Outlet } from "react-router";
import Menu from "../components/Menu";

function Layout(){
    return (
    <>
        <aside>
            <Menu />
        </aside>
        <main>{/* minhas paginas*/}
            <Outlet /> {/* traz as páginas */}
        </main>
    </>
    )
}

export default Layout;