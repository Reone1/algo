let printer = (priorities, location) => {
    var answer = 1; //
    let print = 0;
    while (priorities.length > 0) {
        print = priorities.shift();
        if (priorities.filter(value => value > print).length > 0) {
            priorities.push(print)
        } else {
            if (location === 0) {
                break;
            } else {
                answer++
            }
        }
        location = location === 0 ? priorities.length - 1 : --location
    }
    return answer;
}