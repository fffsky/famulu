// 要素を取得
const btn = document.getElementById('ham_btn');
const ham_menu = document.getElementById('menu-sp');
const ham_modal = document.getElementById('modal-sp');

// ボタンをクリックしたとき
btn.addEventListener('click', () => {
    btn.classList.toggle('open_ham');
    ham_menu.classList.toggle('add-menu-sp');
    ham_modal.classList.toggle('add-modal-sp');
});
// モーダルをクリックしたとき
ham_modal.addEventListener('click', () => {
    btn.classList.toggle('open_ham');
    ham_menu.classList.toggle('add-menu-sp');
    ham_modal.classList.toggle('add-modal-sp');
});
