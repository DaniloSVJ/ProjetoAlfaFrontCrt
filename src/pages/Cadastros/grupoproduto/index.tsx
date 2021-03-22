import React,{useState,useEffect,useCallback}  from 'react';
import {Content,ContainerImg} from './styles';
import Menu from '../../../components/menu';
import Table from '../../../components/tabela';
import ImgProCad from '../../../image/produtoCadastro.png'
import api from '../../../services/api'
const CadastProduto: React.FC = () => {
    const [codigoP, setCodigoP] = useState('')
    const [nomeP, setNomeP] = useState('')
    const [grupoP, setGrupoP] = useState('')
    const [custoP, setCustoP] = useState(0)
    const [valorP, setValorP] = useState(0)
    const [estMin, setEstMin] = useState(0)
    const [estMax, setEstMax] = useState(0)
    const [descricaoP, setDescricaoP] = useState('')
    const [descricaoPg, setDescricaoPg] = useState('')
    const [qtdP, setQtdP] = useState(0)



    const cadastrar = useCallback(() => {

        async function cadastra(): Promise<void> {
            await await api.post('produto', {
                nome:nomeP,
                codigo:codigoP,
                custo:custoP,
                valor_venda:valorP,
                id_grupo:grupoP,
                estoqueMin:estMin,
                estoqueMax:estMax,
                embalagem:'',
                quantidade:qtdP,
                descricaoR:descricaoP,
                descricaoGeral:descricaoPg,

            })
        }
        cadastra()
        console.log(nomeP,
            codigoP,
            custoP,
            valorP,
            grupoP,
            estMin,
            estMax,
            '',
            qtdP,
            descricaoP,
        descricaoPg)
      

    }, [codigoP, custoP, descricaoP, descricaoPg, estMax, estMin, grupoP, nomeP, qtdP, valorP])
    return(
        <>
            <Menu />
            <ContainerImg>
                <img src={ImgProCad} />
            </ContainerImg>
                      
                <Content>
               
                <div>
                    <form >
                        <fieldset>
                        <legend>Nome Grupo</legend>
                            <input onChange={e=>setCodigoP(e.target.value)} className="dadosinicio" type="text"/>
                        </fieldset>
                        <fieldset>
                        <legend>Selecione o Grupo</legend>
                            <input onChange={e=>setNomeP(e.target.value)} className="dadosinicio" type="text"/>
                        
                     
                            <div id="divButton"><button type="button" onClick={cadastrar} >Cadastrar</button></div>
                        </fieldset>
                        
                    </form>
                    </div>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>nome</th>
                                    <th>descrição</th>
                                    <th>custo</th>
                                    <th>valor venda</th>
                                    <th>est min</th>
                                    <th>est max</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> dsd  </td>                             
                                    <td>  dfdfssssssssssssssssssssssss </td>   
                                    <td> dfdf  </td>   
                                    <td> dfdf  </td>   
                                    <td> dfdf  </td>   
                                    <td> dfdf  </td>   
                                    <td>  dfdf </td>   
                                </tr>
                            </tbody>                                
                            
                        </Table>

                    </div>
                    </Content>
                
            
        </>
    )

}

export default CadastProduto