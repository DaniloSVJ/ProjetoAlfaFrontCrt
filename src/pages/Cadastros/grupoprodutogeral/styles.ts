import styled from 'styled-components'


export const ContainerImg = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
 img{
        margin: 10px;
        width: 50px;
    }
`;
export const Container = styled.div`
  height: 100vh;
  height:100%;
  display: flex;
  align-items: stretch;
`;

export const Content= styled.div`
  
    display:flex;
    flex-direction: column;
    font-size: 15px;
    font-family: Arial, sans-serif;
    align-items:center;
    
    fieldset{
        border-radius: 4px;
        padding-right: 30px;
    }

    fieldset input{
        display:flex;
        flex-direction: column; 
    }
    .dadosinicio{
        width:100%;
    }
    input{
        margin: 4px;
    }

    #valores{
        display:flex;
        flex-direction: row;
       
    }
    #estoque {
        display:flex;
        flex-direction: row;
        width:25%;
    }
    #iptesquerda {
        margin-left: 15px;
    }

    #descricao{
        display:flex;
        flex-direction: column; 
    }

    textarea{
        margin-top: 10px
    }
    #divButton{
        display:flex;
        flex-direction:column;
        align-items: flex-end;
    }
    button{
        padding:15px;
        background-color: #7159C1;
        color: #fff;
        border: none;
        border-radius: 4px;
        margin-top:10px;
           
    }
    button:hover{
        background-color: #836FFF;
        color: #fff;
        cursor:pointer;
    }    
` 

export const AreaTabela = styled.div`
  margin: 7px;
  width: 100%;
  height: 100%;

  table{
      width:100%;
  }
  
`