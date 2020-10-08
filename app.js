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

// difference

let extraSmallDiff = (extraSmallProfit / 100) * extraSmallTax,
  smallDiff = ((smallProfit - extraSmallProfit) / 100) * smallTax,
  preMiddleDiff = ((preMiddleProfit - smallProfit) / 100) * preMiddleTax,
  middleDiff = ((middleProfit - preMiddleProfit) / 100) * middleTax,
  hightDiff = ((hightProfit - middleProfit) / 100) * hightTax,
  extraHightDiff = ((extraHightProfit - hightProfit) / 100) * extraHightTax;

console.log(
  extraSmallDiff,
  smallDiff,
  preMiddleDiff,
  middleDiff,
  hightDiff,
  extraHightDiff
);

let tax = 0;
let profit = +prompt("Please, enter your profit for 2020year");
let profitAfterDeduction = profit - profitWithoutTax;

if (profitAfterDeduction <= 0) {
  tax = 0;
} else if (
  profitAfterDeduction >= 0 &&
  profitAfterDeduction < extraSmallProfit
) {
  tax = (profitAfterDeduction / 100) * extraSmallTax;
} else if (
  profitAfterDeduction >= extraSmallProfit &&
  profitAfterDeduction < smallProfit
) {
  tax =
    extraSmallDiff +
    ((profitAfterDeduction - extraSmallProfit) / 100) * smallTax;
} else if (
  profitAfterDeduction >= smallProfit &&
  profitAfterDeduction < preMiddleProfit
) {
  tax =
    extraSmallDiff +
    smallDiff +
    ((profitAfterDeduction - smallProfit) / 100) * preMiddleTax;
} else if (
  profitAfterDeduction >= preMiddleProfit &&
  profitAfterDeduction < middleProfit
) {
  tax =
    extraSmallDiff +
    smallDiff +
    preMiddleDiff +
    ((profitAfterDeduction - preMiddleProfit) / 100) * middleTax;
} else if (
  profitAfterDeduction >= middleProfit &&
  profitAfterDeduction < hightProfit
) {
  tax =
    extraSmallDiff +
    smallDiff +
    preMiddleDiff +
    middleDiff +
    ((profitAfterDeduction - middleProfit) / 100) * hightTax;
} else if (
  profitAfterDeduction >= hightProfit &&
  profitAfterDeduction < extraHightProfit
) {
  tax =
    extraSmallDiff +
    smallDiff +
    preMiddleDiff +
    middleDiff +
    hightDiff +
    ((profitAfterDeduction - hightProfit) / 100) * extraHightTax;
} else if (profitAfterDeduction > extraHightProfit) {
  tax =
    extraSmallDiff +
    smallDiff +
    preMiddleDiff +
    middleDiff +
    hightDiff +
    extraHightDiff +
    ((profitAfterDeduction - extraHightProfit) / 100) * higherTax;
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
