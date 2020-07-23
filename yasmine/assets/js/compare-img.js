let compareButton = document.getElementById('compare-button');
let messages = document.getElementsByClassName('alert');
for (message of messages) {
    message.style.display = 'none'
}
compareButton.addEventListener('click', function () {
    for (i = 0; i < messages.length; i++) {
        if (messages[i].style.display == 'none' && messages[i + 1].style.display != 'none') {
            messages[i].style.display = 'block';
            messages[i + 1].style.display = 'none';
        } else if (messages[i].style.display != 'none' && messages[i + 1].style.display == 'none') {
            messages[i].style.display = 'none';
            messages[i + 1].style.display = 'block';
        } else if (messages[i].style.display == 'none' && messages[i + 1].style.display == 'none') {
            messages[i].style.display = 'none';
            messages[i + 1].style.display = 'block';
        }
    }
}, false)