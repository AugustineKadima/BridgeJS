function threeSum(nums){
    let outputArr = [];
    nums.sort()
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[ i - 1]) continue
        for(let j = i + 1; j < nums.length; j++){
            if( j > i + 1 && nums[j] == nums[ j - 1]) continue
            for(let k = j + 1; k < nums.length; k++){
                if(k > j + 1 && nums[k] == nums[ k - 1]) continue
                if(nums[i] +nums[j] + nums[k] == 0 &&  i != j && j != k && i != k ){

                    outputArr.push([nums[i], nums[j], nums[k]]);
                }

            }
            
        }

    }    
    // console.log(countter)

    return outputArr;
}

let result = threeSum([-1,0,1,2,-1,-4]);
console.log(result)

/*
*Time complexity = O(n^3)
Space complexity = O(n)
 */