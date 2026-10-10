// ============================================
// StockFlow - Produtos
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("VERSÃO NOVA DO JS");

    // ============================================
    // Banco de dados temporário
    // ============================================

    let produtos = [];

    let proximoId = 1;

    // ============================================
    // Seleção dos elementos
    // ============================================

    const btnNovoProduto = document.querySelector("#btnNovoProduto");

    const modal = document.querySelector(".modal");

    const btnCancelar = document.querySelector(".btn-cancelar");

    const formulario = document.querySelector("#productForm");

    const nomeInput = document.querySelector("#nomeProduto");

    const categoriaInput = document.querySelector("#categoriaProduto");

    const quantidadeInput = document.querySelector("#quantidadeProduto");

    const valorInput = document.querySelector("#valorProduto");

    const corpoTabela = document.querySelector("#listaProdutos");

    // ============================================
    // Verificação dos elementos
    // ============================================

    if (
        !btnNovoProduto ||
        !modal ||
        !btnCancelar ||
        !formulario ||
        !nomeInput ||
        !categoriaInput ||
        !quantidadeInput ||
        !valorInput ||
        !corpoTabela
    ) {
        console.error("Algum elemento do HTML não foi encontrado.");
        return;
    }

    // ============================================
    // Abrir Modal
    // ============================================

    btnNovoProduto.addEventListener("click", () => {

        modal.classList.add("active");

    });

    // ============================================
    // Fechar Modal
    // ============================================

    btnCancelar.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    // ============================================
    // Fechar clicando fora
    // ============================================

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

    // ============================================
    // Cadastro de Produto
    // ============================================

    function cadastrarProduto() {

        const produto = {

            id: proximoId++,

            nome: nomeInput.value.trim(),

            categoria: categoriaInput.value.trim(),

            quantidade: Number(quantidadeInput.value),

            valor: Number(valorInput.value)

        };

        produtos.push(produto);

        console.log("Produto cadastrado:");

        console.table(produtos);

        renderizarTabela();

        formulario.reset();

        modal.classList.remove("active");  

    }

    // ============================================
    // Envio do formulário
    // ============================================

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        cadastrarProduto();

    });

    // ============================================
// Renderizar tabela
// ============================================

console.log(corpoTabela);

function renderizarTabela() {

    console.log("Renderizando...");
    console.log(produtos);

    corpoTabela.innerHTML = "";

    produtos.forEach(produto => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${produto.valor.toFixed(2)}</td>
        <td class="acoes">
            <button class="btn btn-editar">Editar</button>
            <button class="btn btn-excluir">Excluir</button>
        </td>
`;

        console.log(linha);

        corpoTabela.appendChild(linha);

    });

    console.log(corpoTabela.innerHTML);

}

});