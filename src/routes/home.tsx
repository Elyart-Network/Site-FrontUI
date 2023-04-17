import {Route, Routes} from "@solidjs/router";
import Home from "../compoments/Home";
import Header from "../compoments/header";
import Footer from "../compoments/footer";

export default function HomeRoute() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/app" component={Home} />
            </Routes>
            <Footer />
        </>
    )
}