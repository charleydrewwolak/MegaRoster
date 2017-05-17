{
    const personForm = document.querySelector('form')
    
    function removeButton() {
        const button = document.createElement('button')
        button.textContent = 'x'
        button.addEventListener('click', removeListElement)
        return button
    }

    function promoteButton() {
        const button = document.createElement('button')
        button.textContent = 'promote'
        button.addEventListener('click', promoteStyle)
        return button
    }

    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')
        const rButton = this.removeButton()
        const pButton = this.promoteButton()
        const personName = document.createElement('li')
        personName.textContent = form.personName.value
        personName.appendChild(rButton)
        personName.appendChild(pButton)
        details.appendChild(personName)
    }
    const removeListElement = (ev) => {
        const delist = ev.target.parentNode
        const details = document.querySelector('.details')
        details.removeChild(delist)
    }

    const promoteStyle = (ev) => {
        const name = ev.target.parentNode
        name.style.color = 'red'
        //const details = document.querySelector('.details')
    }
    personForm.addEventListener('submit', handleSubmit)
    
}