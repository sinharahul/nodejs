//https://www.educative.io/module/lesson/data-structures-in-javascript/gxnlB9N5MR9
/**
Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
*/
let findMaxSlidingWindow = function(nums, windowSize) {
  var result = [];
  console.log(nums);
  const len = nums.length;
  if(windowSize > len)windowSize = len;
  var s =0, e=s+windowSize-1;
  while( e< len && s < len){
	  console.log("e="+e+" s="+s);
	  let sarr = nums.slice(s,e+1);
	  console.log("sarr="+ sarr);
	  let max1 = sarr.reduce((a,b)=>a>b?a:b);
	  console.log("max1 = "+max1);
	  result.push(max1);
	  s=s+1;
	  e=e+1;
  }
  //Write your code
  return result;
};
