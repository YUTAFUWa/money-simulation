document.addEventListener('DOMContentLoaded', () => {

  // 〜〜〜〜いくらになるか？〜〜〜〜
  const checkButton = document.querySelector('.checkButton__cost');
  const principalInput = document.querySelector('.principal__cost');
  const yieldInput = document.querySelector('.yield__cost');
  const periodInput = document.querySelector('.period__cost');
  const answerDiv = document.querySelector('.answer__cost');

  checkButton.addEventListener('click', () => {
      const principal = parseFloat(principalInput.value)*10000;
      const yearlyYield = parseFloat(yieldInput.value) / 100;
      const period = parseInt(periodInput.value, 10);

      if (isNaN(principal) || isNaN(yearlyYield) || isNaN(period)) {
          answerDiv.innerText = '正しい数値を入力してください。';
          return;
      }

      const finalAmount = principal * Math.pow((1 + yearlyYield), period);
      answerDiv.innerText = `最終金額は ${finalAmount.toFixed(2)} 円です。`;
    });


  // 〜〜〜〜いくら必要か？〜〜〜〜
  const checkButton__n = document.querySelector('.checkButton__need');
  const yield__n = document.querySelector('.yield__need');
  const principal__n = document.querySelector('.principal__need');
  const period__n = document.querySelector('.period__need');
  const answer__n = document.querySelector('.answer__need');

  checkButton__n.addEventListener('click', () => {
    const yearlyYield = yield__n.value / 100;
    const principal = principal__n.value * 10000;
    const period = parseInt(period__n.value, 10);

    const finalAmount = principal / Math.pow((1 + yearlyYield), period);
    answer__n.innerText = `必要な元本は ${finalAmount.toFixed(2)} 円です。`

  } )

});


