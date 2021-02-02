# printer
- The first job J in queue is taken from the queue.
- If there is some job in the queue with a higher priority than job J, then move J to the
end of the queue without printing it.
- Otherwise, print job J (and do not put it back in the queue).
## option
- One line with two integers n and m, where n is the number of jobs in the queue (1 ≤
n ≤ 100) and location is the position of your job (0 ≤ location ≤ n − 1). The first position in the
queue is number 0, the second is number 1, and so on

(현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다. 그리고
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.)
- One line with n integers in the range 1 to 9, giving the priorities of the jobs in the queue.
The first integer gives the priority of the first job, the second integer the priority of the
second job, and so on.

큐에 위치한 각각의 값은 각 문서의 중요도를 나타냅니다. 첫번째 숫자는 첫번째 문서의 중요도, 두번째 숫자는 두번째 문서의 중요도가 됩니다.

## input
- priorities : `array` (queue)
- location : `number`

## output
- return : `number`

## written by
[출처](http://www.csc.kth.se/contest/nwerc/2006/problems/nwerc06.pdf)