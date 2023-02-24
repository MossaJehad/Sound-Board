const sounds = ['abushawqi', 'alasfor', 'dinoandfrog', 'skeleton']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('button', 'is-dark', 'm-2', 'p-5')

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    btn.innerText = sound
    document.getElementById('buttons').appendChild(btn)
})