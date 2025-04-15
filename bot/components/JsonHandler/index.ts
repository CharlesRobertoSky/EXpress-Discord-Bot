const fs = require('fs');

class JsonHandler {
	constructor(local='./'){
		this.local = local;
	}
	
	read(){
		const data = fs.readFileSync(this.local, 'utf8');
		return JSON.parse(data);
	}

	save(data){
		const jsonData = {
			"role": `${data}`
		}
		return fs.writeFileSync(this.local, JSON.stringify(jsonData, null, 2));
	}
}
module.exports = { JsonHandler }
  
