import React, {
    FormEvent,
    useState,
    useEffect,
    useCallback,
    useRef,
} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import api from '../../../services/api'
import Table from '../../../components/tabela/index'

import { Div } from './styles'
import imgFormaPagamento from '../../../image/formaPagaEdit.png'
import Menu from '../../../components/menu'

const Cadastro: React.FC = () => {
    const [rdDinheiro, setRdDinheiro] = useState(false)
    const [rdCartaoCredito, setRdCartaoCredito] = useState(false)
    const [rdCartaoDebito, setRdCartaoDebito] = useState(false)
    const [rdPix, setRdPix] = useState(false)
    const [rdCheque, setRdCheque] = useState(false)
    const [inputOutro, setInputOutro] = useState('')


    useEffect(() => {



    }, [rdCartaoCredito]);

    const cadastrar = useCallback(() => {

        async function cadastra(): Promise<void> {
            if (rdDinheiro === true) {
                await api.post('formapagamento', {
                    nome: 'Dinheiro'
                })
            }
            if (rdCartaoCredito === true) {
                await api.post('formapagamento', {
                    nome: 'Cartão de Crédito'
                })
            }
            if (rdCartaoDebito === true) {
                await api.post('formapagamento', {
                    nome: 'Cartão de Débito'
                })
            }
            if (rdPix === true) {
                await api.post('formapagamento', {
                    nome: 'Pix'
                })
            }
            if (rdCheque === true) {
                await api.post('formapagamento', {
                    nome: 'Cheque'
                })
            }
            if (inputOutro !== "") {
                await await api.post('formapagamento', {
                    nome: inputOutro
                })
            }
        }
        cadastra()

        console.log("vai")

    }, [rdCartaoCredito, rdCartaoDebito, rdCheque, rdPix, rdDinheiro, inputOutro])
    return (
        <>
            <Menu />
            <Div id="login-box">

                <form >
                    <div id="conteudo">
                        <div><img src={imgFormaPagamento} alt="Forma de Pagamento" /></div>

                        <div>


                            <fieldset>
                                <legend className="titulo">Selecione a(s) forma(s) de pagamento(s)</legend>
                                <label htmlFor="dinheiro">
                                    <input onChange={e => setRdDinheiro(e.target.checked)} type="checkbox" name="dinheiro" alt="dinheiro" />Dinheiro</label>

                                <input onChange={e => setRdCartaoCredito(e.target.checked)} className="checbox" type="checkbox" name="cartaocredito" />
                                <label htmlFor="cartaocredito">Cartao de Crédito</label>

                                <input onChange={e => setRdCartaoDebito(e.target.checked)} className="checbox" type="checkbox" name="cartaodebito" />
                                <label htmlFor="cartaodebito">Cartao de Dédito</label>

                                <input onChange={e => setRdPix(e.target.checked)} className="checbox" type="checkbox" name="pix" />
                                <label htmlFor="pix">Pix</label>

                                <input onChange={e => setRdCheque(e.target.checked)} className="checbox" type="checkbox" name="cheque" />
                                <label htmlFor="cheque">Cheque</label>


                            </fieldset>
                            <fieldset>
                                <legend className="titulo">Ou cadastre</legend>
                                <input type="text" onChange={e => setInputOutro(e.target.value)} />
                                <p><button onClick={cadastrar} type="button">Salvar</button> </p>
                            </fieldset>
                        </div>


                        <fieldset>
                            <legend className="titulo">Formas de pagamentos Cadastradas</legend>
                            <Table>
                                <tr>
                                    <th>id</th>
                                    <th>Forma Pagamentos</th>

                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>

                                </tr>
                                <tr>
                                    <td>Eve</td>
                                    <td>Jackson</td>

                                </tr>
                                <tr>
                                    <td>Adam</td>
                                    <td>Johnson</td>

                                </tr>

                            </Table>

                            <button>Remover</button>
                        </fieldset>
                    </div>
                </form>


            </Div>
        </>
    )
}

export default Cadastro