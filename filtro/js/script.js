let resultado = document.getElementById('c-resultado');

let ALUNOS = {
	'fernanda': {
		name: 'Fernanda Oliveira',
		img: './img/fernanda.jpg',
        city: 'Belo Horizonte',
        country: 'Brazil'
	},
	'joao': {
		name: 'João da Silva',
		img: './img/joao.jpg',
        city: 'Manaus',
        country: 'Brazil'
	},
	'joaquim': {
		name: 'Joaquim Oliveira',
		img: './img/joaquim.jpg',
        city: 'Belo Horizonte',
        country: 'Brazil'
	},
	'jualiana': {
		name: 'Juliana Scobar',
		img: './img/juliana.jpg',
        city: 'Medelín',
        country: 'Colombia'
	},
	'marcus': {
		name: 'Marcus Vinicius Scobar',
		img: './img/marcus.jpg',
        city: 'Medelín',
        country: 'Colombia'
	},
	'maria': {
		name: 'Maria José',
		img: './img/maria.jpg',
        city: 'Lisboa',
        country: 'Portugal'
	},
	'patricia': {
		name: 'Patricia da Silva',
		img: './img/patricia.jpg',
        city: 'Manaus',
        country: 'Brazil'
	},
	'sebastiao': {
		name: 'Sebastião da Silva',
		img: './img/sebastiao.jpg',
        city: 'Buenos Aires',
        country: 'Argentina'
	}
}

function renderAlunos(alunos){
	function item(aluno) {
		return `
			<li>
				<img src=${aluno.img}>
				<div>
                    <span>${aluno.name}</span>       
                    <span class="localiza">${aluno.city}, ${aluno.country}</span>	
                </div>  						
			</li>
		`
	}
	const elements = Object.keys(alunos).map((aluno, index) => {
		return item(alunos[aluno])
	})
	resultado.insertAdjacentHTML('beforeend', elements)
}

function filter(valorDigitado){
	let newAlunos = [] 
		
	Object.keys(ALUNOS).forEach(aluno => {
		if ((ALUNOS[aluno].name.toLowerCase()).includes(valorDigitado.toLowerCase())) {
			newAlunos.push(ALUNOS[aluno]) 
		}else if((ALUNOS[aluno].city.toLowerCase()).includes(valorDigitado.toLowerCase())) {
			newAlunos.push(ALUNOS[aluno]) 
		}else if((ALUNOS[aluno].country.toLowerCase()).includes(valorDigitado.toLowerCase())) {
			newAlunos.push(ALUNOS[aluno]) 
		}
	}) 
	resultado.innerHTML = ''	
	renderAlunos(newAlunos)
} 

const filterElement = document.querySelector('#c-filter');

filterElement.addEventListener('change', (event) => {
	const value = event.target.value
	filter(value)
})

renderAlunos(ALUNOS)
