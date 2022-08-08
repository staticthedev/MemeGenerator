const submitMeme = document.querySelector('#memeForm');
const picStorage = document.querySelector('#pic-storage');
const imgStored = JSON.parse(localStorage.getItem('imageInfo')) || [];

for (let x = 0; x < imgStored.length; x++) {
    const imageUrl = document.querySelector('#url');
    const topText = document.querySelector('#topText');
    const bottomText = document.querySelector('#bottomText');
    const containerDiv = document.createElement('div');
    const newMeme = document.createElement('img');
    const topTextDiv = document.createElement('div');
    const bottomTextDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container');
    topTextDiv.setAttribute('class', 'top-text');
    bottomTextDiv.setAttribute('class', 'bottom-text');
    newMeme.src = imgStored[x].url;
    topTextDiv.innerText = imgStored[x].topText;
    bottomTextDiv.innerText = imgStored[x].bottomText;
    containerDiv.append(newMeme, topTextDiv, bottomTextDiv);
    picStorage.appendChild(containerDiv);
}

submitMeme.addEventListener('submit', function (event) {
    event.preventDefault();
    const imageUrl = document.querySelector('#url');
    const topText = document.querySelector('#topText');
    const bottomText = document.querySelector('#bottomText');
    const containerDiv = document.createElement('div');
    const newMeme = document.createElement('img');
    const topTextDiv = document.createElement('div');
    const bottomTextDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container');
    topTextDiv.setAttribute('class', 'top-text');
    bottomTextDiv.setAttribute('class', 'bottom-text');
    newMeme.src = imageUrl.value;
    topTextDiv.innerText = topText.value;
    bottomTextDiv.innerText = bottomText.value
    containerDiv.append(newMeme, topTextDiv, bottomTextDiv);
    picStorage.appendChild(containerDiv);

    imgStored.push({ url: imageUrl.value, topText: topText.value, bottomText: bottomText.value });
    localStorage.setItem('imageInfo', JSON.stringify(imgStored));

    submitMeme.reset();
})

picStorage.addEventListener('click', function (event) {

    let imageText = event.target.src;
    const imgStored = JSON.parse(localStorage.getItem('imageInfo')) || [];
    for (let x = 0; x < imgStored.length; x++) {
        if (imgStored[x].url === imageText) {
            imgStored.splice(x, 1);
        }
    }
    localStorage.setItem('imageInfo', JSON.stringify(imgStored));

    if (event.target.tagName == 'IMG') {
        event.target.parentElement.remove();
    }

})
//commit