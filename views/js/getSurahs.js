const surahMenusElements = document.getElementsByClassName('surahs')[0];

fetch("https://quran-api-id.vercel.app/surahs")
    .then((res) => res.json())
    .then((json) => {
    for (var i = 0; i < 114; i++) {
        const name = json[i].name;
        const number = json[i].number;
        let surahs_data = `<div class="surah" onclick="changeSurah(${number})">${number}. ${name}</div>`
        surahMenusElements.innerHTML += surahs_data;
    }
});