// profit level

let extraSmallProfit = 9875,
  smallProfit = 40125,
  preMiddleProfit = 85525,
  middleProfit = 163300,
  hightProfit = 207350,
  extraHightProfit = 518400;

//profit without tax

let profitWithoutTax = 12400;


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
} else if (
  profit - profitWithoutTax >= preMiddleProfit &&
  profit - profitWithoutTax < middleProfit
) {
  tax =
    (extraSmallProfit / 100) * extraSmallTax +
    (smallProfit / 100) * smallTax +
    (preMiddleProfit / 100) * preMiddleTax +
    ((profit - extraSmallProfit - smallProfit - preMiddleProfit) / 100) *
      preMiddleTax;
} else if (
  profit - profitWithoutTax >= middleProfit &&
  profit - profitWithoutTax < hightProfit
) {
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
} else if (
  profit - profitWithoutTax >= hightProfit &&
  profit - profitWithoutTax < extraHightProfit
) {
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
} else if (profit - profitWithoutTax >= extraHightProfit) {
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
