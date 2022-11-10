import styled from 'styled-components';

type containerProps = {
    showBackground: boolean;
}

export const Container = styled.div<containerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;

type iconProps = {
    opacity? : number;
}

export const Icon = styled.img<iconProps>`
    width: 50px;
    height: 50px;
    opacity: ${props => props.opacity ?? 1}

`