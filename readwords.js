var censor=require("censorify")
console.log(censor.getCensoredWords)
censor.addCensorWord("gloomy")
console.log(censor.censor("A gloomy day"))

