function solution (n) {
    if(n === 1) return 1;
    if(n === 2) return 3;
    return solution(n-1)*2 + 1
}