const inputText = document.querySelector("#text");
const statElem = document.querySelector("#stat");

 console.log(new WordCounter(inputText));

 const render = (event) => {
    console.log(event);
    statElem.innerHTML =`<p>You've written 
    <span class="highlight">${event.detail.wordStat.word} words</span> 
    and <span class="highlight">
    ${event.detail.wordStat.characters} characters
    </span>.
    </p>`;
}


inputText.addEventListener("count", render); 