## 1. what was the bug

Basically we are adding strings because getting elements from the DOM using value returns strings. Thus 
2 + 3 isn't 5 but "23" because it does string concatenation.


## 2. how would i fix it

I would fix it by type casting the strings into a number. Probably using ParseInt() on line 9.

