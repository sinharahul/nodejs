/**
 * Take start and end and return an array 
 * that produces the range
 */
function range(start,end){
	if(start > end)return
	var arr=[]	
	for(var i=start;i<=end;i++ ){
		arr.push(i)
	}	
	return arr
}
function sum(arr){
	var sum=0
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i]
	}
	return sum
}
//console.log(range(1,100))
console.log(sum([1,5,7]))
console.log(sum(range(1,100)))