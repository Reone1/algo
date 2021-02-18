function solution (n) {
    if(n === 1) return 1;
    if(n === 2) return 3;
    return solution(n-1)*2 + 1
}
/*
실제 타워의 기둥에 어떠한 변화가 있는지 출력하는 경우
function solution(n) {
    function hanoi(n, from, to) {
        let result = [];
        const index = [1, 2, 3]
        const left = index.filter(el => {
            return el !== from && el !== to
        })[0]
        if (n === 1) {
            result.push([from, to])
            return result
        }

        return hanoi(n - 1, from, left)
            .concat(hanoi(1, from, to))
            .concat(hanoi(n - 1, left, to))
    }
    return hanoi(n, 1, 3)
}
 */