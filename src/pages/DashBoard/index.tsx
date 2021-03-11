import React from 'react'
import { Body } from './styles'
import './responsive.css'
import {Link} from "react-router-dom"
import imgCadastro from '../../image/undraw_Preferences_re_49in.svg';
import imgCarrinho from '../../image/carrinho.svg';
import imgEstoque from '../../image/estoque.svg';
import imgCliente from '../../image/clientes.svg';
import imgProduto from '../../image/produto.svg';
import imgRelatorio from '../../image/relatorio.svg';
import Menu from '../../components/menu'

import enfeite from '../../image/melhores-tecnologias.jpg';

import logomarca from '../../image/logomarca.png';

const DashBoard: React.FC = () => {

    const cartoes = [
        {
            href: "/cadastro",
            src: imgCadastro,
            altimg: "Cadastros",
            p: "Telas de Cadastros"
        },
        {
            href: "/PDV",
            src: imgCarrinho,
            altimg: "PDV",
            p: "Fazer Vendas"
        },
        {
            href: "/cadastro",
            src: imgCliente,
            altimg: "Clientes",
            p: "Clientes Cadastrados"
        },
        {
            href: "/cadastro",
            src: imgProduto,
            altimg: "Produtos",
            p: "Produtos Cadastrados"
        },
        {
            href: "/cadastro",
            src: imgEstoque,
            altimg: "Estoque",
            p: "Gerencia de Estoque"
        },
        {
            href: "/cadastro",
            src: imgRelatorio,
            altimg: "relatorio",
            p: "Diversos Relatórios"
        },
        {
            href: "/cadastro",
            src: imgCadastro,
            altimg: "Cadastros",
            p: "Telas de Cadastros"
        },
        {
            href: "/PDV",
            src: imgCarrinho,
            altimg: "PDV",
            p: "Fazer Vendas"
        },
        {
            href: "/cadastro",
            src: imgCliente,
            altimg: "Clientes",
            p: "Clientes Cadastrados"
        },
        {
            href: "/cadastro",
            src: imgProduto,
            altimg: "Produtos",
            p: "Produtos Cadastrados"
        },
        {
            href: "/cadastro",
            src: imgEstoque,
            altimg: "Estoque",
            p: "Gerencia de Estoque"
        },
        {
            href: "/cadastro",
            src: imgRelatorio,
            altimg: "relatorio",
            p: "Diversos Relatórios"
        },


    ]

    return (
        <Body>

            <Menu />
            <section className="hero">
                <div className="container">

                    <div>
                        <h2>
                            A melhor tecnologia em sistema de automação comercial, direto ao ponto e do jeito
                            certo.
                         </h2>
                        <p>
                            Suporte Fortaleza:
                        </p>
                        <p>
                            (85)98220 5730
                            (85)98169 2891
                            (85)99695 5644
                            (85)98956 0209
                            (85)98601 8630
                        </p>
                        <p>
                            Suporte Interior:
                        </p>
                        <p>
                            (88)99710 6823
                            (88)99349 9184

                        </p>
                        <h4>ESCOLHA UMA DAS OPÇÕES ABAIXO PARA MEXER NO SISTEMA:</h4>
                    </div>
                    <img
                        src={enfeite}
                        alt=""
                    />

                </div>




            </section>

            <main>
                <section className="cards">
                    {cartoes.map(cartao => (
                        <Link id="linkCard" to={cartao.href} >
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
export default DashBoard

