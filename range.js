/**
 * Take start and end and return an array 
 * that produces the range
 */
function range(start,end,step){
	if(start > end && step > 0)return
	if (step==undefined) {
		step=1
	}
	var arr=[]	
	if(step < 0){
		for(var i=end;i>=start;i+=step ){
		arr.push(i)
		}
	}
	else {
		for(var i=start;i<=end;i+=step ){
		arr.push(i)
		}	
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
console.log(range(1,100,-2))
console.log(sum([1,5,7]))
console.log(sum(range(1,100)))