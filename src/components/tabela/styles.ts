import styled, { css } from 'styled-components';


interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div`
  table, th, td {
  border: 1px solid black;

}
tr:hover{
  background-color:blue;
}
th{
  background-color: white;
}
`;