let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++ ){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
for(let i=0; i < monthlyExpensesQuestions.length; i++ ){
    let answer = parseFloat(windowprompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}
for(let i=0; i < annualExpensesQuestions.length; i++ ){
    let answer = parseFloat(windowprompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}