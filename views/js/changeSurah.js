const viewerIframeElements = document.getElementById('viewer')
const quranDisplayer = document.querySelectorAll(".quran-displayer")[0]

const changeSurah = (number) => {
    if (!viewerIframeElements) {
        quranDisplayer.innerHTML = `<iframe src="/view?s=${number}" id="viewer" frameborder="0" style="display:block; width:100%; height: 100vh"></iframe>`
    }

    viewerIframeElements.src = `/view?s=${number}`;
}