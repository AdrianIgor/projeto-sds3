import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

const Rou = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>  
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rou;