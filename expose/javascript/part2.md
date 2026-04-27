# Part 2

## 1.

At line 12 the console prints 3 because var makes it so we still have access to i, and the i++ adds 1 more time to give us 3.

## 2. 

At line 13 the console prints 150 because the last prices value is 300 and 300 * (1 - 0.5) = 150 

## 3.

At line 14 the console also prints 150 becuase rounding 150 will result in 150.

## 4.

The function returns a list of \[50, 100, 150\]

## 5.

The code causes an error because let makes it so that the variable i is only defined for the loop block

## 6.

The code causes an error because discountedPrice is only accessible in the loop block

## 7.

The code prints 150 because the variable finalPrice was defined for the whole function scope.

## 8.

The function returns [50, 100, 150] because the let variables don't change the code functionality (as long as you don't try to print all of the variables used)

## 9.

At line 11 the variable i will be undefined so we get a reference error, this is because i is only visible for the loop.

## 10.

At line 12 we print out 3 which is the length of the input parameter of prices.

## 11.

The function still returns [50, 100, 150] because the discounted list still gets filled with the discounted prices.

## 12.

### A.

student.name

### B. 

student['Grad Year']

### C.

student.greeting()

### D.

student['Favorite Teacher'].name

### E.

student.courseLoad\[0\]

## 13.

### A. '3' + 2 = '32'
Since 2 maps to the string '2', the + operator concatenates the two strings.

### B. '3' - 2 = 1
The - operator has no string behavior, so '3' maps to the number 3, and 3 - 2 = 1.

### C. 3 + null = 3
null maps to 0, so 3 + 0 = 3.

### D. '3' + null = '3null'
null maps to the string 'null', so the + operator concatenates '3' and 'null'.

### E. true + 3 = 4
true maps to 1, so 1 + 3 = 4.

### F. false + null = 0
false maps to 0 and null maps to 0, so 0 + 0 = 0.

### G. '3' + undefined = '3undefined'
undefined maps to the string 'undefined', so the + operator concatenates '3' and 'undefined'.

### H. '3' - undefined = NaN
The - operator tries to convert both sides to numbers. '3' maps to 3, but undefined maps to NaN, and any arithmetic with NaN produces NaN.

## 14.

### A. '2' > 1 = true
'2' maps to the number 2, and 2 > 1 is true.

### B. '2' < '12' = false
Both sides are strings, so JavaScript compares them lexicographically. '2' vs '1': since '2' > '1' as characters, '2' < '12' is false.

## C. 2 == '2' = true
== allows type coercion, so '2' maps to the number 2, and 2 == 2 is true.

### D. 2 === '2' = false
=== does not allow type coercion. 2 is a number and '2' is a string, so they are not equal.

### E. true == 2 = false
true maps to 1, and 1 == 2 is false.

### F. true === Boolean(2) = true
Boolean(2) converts 2 to a boolean. Since 2 is truthy, Boolean(2) is true. true === true with no type mismatch, so the result is true.

## 15.

== is the loose equality operator, which means JS will try to auto convert types to get a match. === is the strict equality operator and it doesn't change types ever so both the value and the type must match for it to return true. In general, === is safer to use because it avoids unexpected results from automatic type conversion.

## 16. 

see code in part2-question16.js

## 17.

The function should return [2, 4, 6]. Basically, we are iterating through the array in the first function, and for every item in the original array, we call callback, which just multiplies the number by 2. Then we store that value in the new array. When we return that new array, it gives us the original array multiplied by 2.

## 18.

see code in part2-question18.js. Used toTimeString() for current time and setInterval to print every second.

## 19.

The function prints out 1, 4, 3, and 2. (All on new lines). The final 2 appears after a bit of a delay (because of the 1000 delay in setTimeout())

