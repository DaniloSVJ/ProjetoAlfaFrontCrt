import styled from 'styled-components'


export const Div = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
  *:focus {
    outline: none;
  }
  
  html,
  body {
    height: 100vh;
    font-family: "Source Sans Pro";
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font-family:Arial, Helvetica, sans-serif;
  }
  
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
 
    width: 100%;
    height: 100%;
    
    border-radius: 2px;
   
    padding:15px;
   
    #conteudo{
        display:flex;
        flex-direction:column;
        justify-content:center;
        
    }
   
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        
    }
    .checbox{
        margin-left: 10px;
    }
    
    background-color: rgb(248,245,252);

    .titulo{
        //font-style: italic;
        font-weight:bold;
    }

 
`
