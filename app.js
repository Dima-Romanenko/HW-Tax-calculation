// profit level

let extraSmallProfit = 9875,
  smallProfit = 40125,
  preMiddleProfit = 85525,
  middleProfit = 163300,
  hightProfit = 207350,
  extraHightProfit = 518400;

// sum for tax

let extraSmallSum = 9875,
  smallSum = 10000,
  preMiddleSum = 41000,
  middleSum = 86000,
  hightSum = 16400,
  extraHightSum = 208000,
  higherSum = 519000;

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

if (profit <= extraSmallProfit) {
  tax = (profit / 100) * extraSmallTax;
} else if (profit >= extraSmallSum && profit < smallProfit) {
  tax = (extraSmallSum / 100) * extraSmallTax + (smallSum / 100) * smallTax;
} else if (profit >= smallProfit && profit < preMiddleProfit) {
  tax =
    (extraSmallSum / 100) * extraSmallTax +
    (smallSum / 100) * smallTax +
    (preMiddleSum / 100) * preMiddleTax;
} else if (profit >= preMiddleProfit && profit < middleProfit) {
  tax =
    (extraSmallSum / 100) * extraSmallTax +
    (smallSum / 100) * smallTax +
    (preMiddleSum / 100) * preMiddleTax +
    (middleSum / 100) * middleTax;
} else if (profit >= middleProfit && profit < hightProfit) {
  tax =
    (extraSmallSum / 100) * extraSmallTax +
    (smallSum / 100) * smallTax +
    (preMiddleSum / 100) * preMiddleTax +
    (middleSum / 100) * middleTax +
    (hightSum / 100) * hightTax;
} else if (profit >= hightProfit && profit < extraHightProfit) {
  tax =
    (extraSmallSum / 100) * extraSmallTax +
    (smallSum / 100) * smallTax +
    (preMiddleSum / 100) * preMiddleTax +
    (middleSum / 100) * middleTax +
    (hightSum / 100) * hightTax +
    (extraHightSum / 100) * extraHightTax;
} else {
  tax =
    (extraSmallSum / 100) * extraSmallTax +
    (smallSum / 100) * smallTax +
    (preMiddleSum / 100) * preMiddleTax +
    (middleSum / 100) * middleTax +
    (hightSum / 100) * hightTax +
    (extraHightSum / 100) * extraHightTax +
    (higherSum / 100) * higherTax;
}

// data output

document.write(`
<div class='container'>
  <img src='./image.jpg'>
  <h1>Your tax for 2020 year: <span style='color: green'>${tax.toFixed(
    2
  )}</span> </h1>
</div>
`);
