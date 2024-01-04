const changeText = document.getElementById('text');

const onBtn = document.getElementById('btn');

onBtn.addEventListener('click' , () => {
  changeText.textContent = 'ボタンをクリックしました'
});
