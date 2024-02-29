function mincost(arr)
{ 
//write your code here
// return the min cost
let sum = 0; 
let ans = []
	while(arr.length>2){
		arr.sort()
		sum = arr[0]+arr[1]
		arr.splice(0,2)
		arr.push(sum)
		ans.push(sum)
	}
  return ans.reduce((sum, elem)=>sum+elem,0)+arr[0]+arr[1]
}

module.exports=mincost;
