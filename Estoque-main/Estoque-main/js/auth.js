
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".login-form");
    const titulo = document.querySelector(".login-header p");
    const botao = formulario?.querySelector('button[type="submit"]');
    const linkCadastro = document.querySelector(".login-footer a");

    if (!formulario || !botao || !linkCadastro) {
        console.error("Elementos do login não encontrados.");
        return;
    }

    let modoCadastro = false;

    linkCadastro.addEventListener("click", (event) => {
        event.preventDefault();

        modoCadastro = !modoCadastro;

        if (titulo) {
            titulo.textContent = modoCadastro
                ? "Crie sua conta"
                : "Bem-vindo de volta";
        }

        botao.textContent = modoCadastro
            ? "Criar conta"
            : "Entrar";

        linkCadastro.textContent = modoCadastro
            ? "Já possui conta? Entrar"
            : "Criar conta";

        formulario.reset();
    });

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value;

        if (!email || !senha) {
            alert("Preencha o e-mail e a senha.");
            return;
        }

        botao.disabled = true;
        botao.textContent = "Aguarde...";

        try {
            let resultado;

            if (modoCadastro) {
                resultado = await supabaseClient.auth.signUp({
                email,
                password: senha,
                options: {
                    emailRedirectTo: "http://127.0.0.1:5500/HTML/login.html"
                }
            });
            } else {
                resultado = await supabaseClient.auth.signUp({
                email,
                password: senha,
                options: {
                    emailRedirectTo: "http://127.0.0.1:5500/HTML/login.html"
                }
            });
            }

            if (resultado.error) {
                throw resultado.error;
            }

            if (modoCadastro && !resultado.data.session) {
                alert(
                    "Cadastro realizado! Confira seu e-mail para confirmar a conta antes de entrar."
                );
                return;
            }

            window.location.href = "dashboard.html";

        } catch (erro) {
            console.error("Erro de autenticação:", erro);
            alert("Não foi possível concluir a operação. " + erro.message);
        } finally {
            botao.disabled = false;
            botao.textContent = modoCadastro ? "Criar conta" : "Entrar";
        }
    });
});
