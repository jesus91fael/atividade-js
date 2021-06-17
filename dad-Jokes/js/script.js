const MGS = [
	{
		text: 'OI'
	},
	{
		text: 'Tchau'
	},
	{
		text: 'Bom dia'
	},
	{
		text: 'Boa tarde'
	},
	{
		text: 'Boa noite'
	},
	{
		text: 'Obrigado'
	},
	{
		text: 'Desculpe'
	},
	{
		text: 'Tudo bem com você?'
	},
	{
		text: 'OK'
	}]


const btn = document.querySelector('.c-btn')
const texto = document.querySelector('.c-card__msg')

btn.addEventListener('click', (e) => {
	filter(e.target.value);
})

function renderMGS(mgs){
	function item(items) {
		return `
			${items.text}
		`
	}
	const elements = Object.keys(mgs).map((items, index) => {
		return item(mgs)
	})
	texto.insertAdjacentHTML('beforeend', elements)
}


function filter(){
	let newMGS = ''
	let max = MGS.length

	
	Object.keys(MGS).forEach( () => {

		newMGS = MGS[Math.floor(Math.random() * max ) + 1]
	})
	texto.innerHTML = ''
	renderMGS(newMGS)
	console.log(newMGS)
} 


renderMGS(MGS[1])