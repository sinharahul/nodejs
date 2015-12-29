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
console.log(range(1,100))