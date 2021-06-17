const textarea = document.querySelector('.c-txt__sug')
const container = document.querySelector('.c-suggestions')

textarea.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addSuggetions(e.target.value.trim())		
	}
})

function addSuggetions(suggestionText) {
	newSuggestion.innerHTML = `
        <article class="c-sug-__items">
            <div class="c-votes">
                <span class="soma"></span>
                <span class="c-qtd"></span>
                <span>votes</span>
            </div>                      
            <div class="c-votes c-desc">${suggestionText}</div>                                  
        </article>  
	`;
	container.appendChild(newSuggestion);
	
	// increase suggestions_count
	suggestions_count.innerText = +suggestions_count.innerText + 1;
}

