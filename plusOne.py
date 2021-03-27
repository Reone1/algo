class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        strs = [str(digit) for digit in digits]
        stringNum = "".join(strs)
        stringNum = str(int(stringNum) + 1)
        # print (stringNum)
        result = [];
        for string in stringNum:
            result.append(int(string))
        return result        
            
