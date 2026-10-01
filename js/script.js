/* Menu mobile */

const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

if (botaoMenu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });

}


/* Conteúdo da SPA */

const conteudo = document.getElementById("conteudo");


function mostrarPagina() {

    const pagina = window.location.hash;


    /* Página inicial */

    if (pagina === "" || pagina === "#inicio") {

        conteudo.innerHTML = `

            <section>

                <h2>Sobre a ONG</h2>

                <img 
                    src="../imagens/ong.jpg"
                    alt="Voluntários realizando uma ação social"
                >

                <p>
                    A ONG Mãos Solidárias ajuda pessoas
                    através de ações sociais e voluntárias.
                </p>

            </section>


            <section>

                <h2>O que fazemos?</h2>

                <p>
                    Realizamos campanhas de doação e ações
                    para ajudar pessoas da comunidade.
                </p>

            </section>


            <section>

                <h2>Contato</h2>

                <p>
                    E-mail: contato@maossolidarias.com
                </p>

                <p>
                    Telefone: (81) 99999-9999
                </p>

            </section>

        `;

    }


    /* Página de projetos */

    else if (pagina === "#projetos") {

        conteudo.innerHTML = `

            <section>

                <h2>Nossos Projetos</h2>

                <p>
                    Conheça algumas das ações realizadas pela ONG.
                </p>

            </section>


            <section>

                <article>

                    <span class="badge">
                        Projeto ativo
                    </span>

                    <h3>Campanha de Alimentos</h3>

                    <p>
                        Arrecadamos alimentos para ajudar famílias
                        que precisam.
                    </p>

                </article>


                <article>

                    <span class="badge">
                        Projeto ativo
                    </span>

                    <h3>Doação de Roupas</h3>

                    <p>
                        Recebemos roupas em boas condições
                        para realizar doações.
                    </p>

                </article>


                <article>

                    <span class="badge">
                        Projeto ativo
                    </span>

                    <h3>Ações Comunitárias</h3>

                    <p>
                        Realizamos ações voluntárias para ajudar
                        a comunidade.
                    </p>

                </article>

            </section>


            <section>

                <h2>Como ajudar?</h2>

                <p>
                    Você pode participar como voluntário.
                </p>

                <a href="#voluntario">
                    Quero ser voluntário
                </a>

            </section>

        `;

    }


    /* Página de voluntário */

    else if (pagina === "#voluntario") {

        conteudo.innerHTML = `

            <h2>Seja Voluntário</h2>


            <div class="alerta">

                Preencha todos os campos para realizar
                seu cadastro.

            </div>


            <form id="formulario">

                <fieldset>

                    <legend>Dados pessoais</legend>


                    <label for="nome">
                        Nome:
                    </label>

                    <input 
                        type="text"
                        id="nome"
                        required
                    >


                    <br><br>


                    <label for="email">
                        E-mail:
                    </label>

                    <input 
                        type="email"
                        id="email"
                        required
                    >


                    <br><br>


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        maxlength="14"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        required
                    >


                    <br><br>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        maxlength="15"
                        placeholder="(00) 00000-0000"
                        required
                    >


                    <br><br>


                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        maxlength="9"
                        placeholder="00000-000"
                        required
                    >

                </fieldset>


                <br>


                <fieldset>

                    <legend>Voluntariado</legend>


                    <label for="area">
                        Área de interesse:
                    </label>


                    <select id="area" required>

                        <option value="">
                            Escolha uma opção
                        </option>

                        <option value="doacao">
                            Doações
                        </option>

                        <option value="eventos">
                            Eventos
                        </option>

                        <option value="acoes">
                            Ações sociais
                        </option>

                    </select>


                    <br><br>


                    <label for="mensagem">
                        Mensagem:
                    </label>


                    <br>


                    <textarea
                        id="mensagem"
                        rows="5"
                        required
                    ></textarea>

                </fieldset>


                <br>


                <button type="submit">
                    Enviar
                </button>

            </form>


            <div id="toast" class="toast">

                Cadastro realizado com sucesso!

            </div>

        `;


        ativarFormulario();

    }

}


/* Formulário */

function ativarFormulario() {

    const formulario = document.getElementById("formulario");

    const toast = document.getElementById("toast");


    const cpf = document.getElementById("cpf");

    const telefone = document.getElementById("telefone");

    const cep = document.getElementById("cep");


    /* Máscara do CPF */

    if (cpf) {

        cpf.addEventListener("input", function () {

            let valor = cpf.value.replace(/\D/g, "");

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

            cpf.value = valor;

        });

    }


    /* Máscara do telefone */

    if (telefone) {

        telefone.addEventListener("input", function () {

            let valor = telefone.value.replace(/\D/g, "");

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

            telefone.value = valor;

        });

    }


    /* Máscara do CEP */

    if (cep) {

        cep.addEventListener("input", function () {

            let valor = cep.value.replace(/\D/g, "");

            valor = valor.replace(
                /^(\d{5})(\d)/,
                "$1-$2"
            );

            cep.value = valor;

        });

    }


    /* Envio do formulário */

    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                toast.style.display = "block";


                setTimeout(function () {

                    toast.style.display = "none";

                }, 3000);

            }
        );

    }

}


/* Detecta mudança na navegação */

window.addEventListener(
    "hashchange",
    mostrarPagina
);


/* Mostra a página inicial */

mostrarPagina();