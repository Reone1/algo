function solution(s) {

    let cnt = 0
    let times = 0;
    const recur = (s) => {
        if (s === '1') return undefined;
        let str = s.replace(/0/g, '');
        times += s.length - str.length
        cnt++
        return recur(str.length.toString(2))
    }
    recur(s)
    const answer = [cnt, times]
    return answer;
}