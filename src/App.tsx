import {BrowserRouter as Router} from "react-router-dom";
import {Box} from "@mui/material";
import AppRouter from "./AppRouter";
import './App.scss';
import Header from "./components/Header";
import {storeSessionData} from "./utils/storage";
// import ScrollToTop from "components/ScrollToTop";


const App = () => {
    storeSessionData('gh_accessToken', 'TESTTTS');
    return (
        <div className="App">
            <Box sx={{mt: 9}}>
                <Router>
                    {/*<ScrollToTop/>*/}
                    <Header/>
                    <AppRouter/>
                </Router>
            </Box>
        </div>
    )
};

export default App;
