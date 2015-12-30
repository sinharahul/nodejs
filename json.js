var accountStr = '{"name":"Jedi", "members":["Yoda","Obi Wan"],"number":34512, "location": "A galaxy far, far a way"}';

var accountObj = JSON.parse(accountStr);

console.log(accountObj.name);

console.log(accountObj.members);