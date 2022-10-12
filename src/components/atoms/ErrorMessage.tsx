import { Typography } from "@mui/material";

interface ErrorMessageProps {
    message: string;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px'
    }}>
        <Typography variant="h5" sx={{color: 'rgb(223, 0, 0)'}}>
            {message}
        </Typography>
    </div>
);

export default ErrorMessage;