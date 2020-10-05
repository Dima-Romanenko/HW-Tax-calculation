// profit level

let extraSmallProfit = 9875,
  smallProfit = 40125,
  preMiddleProfit = 85525,
  middleProfit = 163300,
  hightProfit = 207350,
  extraHightProfit = 518400;

//profit without tax

let profitWithoutTax = 12400;

// sum for tax

let extraSmallSum = 9875,
  smallSum = 40125,
  preMiddleSum = 85525,
  middleSum = 163300,
  hightSum = 207350,
  extraHightSum = 518400;
// higherSum = 519000;

// tax %

const extraSmallTax = 10,
  smallTax = 12,
  preMiddleTax = 22,
  middleTax = 24,
  hightTax = 32,
  extraHightTax = 35,
  higherTax = 37;

let tax = 0;
let profit = +prompt("Please, enter your profit for 2020year");
if (profit - profitWithoutTax <= 0) {
  tax = 0;
} else if (
  profit - profitWithoutTax > 0 &&
  profit - profitWithoutTax < smallProfit
) {
  tax = ((profit - profitWithoutTax) / 100) * extraSmallTax;
} else if (
  profit - profitWithoutTax > smallProfit &&
  profit - profitWithoutTax < preMiddleProfit
) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    ((profit - extraSmallProfit) / 100) * smallTax;
} else if (profit >= preMiddleProfit && profit < middleProfit) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    (smallProfit / 100) * smallTax +
    (preMiddleProfit / 100) * preMiddleTax +
    ((profit - extraSmallProfit - smallProfit - preMiddleProfit) / 100) *
      preMiddleTax;
} else if (profit >= middleProfit && profit < hightProfit) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    (smallProfit / 100) * smallTax +
    (preMiddleProfit / 100) * preMiddleTax +
    (middleProfit / 100) * middleTax +
    ((profit -
      extraSmallProfit -
      smallProfit -
      preMiddleProfit -
      middleProfit) /
      100) *
      middleTax;
} else if (profit >= hightProfit && profit < extraHightProfit) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    (smallProfit / 100) * smallTax +
    (preMiddleProfit / 100) * preMiddleTax +
    (middleProfit / 100) * middleTax +
    (hightProfit / 100) * hightTax +
    ((profit -
      extraSmallProfit -
      smallProfit -
      preMiddleProfit -
      middleProfit -
      hightProfit) /
      100) *
      hightTax;
} else if (profit >= extraHightProfit) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    (smallProfit / 100) * smallTax +
    (preMiddleProfit / 100) * preMiddleTax +
    (middleProfit / 100) * middleTax +
    (hightProfit / 100) * hightTax +
    (extraHightProfit / 100) * hightTax +
    ((profit -
      extraSmallProfit -
      smallProfit -
      preMiddleProfit -
      middleProfit -
      hightProfit -
      extraHightProfit) /
      100) *
      extraHightTax;
}

// data output

document.write(`
<div class='container'>
  <img src='./img.jpg'>
  <h1>Your tax for 2020 year: <span style='color: green'>${tax.toFixed(
    2
  )}</span> </h1>
</div>
`);
