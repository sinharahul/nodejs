var events=require('events')
function Account() {
this.balance=0	
events.EventEmitter.call(this)
this.deposit= function deposit(amount){
		this.balance+=amount
		this.emit("balch")
	}		
this.withdraw= function withdraw(amount){
        this.balance-=amount
	    this.emit("balch")		
	}	
Account.prototype.__proto__=events.EventEmitter.prototype	
}
function display(){
	console.log("balance=%d",this.balance)
}

var account=new Account()
account.on("balch",display)
account.deposit(100)
account.withdraw(20)