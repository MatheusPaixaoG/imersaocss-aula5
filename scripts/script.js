var botao_abrir_menu = document.getElementsByClassName('menu_aberto')[0];
var botao_fechar_menu = document.getElementsByClassName('fechar_menu')[0];

function abrir_menu() {
    botao_abrir_menu.className = 'menu_aberto menu_animacao';
    botao_fechar_menu.style.zIndex = "5";
}

function fechar_menu() {
    botao_abrir_menu.className = 'menu_aberto menu_animacao_fechar';
    botao_fechar_menu.style.zIndex = "-1";
}