import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledIssueItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  justify-content: center;
  &:hover {
    background-color: #f6f8fa;
  }
`;

interface IssueItemProps {
    title: string;
    createdAt?: string;
    body: string;
    onClickFn: () => void;
}

const IssueItem = ({ title, body, onClickFn }: IssueItemProps) => (
    <StyledIssueItem onClick={onClickFn} role="listitem">
        <Typography variant="subtitle2" gutterBottom>
            {title}
        </Typography>
        <Typography
            variant="body2"
            sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                color: 'rgba(0, 0, 0, .7)'
            }}
        >
            {body}
        </Typography>
    </StyledIssueItem>
);

export default IssueItem;