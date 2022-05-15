function fib(num) {
    if (num <= 0 || typeof(num) != 'number' || !Number.isInteger(num)) {
        return '';
    }

    let result = '',
        fib1 = 0,
        fib2 = 1;

    for (let i = 1; i <= num; i++) {
        if (i == 0) {
            result += `${fib1}`;
        } else {
            result += ` ${fib1}`;
        }

        let buf = fib1 + fib2;
        fib1 = fib2;
        fib2 = buf;
    }

    console.log(result);
}

fib(4);
fib(7);
fib('7');
fib('0');