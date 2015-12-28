/**
 * Node js censor module
 */
var censoredWords=["mad","bad"]

function censor(inStr){
	for (index in censoredWords){
		inStr=inStr.replace(censoredWords[index],'****')
	}
	return inStr
}

function addCensorWord(word){
	censoredWords.push(word)
}

function getCensoredWords(){
	return censoredWords
}

exports.censor=censor
exports.addCensorWord=addCensorWord
exports.getCensoredWords=getCensoredWords