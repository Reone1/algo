# Failure Rate
스테이지의 갯수와 유저의 현재 진행중인 스테이지를 받는다.
현재 진행중인 스테이지는 `N+1`까지 가능하다.
현재 진행중인 스테이지는 아직 성공하지 못했음으로 해당 스테이지를 실패한 것으로 생각한다. (6스테이지 진행중이면 6스테이지는 실패한 상태)

각 스테이지의 실패율을 계산하고 스테이지 실패율이 낮은 순으로 정렬하여 출력한다.

## input 
N : number of stages (`number`)
stages : stage of each players (`Array<number>`)

## output
result : sort stages by failure Rate (`Array<number>`)

- in/out example
N	stages	                    result
5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
4	[4,4,4,4,4]                 [4,1,2,3]

## authorship
[2019 KAKAO BLIND RECRUIMENT](https://programmers.co.kr/learn/courses/30/lessons/42889)