const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                </div>
                <div class="details">
                    <p>Parts of Speech : ${data[0].meanings[0].partOfSpeech}</p>
                </div>
                <p class="word-meaning">
                   Meaning : ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    Example : ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
        })
        .catch(() => {
            result.innerHTML = `<p class="error">Couldn't Find The Word</p>`;
        });
});