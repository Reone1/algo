function solution (target, moneys) {
    let arr = new Array(target+1).fill(0);
    arr[0] = 1;
    for(let i = 0; i < moneys.length; i++) {
        let money = moneys[i]
        for(let j = money; j <= target; j++) {
            arr[j] = arr[j-money] + arr[j]
        }
    }
    return arr[target];
}

