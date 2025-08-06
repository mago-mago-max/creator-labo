const facility = document.querySelector('#facility-list');
const facilitylists = [
  {
    title: '場所',
    detail: 'ツクルビル B1F<br>（東京都○○区○○ 1-2-3）',
  },
  {
    title: 'アクセス',
    detail: '○○駅 東口から徒歩5分',
  },
  {
    title: '営業時間',
    detail: '9:00 ~ 20:00 （定休日なし）'
  }
]

for (let i = 0; i < facilitylists.length; i++) {
  const { title, detail } = facilitylists[i];
  const content = `<dt>${title}</dt><dd>${detail}</dd>`;
  facility.insertAdjacentHTML('beforeend', content);
}

const theme = document.querySelector('#old-list');
const themelists = [
  {
    count: '1',
    title: 'モンスターデザイナー',
    detail: '架空のモンスターを考えて倒そう！'
  },
  {
    count: '2',
    title: 'サウンドクリエイター',
    detail: '身近な音を集めて音楽を作ろう！'
  },
  {
    count: '3',
    title: '発明家',
    detail: '日常生活をちょっとだけ便利にするものを発明しよう！'
  },
  {
    count: '4',
    title: '文房具デザイナー',
    detail: '「あったら嬉しい文房具」を実際に作ってみよう！'
  },
  {
    count: '5',
    title: 'ボードゲームクリエイター',
    detail: 'みんなで遊べるボードゲームを作ろう！'
  }
]


// 申し込み受付期間外
// for (let i = 0; i < themelists.length; i++) {
//   const { count, title, detail } = themelists[i];
//   const content = `<tr><th>${count}</th><td>${title}</td><td>${detail}</td></tr>`;
//   theme.insertAdjacentHTML('beforeend', content);
// }

// 申込受付期間中
for (let i = 0; i < themelists.length; i++) {
  const { count, title, detail } = themelists[i];
  let content = '';
  if (i == themelists.length - 1) {
    content = `<tr class="now"><th>${count}</th><td>${title}</td><td>${detail}</td></tr> <p>※現在、申込受付中です。<a href=index.html >詳細はこちら</a></p>`;
  } else {
    content = `<tr><th>${count}</th><td>${title}</td><td>${detail}</td></tr>`;
  }
  theme.insertAdjacentHTML('beforeend', content);
}

const topbtn = document.querySelector('#top');
topbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const headerscroll = document.querySelector('#scroll');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    headerscroll.classList.add('scroll');
  } else {
    headerscroll.classList.remove('scroll');
  }
});