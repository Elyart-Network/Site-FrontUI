import {Route, Router, Routes} from "@solidjs/router";
import HomeRoute from "./home";

export default function PageRoutes() {
    return (
        <Router>
            <HomeRoute />
        </Router>
  );
}