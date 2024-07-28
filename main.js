document.addEventListener('DOMContentLoaded', () => {

// ⬇︎⬇︎⬇︎元本を増やす⬇︎⬇︎⬇

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
    answerDiv.innerText = `最終金額は ${(finalAmount/10000).toFixed(2)} 万円です。`;
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
    answer__n.innerText = `必要な元本は ${(finalAmount/10000).toFixed(2)} 万円です。`;
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



// ⬇︎⬇︎⬇︎毎月積み立てる⬇︎⬇︎⬇︎

  // 〜〜〜〜いくらになるか？〜〜〜〜
  const checkButton__m = document.querySelector('.checkButton__month');
  const principal__m = document.querySelector('.principal__month');
  const yield__m = document.querySelector('.yield__month');
  const n_o_p = document.querySelector('.number_of_periods');
  const answer__m = document.querySelector('.answer__month');

  checkButton__m.addEventListener('click', () => {

    const principal = principal__m.value * 10000;
    const y_m = yield__m.value /100 /12;
    const nop = n_o_p.value *12;

    const fv = principal *  (Math.pow(1 + y_m ,nop) -1) / y_m;

    answer__m.innerText = `将来価値は ${(fv/10000).toFixed(2)} 万円です`;
  });

  // 〜〜〜〜いくら積立が必要か？〜〜〜〜
  const checkButton__mn = document.querySelector('.checkButton__month__need');
  const answer__mn = document.querySelector('.answer__month__need');
  const yield__mn = document.querySelector('.yield__month__need');
  const goal__mn = document.querySelector('.goal__month__need');
  const n_o_p_n = document.querySelector('.number_of_periods__need');

  checkButton__mn.addEventListener('click', () => {
    const yield = yield__mn.value / 100 / 12 ;
    const goal = goal__mn.value * 10000 ;
    const nopn = n_o_p_n.value * 12 ;

    const pmt = goal * yield / (Math.pow( 1 + yield ,nopn) - 1 );

    answer__mn.innerText = `毎月必要な積立金額は、${(pmt/10000).toFixed(2)}万円です`;

  })


  // 〜〜〜〜いくら積立が必要か？〜〜〜〜
  const checkButton__my = document.querySelector('.checkButton__month__year');
  const answer__my = document.querySelector('.answer__month__year');
  const principal__my = document.querySelector('.principal__month__year');
  const yield__my = document.querySelector('.yield__month__year');
  const goal__my = document.querySelector('.goal__month__year');
  
  checkButton__my.addEventListener('click', () => {
    const principal = principal__my.value * 10000;
    const yield = yield__my.value / 100 / 12 ;
    const goal = goal__my.value * 10000 ;

    const n = Math.log(( goal * yield / principal ) + 1) / Math.log( 1 + yield);

    const n__years = n / 12;

    answer__my.innerText = `目標までは、${n__years.toFixed(2)}年かかります。`;



  })


});


