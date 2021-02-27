function solution(board, moves) {
    var bucket = [];
    var answer = 0;
    for (var i = 0 ;i <moves.length; i++) {
        // moves[i-1]: board의 매회차 선택 줄
        
        for (var j = 0; j < board.length; j++) {
            // board의 각 row 조사
            
            if (board[j][moves[i]-1] != 0 ){
                bucket.push(board[j][moves[i]-1]) // bucket(바구니)에 추가
                
                if (bucket[bucket.length-1] == bucket[bucket.length - 2]) { // 바구니 뒤에서 두 개의 인형이 같은 경우

                    bucket = bucket.slice(0, -2) // 인형 두 개 제거
                    answer += 2; 
                } 
                board[j][moves[i]-1] = 0 // 제거한 board의 인형칸 초기
                break
            }
        }
    }
    return answer;
}