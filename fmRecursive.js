function sum(n) {
    if (n === 0)
        return 0
    else {
        return sum(n - 1) + n
    }

}
//console.log(sum(6))

function sum2(n) {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total = total + i
    }
    return total
}
//console.log(sum2(6))


function fact(n) {
    if (n === 0)
        return 1
    else {
        return fact(n - 1) * n
    }
}
//console.log(fact(10))

function power(m,n) {
    let p = 1
    for (let i = 1; i <= n; i++) {
        p = p * m
    }
    return p
}
console.log(power(2, 3))

function powerR(m, n) {
    
    if (n === 0) {
        return 1
    }
    return  powerR(m, n - 1)*m
}

console.log(powerR(2, 3)); 

function isPalindrome(str) {
    
    let p1 = 0;
    let p2 = str.length - 1;

    while (p1 !== p2) {
        if (str[p1] !== str[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    
    return true;
}console.log(isPalindrome('hello'))


function fibonacci(n) {
    if (n <= 0) return 0;  
    if (n === 1) return 1; 
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8)); 
function fib(n){

    let result = [0,1]
    for( let i=2; i<=n;i++){   
        result.push(result[i-2]+result[i-1])
    }
    return result
}
console.log(result)