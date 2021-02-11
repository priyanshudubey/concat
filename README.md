# Concatenator
Concatenator is a concatenation helper. Now you don't have to google on how to concatenate something on any string. You don't have to worry about wether you have to concatenate to the starting position or to the end. Just pass the location and bingo. You will get the desired output.
# Features
  - Add anything to the starting of the string
  - Add anything to the end of the string

# Availabe Function
    > concString(str, loc, toAdd)
- str = The original String
- loc = Location where to concatenate i.e. Front or End
- toAdd = String to be concatenated at the loc

# Example
```
var app = require('@priyanshudubey/concat')
str = "Hello world"
var resu = app.concString(str, 'front', 'New ')
console.log(resu);
```


