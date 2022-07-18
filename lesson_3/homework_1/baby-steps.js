inp = process.argv;

const sum = (inp) => {
    let result = 0;
    for (let i = 2; i < inp.length; i++) {
        result += Number(inp[i]);
    }
    return result;
}

console.log(sum(inp));