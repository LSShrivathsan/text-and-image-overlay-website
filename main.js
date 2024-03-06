function overlay() {
    overlayText();
    overlayImage();
}

function overlayText() {
    // Get values from the form for text overlay
    const name = document.getElementById('name').value;
    const nameX = parseInt(document.getElementById('nameX').value);
    const nameY = parseInt(document.getElementById('nameY').value);

    // Get the overlayText element
    const overlayContainer = document.getElementById('overlayContainer');

    // Set the styles for the text element
    const textElement = document.createElement('div');
    textElement.innerHTML = name;
    textElement.style.position = 'absolute';
    textElement.style.top = `${nameY}px`;
    textElement.style.left = `${nameX}px`;
    textElement.style.fontSize = '44px';

    overlayContainer.innerHTML = ''; // Clear previous overlay
    overlayContainer.appendChild(textElement);
}

function overlayImage() {
    const userImageInput = document.getElementById('userImage');
    const overlaySize = parseInt(document.getElementById('overlaySize').value);
    const overlayX = parseInt(document.getElementById('overlayX').value);
    const overlayY = parseInt(document.getElementById('overlayY').value);

    const templateImage = document.getElementById('templateImage');
    const overlayContainer = document.getElementById('overlayContainer');

    const reader = new FileReader();

    reader.onload = function (e) {
        const userOverlayImage = document.createElement('img');
        userOverlayImage.src = e.target.result;
        userOverlayImage.style.width = `${overlaySize}%`;
        userOverlayImage.style.position = 'absolute';
        userOverlayImage.style.top = `${overlayY}px`;
        userOverlayImage.style.left = `${overlayX}px`;

        overlayContainer.appendChild(userOverlayImage);
    };

    reader.readAsDataURL(userImageInput.files[0]);
}


