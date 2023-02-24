const sounds = ['abushawqi', 'alasfor', 'dinoandfrog', 'skeleton']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('button', 'is-dark', 'm-2')

    btn.innerText = sound
    document.getElementById('buttons').appendChild(btn)
})