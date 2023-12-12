const path = window.location.pathname.split('/')[1]
const selected = document.getElementById(`nav-${path}`)
selected.className += ' selected'
