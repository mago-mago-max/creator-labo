const overview = document.querySelector('#overview-list');
const lists = [
  {
    title: '期間',
    detail: '〇月△日～〇月◇日（毎週 土・日 開催）',
  },
  {
    title: '会場',
    detail: 'クリエイターラボ',
  },
  {
    title: '参加費',
    detail: '無料',
  },
  {
    title: '対象',
    detail: '小学生～大人（上限なし）',
  },
  {
    title: '定員',
    detail: '○○名（事前申込制）',
  },
  {
    title: '持ち物',
    detail: '特になし',
  },
]

for (let i = 0; i < lists.length; i++) {
  const { title, detail } = lists[i];
  const content = `<tr><th>${title}</th><td>${detail}</td></tr>`;
  overview.insertAdjacentHTML('beforeend', content);
}

const flow = document.querySelector('#flow-list');
const flowlists = [
  {
    title: 'キックオフ',
    detail: 'ひとりで、あるいはみんなで、作りたいゲームを決めよう！<br>「テーマカード」もあるよ！',
  },
  {
    title: '制作スタート',
    detail: 'ルールを考えて、カードやボードを実際につくってみよう！<br>必要な素材はラボにたくさんあるよ◎<br>持ち込みも大歓迎！',
  },
  {
    title: 'テスト＆磨きこみ',
    detail: '自分たちでプレイしてみて、改良ポイントを発見！<br>サポーターもいるから、完成度がぐっと上がる！',
  },
  {
    title: '展示＆称号授与式',
    detail: '自分の作ったゲームを公開しよう！<br>人気作品には「特別称号」も！？',
  },
]

for (let i = 0; i < flowlists.length; i++) {
  const { title, detail } = flowlists[i];
  let content = '';
  if (i != flowlists.length - 1) {
    content = `<div class="step"><div class="do"><h3>${title}</h3></div><p>${detail}</p></div><img src="./img/down.png" alt="下矢印">`;
  } else {
    content = `<div class="step"><div class="do"><h3>${title}</h3></div><p>${detail}</p></div>`;
  }
  flow.insertAdjacentHTML('beforeend', content);
}

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

const attention = document.querySelector('#attention');
attention.addEventListener('click', () => {
  window.alert("異なるページに遷移します");
});