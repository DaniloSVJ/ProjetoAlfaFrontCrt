import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../image/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  height:100%;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0,0,36);
  width: 100%;
  height:100%;
  max-width: 700px;

  @media (max-width: 727px) {
    width: 100%;
    
  }

`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
img{
      width: auto;
      height:auto;
      
      
    }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  animation: ${appearFromLeft} 1s;

  form {
    background-color: rgb(0,0,36);
    margin: 80px 0;
    width: 340px;
    text-align: center;
   
    height:100%;
    h1 {
      margin-bottom: 24px;
      color: #fff;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    
  }
  @media (max-width: 727px) {
    flex:1;
    form{
      margin: 0;
    }
    input{
      flex:1;
    }
    img{
      width: 65%;
      height:65%;
      
    }

    
  }
  @media (max-width: 485px) {
    flex:1;
    form{
      margin: 0;
    }
    form{
      width: 65%;
    }
    

    
  }
  @media (max-width: 361px) {
    
      width: 70%;
      svg {
      margin-right: 0px;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  margin: 7px;
  h1{
    flex:1;
    margin-top:20px;
    text-align:center;
    font-style: Arial;
    color:#000;
  }
  //opacity: 0.5;
  background:   url(${signInBackgroundImg}) no-repeat center  ;
  
  background-size: cover;
  @media (max-width: 727px) {
    div{
      display: none;
    }
    display: none;
    margin:0;
    flex:0;
    background-size: 0px;
    background: none;
    html{
      font-size: 0px;
    }
  }
`;
