import React, { ClipLoader } from "react-spinners";
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
`;

const Spinner = () => {
    return (
        <SpinnerContainer>
            <ClipLoader
                color={'#484848'}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </SpinnerContainer>
    )
}

export default Spinner;