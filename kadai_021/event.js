const changeText = document.getElementById('text');

const onBtn = document.getElementById('btn');

onBtn.addEventListener('click' , () => {
  setTimeout(() => {
    changeText.textContent = 'ボタンをクリックしました';
  }, 2000);
  
});

