import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <AppBar component="header" style={{backgroundColor: 'rgb(223, 0, 0)'}}>
            <Toolbar className="inner-content">
                <Typography
                    variant="h3"
                    style={{height: '55px', cursor: 'pointer'}}
                    onClick={goToHome}
                >
                    R-C
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, marginLeft: '10px' }}
                >
                    Coding Challenge
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
