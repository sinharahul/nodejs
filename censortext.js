/**
 * Node js censor module
 */
var censoredWords=["mad","bad"]

function censor(inStr){
	for (word in censoredWords){
		inStr.replace(word,'****')
	}
}

function addCensorWord(word){
	censoredWords.push(word)
}

function getCensoredWords(){
	return censoredWords
}

exports.sensor=sensor
exports.addCensorWord=addCensorWord
exports.getCensoredWords=getCensoredWords