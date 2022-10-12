import { Button } from "@mui/material";
import styled from "@emotion/styled";


const StyledButton = styled(Button)`
  background-color: rgb(223, 0, 0);
  color: #fff;
  &.secondary {
    background-color: #fff;
    border: 1px solid rgba(223, 0, 0, 0.5);
    color: rgb(223, 0, 0);
    &:hover {
      background-color: #fff;
    }
  }
  &:hover {
    background-color: rgb(223, 0, 0);
  }
`;

export default StyledButton;