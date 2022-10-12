import { Box, Avatar, Typography } from "@mui/material";

interface CommentProps {
    authorAvatarUrl: string;
    username: string;
    createdAt: string;
    body: string
}

const Comment = ({ username, createdAt, body, authorAvatarUrl }: CommentProps) => {
    const createdDate = new Date(createdAt);
    return (
        <Box sx={{display: 'flex', mb: 2}}>
            <Avatar src={authorAvatarUrl} />
            <Box sx={{ml: 2, border: 'solid 1px #d8dee4', borderRadius: '4px', width: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f6f8fa',
                    borderBottom: '1px solid #d8dee4',
                    padding: '5px 10px'
                }}>
                    <Typography variant="subtitle2">{username}</Typography>
                    <Typography variant="body2" sx={{ ml: 1}}>commented on {createdDate.toDateString()}</Typography>
                </Box>
                <div style={{ padding: '10px'}} dangerouslySetInnerHTML={{__html: body}} />
            </Box>
        </Box>
    )
};

export default Comment;