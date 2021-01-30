describe("reverseNumber", function () {
    describe("양수를 거꾸로 뒤집기", function () {
        it("주어진 숫자를 뒤집기", function () {
            expect(reverse(123)).to.be.equal(321);
            expect(reverse(456)).to.be.equal(654);
        });
    })
    describe("음수를 거꾸로 뒤집기", function () {
        it("-123을 입력하면 -321이 출력된다.", function (){
            expect(reverse(-123)).to.be.equal(-321)
        })
        it("-2033030201 입력하면 -1020303302 출력된다.", function () {
            expect(reverse(-2033030201)).to.be.equal(-1020303302)
        })
        
    })
    describe("0으로 끝나는 수는 뒤집어서 자릿수를 줄이기", function () {
        it("자릿수 줄이기", function () {
            expect(reverse(-20309920)).to.be.equal(-2990302)
            expect(reverse(-583739210)).to.be.equal(-12937385)
        })
    })
});