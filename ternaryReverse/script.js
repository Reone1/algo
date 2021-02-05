// solution
// input (n) : inital number (Natural Number) Number
// output : Number
const solution = (n) => {

    let ternaryNums = [];
    // 3으로 나눈 나머지를 배열앞에서 부터 넣는다. (unshift)
    // 3으로 나눈 몫이 3이하가 되면 종료한다.
    // 3의하의 몫을 배열의 앞에 추가 한다. (unshift)
    // 배열을 순서대로 계산한 것은 이미 거꾸로 뒤집혀 있다.
    // 각 값을 더해 리턴한다.
    while (n >= 3) {
        ternaryNums.length === 0 && n % 3 === 0 ? '' : ternaryNums.unshift(n % 3)
        n = parseInt(n / 3)
    }
    ternaryNums.unshift(n)
    return ternaryNums.reduce((acc, cur, i) => {
        return acc + cur * Math.pow(3, i);
    }, 0);
}

// Number.toString(n) => n진수로 변형이 된다. 이걸 이용하면 더 쉽게 풀 수 있다.