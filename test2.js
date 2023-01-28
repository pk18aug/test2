function  twoSum(arr,S){
    var sums  = [];
     for(var i =0;i<arr.length();i++){
        for (var j =i+1; j <arr.length ;j++){
            if(arr[i]+arr[j]===S){
                sums.push(arr[i],arr[j]);
            }
        }
     }
     return sums;
}

twoSum([3,5,2,-4,11],7);