# Part 1 (Questions 1 - 7)

## 1.

Line 9 returns 'values added: 20'

## 2.

Line 13 also returns 'final result: 20'

## 3.

You shouldn't use var because it can cause unintended consequences when variables are accessible outside of their block. The var keyword raises the variable definition to the top of the function scope, this means the variable is accessible (although undefined) before it's declaration in the code.

## 4.

Line 9 still prints 'values added: 20'

## 5. 

Line 13 now errors with "result is not defined". This is because the result variable is contained to the if block and not accessible within the whole function. 

## 6. 

Line 9 now doesn't run because the addition fails, and this is because the const variable doesn't allow for reassignment.

## 7.

Line 13 doesn't run for the same reasons as line 9. You can't reassign to a const variable.