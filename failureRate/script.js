function solution(N, stages) {
    const ratio = new Array(N) // 스테이지, 실패율 담을 배열

    for (let i = N; i > 0; i--) { 
        let inStage = stages.filter(el => el >= i)
        let pass = stages.filter(el => el > i)
        ratio[i - 1] = { stage: i, falseR: pass.length / inStage.length } // 각 인덱스에 실패율과 해당 스테이지 저장
    }
    return ratio.sort((a, b) => {
        return a.falseR - b.falseR; // 실패율 기준으로 내림차순
    }).map(el => el.stage) // 스테이지만 뽑아서 매핑
}