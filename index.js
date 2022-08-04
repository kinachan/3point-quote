
const props = {
  average: document.getElementById('average'),
  happy: document.getElementById('happy'),
  sad: document.getElementById('sad'),
};

const task = document.getElementById('task');
const resultElement = document.getElementById('result');
const formulaElement = document.getElementById('formula');

const calculationEvent = () => {
  const values = Object.keys(props).map(key => props[key].value);

  if (values.some(x =>x == null || x == '')) {
    return;
  }
  const {average, happy, sad} = props;
  calculation(parseFloat(average.value), parseFloat(happy.value), parseFloat(sad.value));
}

let text = '';
let result = '';

const calculation = (average, happy, sad) => {
  text = `（${sad}＋４×${average}＋${happy}）÷６`;
  result = (sad + 4 * average + happy) / 6;

  formulaElement.innerHTML = `<h6>${text}</h6>`;
  resultElement.innerHTML = `<h5>${task.value}の見積もり結果は ${result} でした。</h5>`;
}

Object.keys(props).forEach(key => {
  props[key].addEventListener('change', calculationEvent);
});

document.getElementById('save').addEventListener('click', () => {
  const h5 = document.createElement('h5');
  h5.innerText = `${task.value}の見積もり結果は ${result} でした。`;

  document.getElementById('saveArea').appendChild(h5);
});

// 計算式は（悲観値＋４×最可能値＋楽観値）÷６です。


