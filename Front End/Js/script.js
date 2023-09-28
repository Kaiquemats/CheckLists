const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// Seleciona o botão e o contêiner de checklist
const addButton = document.getElementById('add-checkbox');
const checklistContainer = document.getElementById('checklist-container');

// Adiciona um contador para rastrear o número de checkboxes criadas
let checkboxCount = 0;

// Adiciona um evento de clique ao botão
addButton.addEventListener('click', () => {
    const checkboxText = document.getElementById('checkbox-text').value;
    
    if (checkboxText.trim() === '') {
        alert('Digite um texto para a caixa de seleção.');
        return;
    }

    checkboxCount++; // Aumenta o contador
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${checkboxCount}`;

    const label = document.createElement('label');
    label.setAttribute('for', `checkbox-${checkboxCount}`);
    label.textContent = checkboxText;

    checklistContainer.appendChild(checkbox);
    checklistContainer.appendChild(label);

    // Limpa o campo de entrada de texto
    document.getElementById('checkbox-text').value = '';
});


var MenuBotao = document.getElementById("menu-ham")
var Menu = document.getElementById("menu-ham2")

MenuBotao.addEventListener("click", function() {
    if (Menu.style.display === "block" ) {
        Menu.style.display = "none"
    } else {
        Menu.style.display = "block"
    }
})