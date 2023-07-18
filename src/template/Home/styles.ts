import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Poppins';
    font-size: 2rem;
    color: black;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary.main};
    align-items: center;
    justify-content: center;
`;
