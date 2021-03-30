import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-conten: space-between;
    font-family: Arial, helvetica, sans-serif;
    padding: 20px;
    border-bottom: 1px solid lightblue;

    div {
        flex: 1;
    }

    .information, 
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 120px;
        object-fit: cover;
        margin-left: 40px;
    }
`;