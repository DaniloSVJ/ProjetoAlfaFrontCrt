import React,{useState,useEffect,useCallback}  from 'react';
import {Content,ContainerImg} from './styles';
import Menu from '../../../components/menu';
import Table from '../../../components/tabela';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="home" title="Cadastrar Produtos">
                <div className="tab-item-wrapper">
                    <Content>
                        <div>
                            <form >
                                <fieldset id="legendCodigo">
                                <legend  >Código Produto</legend>
                                    <input onChange={e=>setCodigoP(e.target.value)} className="dadosinicio" type="text"/>
                                </fieldset>
                                <fieldset>
                                <legend>Nome Produto</legend>
                                    <input onChange={e=>setNomeP(e.target.value)} className="dadosinicio" type="text"/>
                                </fieldset>
                                <fieldset >
                                <legend>Demais Informações Produto</legend>
                                    <div id="descricao">
                                        
                                    </div >
                                    <div id="valores">
                                        <div>
                                            <input onChange={e=>setGrupoP(e.target.value)}  type="text" placeholder="grupo produto"/>    
                                        </div>
                                        <div id="iptesquerda">
                                            <input onChange={e=>setCustoP(Number(e.target.value))} type="number" placeholder="R$ Custo"/>
                                        </div>
                                        <div id="iptesquerda">
                                            <input type="number" onChange={e=>setValorP(Number(e.target.value))} placeholder="R$ Valor Venda"/>
                                        </div>
                                    </div>
                                    <div id="estoque">
                                        <div >
                                            <input type="number" onChange={e=>setQtdP(Number(e.target.value))} placeholder="Quantidade"/>
                                        </div>
                                        <div id="iptesquerda">
                                            <input type="number" onChange={e=>setEstMin(Number(e.target.value))} placeholder="Est. Mín."/>
                                        </div>
                                        <div id="iptesquerda">
                                            <input type="number" onChange={e=>setEstMax(Number(e.target.value))} placeholder="Est. Máx."/>
                                        </div>
                                    </div>
                                    <div id="descricao">
                                        <textarea onChange={e=>setDescricaoP(e.target.value)}   placeholder="Descrição Minima"/>
                                        <textarea  onChange={e=>setDescricaoPg(e.target.value)}  placeholder="Descrição Geral"/>
                                    </div>
                                    <div id="divButton"><button type="button" onClick={cadastrar} >Cadastrar</button></div>
                                </fieldset>
                                
                            </form>
                        </div>
                    </Content>
                </div>
                
                
              </Tab>

              <Tab eventKey="profile" title="Dados Cadastrados">
                <div className="tab-item-wrapper">
                
                  <div id="divTable">
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
                </div>
              </Tab>

             
            </Tabs>
   
            
        </>
    )

}

export default CadastProduto