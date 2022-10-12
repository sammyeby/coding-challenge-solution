import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from "@emotion/styled";

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  z-index: 4;
  opacity: .5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
    <StyledLoader>
        <ScaleLoader
            // size={150}
            color={'rgb(223, 0, 0)'}
            loading={true}
        />
    </StyledLoader>
);


export default Loading;