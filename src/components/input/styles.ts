import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    border: 2px solid #fff;
    padding: 16px;
    color: #666360;
    width: 100%;
    display: flex;
    align-items: center;
    & + div {
        margin-top: 8px;
    }
    ${props =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}
    ${props =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}
        ${props =>
        props.isErrored &&
        css`
            color: #c53030;
            border-color: #c53030;
        `}
        
    input {
        flex: 1;
        background: transparent;
      
        border: 0;
        font-size:20px;
        color: rgb(0,0,36);
        &::placeholder {
            color: #666360;
        }
       
    }
    input:focus{
        outline: 0;
    }
    
   
    
    
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background: #fff;
        color: #fff;
        &::before {
            border-color: #fff transparent;
        }
    }
`;
