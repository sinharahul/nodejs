function simpleTimeout(consoleTimer){
	console.timeEnd(consoleTimer)
}

console.time("one sec")
setTimeout(simpleTimeout,1000,"one sec")


