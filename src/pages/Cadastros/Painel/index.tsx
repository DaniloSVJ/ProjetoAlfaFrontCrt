import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Body } from './styles'
import imgUsuario from '../../../image/adduser.png';
import imgFormaPagamento from '../../../image/FormaPagamento.png';
import imgGrupoProduto from '../../../image/grupoProduto.png';
import imgCliente from '../../../image/Client.png';
import imgProduto from '../../../image/produtos.png';
import imgVendedor from '../../../image/crachar.png';
import Menu from '../../../components/menu'

import enfeite from '../../image/melhores-tecnologias.svg';

import logomarca from '../../image/logomarca.png';
import { Link } from 'react-router-dom';

const Painel: React.FC = () => {

    const cartoes = [
        {
            href: "/usuario",
            src: imgUsuario,
            altimg: "Cadastros",
            p: "Usuarios"
        },
        {
            href: "/formapagamento",
            src: imgFormaPagamento,
            altimg: "Forma Pagamento",
            p: "Formas de Pagamentos"
        },
        {
            href: "/cadastro",
            src: imgCliente,
            altimg: "Clientes",
            p: "Clientes"
        },
        {
            href: "/cadastroprodutos",
            src: imgProduto,
            altimg: "Produtos",
            p: "Produtos"
        },
        {
            href: "/grupoProduto",
            src: imgGrupoProduto,
            altimg: "grupoProduto",
            p: "Grupo Produtos"
        },
        {
            href: "/vendedor",
            src: imgVendedor,
            altimg: "vendedor",
            p: "Vendedor"
        },

    ]

    return (
        <Body>

            <Menu />


            <main>
                <p id="apontamento">
                    Selecione uma opção abaixo:
                </p>
                <section className="cards">
                    {cartoes.map(cartao => (
                        <Link id="linkCard" to={cartao.href}>
                            <div className="card">
                                <div className="image">
                                    <img src={cartao.src} alt={cartao.altimg} />
                                </div>
                                <div className="content">
                                    <p className="title text--medium">{cartao.p}</p>

                                </div>
                            </div>
                        </Link>
                    ))}


                </section>

            </main>
            <script src="./scripts.js"></script>
        </Body>
    )
}
export default Painel

