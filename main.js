document.addEventListener('DOMContentLoaded', () => {


  // 〜〜〜〜いくらになるか？〜〜〜〜
  const checkButton = document.querySelector('.checkButton__cost');
  const principalInput = document.querySelector('.principal__cost');
  const yieldInput = document.querySelector('.yield__cost');
  const periodInput = document.querySelector('.period__cost');
  const answerDiv = document.querySelector('.answer__cost');

  checkButton.addEventListener('click', () => {
    const principal = parseFloat(principalInput.value) * 10000;
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
  const goal__n = document.querySelector('.goal__need');
  const period__n = document.querySelector('.period__need');
  const answer__n = document.querySelector('.answer__need');

  checkButton__n.addEventListener('click', () => {
    const yearlyYield = yield__n.value / 100;
    const goal = goal__n.value * 10000;
    const period = parseInt(period__n.value, 10);

    const finalAmount = goal / Math.pow((1 + yearlyYield), period);
    answer__n.innerText = `必要な元本は ${finalAmount.toFixed(2)} 円です。`
  });


  // 〜〜〜〜目標まで何年かかるか？〜〜〜〜

  const checkButton__y = document.querySelector('.checkButton__year');

  checkButton__y.addEventListener('click', () => {
    const principal__y = document.querySelector('.principal__year');
    const yield__y = document.querySelector('.yield__year');
    const goal__y = document.querySelector('.goal__year');
    const answer__y = document.querySelector('.answer__year');

    const principal = principal__y.value * 10000;
    const yield = yield__y.value / 100;
    const goal = goal__y.value * 10000;

    function calculateYearsToGoal (principal, yield, goal){
      let years = 0;
      let currentAmount = principal;

      while(currentAmount < goal){
        currentAmount *= (1 + yield);
        years++;
      }

      return years;
    }

    const years = calculateYearsToGoal (principal, yield, goal);
    answer__y.innerText = `目標金額までは ${years} 年かかります。` ;

  })









});


