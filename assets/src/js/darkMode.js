const btn = document.getElementById('darkBtn')

btn.addEventListener('change', (e) =>{
    document.body.classList.toggle('darkModes', e.target.checked)
})