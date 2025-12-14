document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('flexSwitchCheckDefault');
    const body = document.body;
    const DARK_MODE_CLASS = 'dark-mode';

    if (switchInput) {
        switchInput.addEventListener('change', () => {
            body.classList.toggle(DARK_MODE_CLASS);
        });
    }

    const sendButton = document.querySelector('button.botao-padrao[type="button"]');
    
    if (sendButton) {
        sendButton.addEventListener('click', (event) => {
            event.preventDefault(); 

            const form = document.getElementById('contato');
            const nomeInput = document.getElementById('floatingNome');

            if (nomeInput && nomeInput.value.trim() !== '') {
                alert(`Obrigado, ${nomeInput.value.trim()}! Sua mensagem foi enviada com sucesso.`);
                form.reset(); 
            } else {
                alert('Por favor, preencha o campo Nome para enviar o formulário.');
            }
        });
    }
});