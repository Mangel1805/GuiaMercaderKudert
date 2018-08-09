	const readline = require('readline');
	var alias = new Array();

	async function main(){
		function readLine(message){
			const rl = readline.createInterface({
			  input: process.stdin,
			  output: process.stdout
			});
			return new Promise(resolve => {
				rl.question(message,name =>{
					resolve(name)
					rl.close()
				})
			})
		}

		let flag=true
		console.log(`\n----------Menu-----------`)
		console.log('1) Alias Romano\n2) Recursos\n3) How Much is\n4) How Many dollars is\n5) Salir')
		console.log('--------------------------\n')

		do{
			valor=parseInt(await readLine('Ingrese Opcion: '))
			switch (valor) {
				case 1:
			 		assignment(await readLine('Ingrese variables: '))
					flag=true
					break;
				case 2:
					resource(await readLine('Ingrese recurso: '))
					flag=true
					break;
				case 3:
					howMuch(await readLine('How Much is: '))
					flag=true
					break;
				case 4:
					howMany(await readLine('How Many is: '))
					flag=true
					break;
				case 5:
					flag=false
					break;						
				default:
					console.log('What are you talking about really?')
					flag= true
					break;
				}
		} while (flag)
	}
 
	function convertir( numeroRomano ) {
		var esRomano = new RegExp(/^m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/);
		if (esRomano.test(numeroRomano.toLowerCase())) {
			var numeroRomano = numeroRomano.toLowerCase().split(''),
		    asignacion = {
		      	i:1,
		      	v:5,
		      	x:10,
		      	l:50,
		      	c:100,
		      	d:500,
		      	m:1000
		      },
		    result = 0, aux = 0;
			while (numeroRomano.length) {
			    aux = asignacion[numeroRomano.shift()];
			    result += aux * (aux < asignacion[numeroRomano[0]] ? -1:1);
			}
			return result;
		}else {
			//console.log('What are you talking about really?')
			return false;
		}
	}

	function assignment(str){
		var exLetraRomano = new RegExp(/^[a-z]+\s+is\s+[i|v|x|l|c|d|m]$/i);
		str=str.toLowerCase()
		if (exLetraRomano.test(str)) {
			valor=str.split(' is ')
		 	alias[valor[0].trim()]=valor[1].trim()
		}else {
			console.log('What are you talking about really?')
		 	flag=true
		}
	}

	function newLanguage(str){
		var aux=''
		str=str.toLowerCase().split(" ")
		for (let i = 0; i < str.length; i++) {
			aux+=alias[str[i]]
		}
		return convertir(aux)
	}

	var exHowMuch = new RegExp(/^how\s+much\s+is\s+([a-z\s]+\s)[?]$/i);

	function howMuch(str){
		var valueRoman=''
		str = str.toLowerCase()
		if (exHowMuch.test(str)) {
			part=str.split(" is ")
			valueRoman=part[1].split(' ?').join('')
			if (newLanguage(valueRoman)==false) {
				console.log('What are you talking about really?')
			} else {
				console.log(`${valueRoman} is ${newLanguage(valueRoman)}`)	
			}
		} else {
			console.log('What are you talking about really?')
		}
	}

	var esValor = new RegExp(/^([a-z\s]+)is\s+(\d+.?\d*)\s+dollars$/i);
	var arrayRecurso = new Array();
	function resource(str){
 		str=str.toLowerCase()
		if (esValor.test(str)) {
			partition=str.split(' is ')
			aux=partition[0].split(' ')
			elementoRecurso=aux.pop();
			textromano=aux.join(' ')
			valor=newLanguage(textromano)
			auxMoneda=partition[1].split(' dollars')
			moneda=auxMoneda[0]
			arrayRecurso.push(valor+"-"+elementoRecurso+"-"+moneda)
		} else {
		 	console.log("What are you talking about really?")
		}
	}
		
	var exHowMany = new RegExp(/^how\s+many\s+dollars\s+is\s+([a-z\s]+)[?]$/i);
	function howMany(str){
		str =str.toLowerCase()
		if (exHowMany.test(str)) {
			partition=str.split(" is ")
			aux=partition[1].split(" ")
			aux.pop()
			auxRecurso=aux.pop()
			auxRomano=aux.join(' ')
			result=total(auxRomano,auxRecurso)
			if (result==0) {
				console.log('What are you talking about really?')
			} else {
			console.log(`${auxRomano} ${auxRecurso} is ${result} dollars`)
			}
		} else {
				console.log('What are you talking about really?')
			}
		}
	function total (romano, recurso){
		var result=0
		for (let i = 0; i < arrayRecurso.length; i++) {
			aux=arrayRecurso[i].split('-')
			if (aux[1].trim()==recurso) {
				dato=newLanguage(romano)
				result=((dato*aux[2])/aux[0]).toFixed(2)
			}
		}
		return result
	}
	main()


