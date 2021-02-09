function solution(n, lost, reserve) {
    let result;
    // 가지고 있는 사람 앞뒤 사람이 잃어버린 사람이 있는지 찾는다.
    // 한사람한테 주고 그 사람을 잘라낸다.
    reserve.filter(el => {
        if (lost.indexOf(el) !== -1) {
            lost.splice(lost.indexOf(el), 1)
            return false;
        }
        return true;
    }).forEach(el => {
        if (lost.indexOf(el - 1) !== -1) {
            lost.splice(lost.indexOf(el - 1), 1)
        } else if (lost.indexOf(el + 1) !== -1) {
            lost.splice(lost.indexOf(el + 1), 1)
        }

    })
    return n - lost.length
}