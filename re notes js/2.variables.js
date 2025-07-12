/*
### Notes: Variables 📦

* **Variable**: A named container used to store data.
* **`let`**: Block-scoped, can be reassigned. Preferred for values that change.
* **`const`**: Block-scoped, cannot be reassigned. Used for constants.
* **`var`**: Function-scoped, hoisted. Outdated — avoid using it.
* **Scope**: Determines where the variable can be accessed (block vs function).
* **Hoisting**: `var` is hoisted (moved to top of scope), `let` and `const` are not accessible before declaration.
* **Temporal Dead Zone**: Accessing `let` or `const` before declaration causes a `ReferenceError`.

*/


{
    let a = 1; 
    const b = 2 ; // value cannot be modified.
    var c = 3 ; // accessable out of scope.

    console.log( a , b );
}

console.log(c); 