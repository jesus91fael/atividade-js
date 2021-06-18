const textarea = document.querySelector('.c-txt__sug')
const container = document.querySelector('.c-suggestions').value

textarea.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addSuggetions(e.target.value.trim())		
	}
})

let newSuggestion
let allSuggestions = []

function addSuggetions(suggestionText) {
    textArea.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            let txtAreaValue = textarea.value
            e.preventDefault()
            newSuggestion `
                <article class="c-sug-__items">
                    <div class="c-votes">
                        <span class="soma"></span>
                        <span class="c-qtd"></span>
                        <span>votes</span>
                    </div>                      
                    <div class="c-votes c-desc">${suggestionText}</div>                                  
                </article>  
            `

            allSuggestions = [...allSuggestions, newSuggestion]

            count++
            container.innerText = count
            container.innerHTML += newSuggestion
            document.querySelector("textarea").value = ""
            //suggestionsBlock.length++
        }
    })

	container.appendChild(newSuggestion);
	
	// increase suggestions_count
}

const init = () => {
    addSuggetions()
    
}


init()
