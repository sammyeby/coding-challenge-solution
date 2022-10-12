import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MediaMarktLogo } from 'assets/images/Media_Markt_logo.svg';


const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <AppBar component="header" style={{backgroundColor: 'rgb(223, 0, 0)'}}>
            <Toolbar className="inner-content">
                <MediaMarktLogo height={55} width={168} onClick={goToHome} style={{cursor: 'pointer'}} />
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