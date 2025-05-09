function collatz(n, sequence) {
    sequence.push(n);
    if(n === 1) return n;

    return n % 2 === 0 ? collatz(n / 2, sequence) : collatz(n * 3 + 1, sequence);
}

function collatz2(n) {
    if(n === 1) return [n];

    const val = n % 2 === 0 ? n / 2 : n * 3 + 1;

    return [n, ...collatz2(val)];
}

function kaprekar(n) {
    if (n <= 0) return [];
    if (n === 6174) return [ n ];


    const str = addZeros(`${n}`);
    const orderStr = str.split('').sort((n, m) => m - n ).join('');
    const reverseStr = orderStr.split('').reverse().join('')
    const x = parseInt(orderStr);
    const y = parseInt(reverseStr);
    const newN = x - y;

    return [n, ...kaprekar(newN)];

}

function addZeros(n) {
    let str = n;
    while(str.length < 4) {
        str = str.concat('0')
    }

    return str;
}

console.log(kaprekar(1));
