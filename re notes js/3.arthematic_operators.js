/*
### Notes: Arithmetic Operators ➕

* **Arithmetic operators** perform math calculations.
* `+`: Adds two values.
* `-`: Subtracts second value from first.
* `*`: Multiplies values.
* `/`: Divides first value by second.
* `%`: Returns remainder (useful for even/odd checks).
* `**`: Raises first value to the power of second.
* `++`: Increments value by 1 (prefix or postfix).
* `--`: Decrements value by 1 (prefix or postfix).
* Division gives floating-point result even for integers.

*/

//Create a function that returns square of a number. 
function sq(n){
    return n * n; // or n ** 2, both valid
}

//checks whether a number is divisible by 3.
function divBy5(n){
    return n % 3 == 0 ; // note : ternary(n % 3 == 0 ? true : false) is not needed.
}
