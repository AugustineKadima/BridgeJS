/**
Input: nums = [2,11,15,7], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



-write a function
[2,7,11,15]
complement = 9 - 2
complement = 7
return [0,1]
pseudocode
-------------
-function
-loop 1
-loop 2
-write a condition to find the other number(complement) 
-return an array with the position 

first element - pos 0
last element - position n

time complexity for 1 loop= O(n)
time complexity for 2 loops= O(n^2)
space complexity = O(n)

 */

function twoSum(nums, target){

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        for(let j = 0; j < nums.length; j++){
            if(nums[j] == complement && i != j){
                return [i,j];
            }
        }
    }

    return "Array does not contain complement"

}



console.log(twoSum([2,7,11,15], 0));