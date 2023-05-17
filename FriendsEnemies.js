fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {
    let array = data.results

    let container = document.querySelector('#container')

    //Lägger till alla element plus klasser för karaktärskorten.
    // Loopen börjar på fem för att inte få med familjen.
    for (let i = 5; i < array.length; i++) {
      let cardDiv = document.createElement('div')
      cardDiv.classList.add('card')

      let profileImg = document.createElement('img')
      profileImg.classList.add('image')
      profileImg.setAttribute('src', array[i].image)

      let infoSquare = document.createElement('div')
      infoSquare.classList.add('infoSquare')

      let p = document.createElement('p')
      p.classList.add('name')

      let pText = document.createTextNode(array[i].name)

      let moreInfoButton = document.createElement('p')
      moreInfoButton.classList.add('moreInfoButton')
      // moreInfoButton.setAttribute('href', '') // Ska ändra till annat än p-element.

      let moreInfoText = document.createTextNode('More info')

      container.appendChild(cardDiv)
      cardDiv.appendChild(profileImg)
      cardDiv.appendChild(infoSquare)
      infoSquare.appendChild(p)
      p.appendChild(pText)
      cardDiv.appendChild(moreInfoButton)
      moreInfoButton.appendChild(moreInfoText)
    } // Slut på loop.

    let moreInfoButton = document.querySelectorAll('.moreInfoButton')
    let over = document.querySelector('#over')
    // let overUl = document.querySelector('#overUl')
    // let liName = document.querySelector('#liName')
    // let liStatus = document.querySelector('#liStatus')
    // let liSpecies = document.querySelector('#liSpecies')
    // let liGender = document.querySelector('#liGender')
    // let liOrigin = document.querySelector('#liOrigin')
    // let liLocation = document.querySelector('#liLocation')
    // let liEpisode = document.querySelector('#liEpisode')

    // Klick på inforutan ger display "none".
    over.addEventListener('click', () => {
      over.style.display = 'none'
    })

    for (let i = 0; i < moreInfoButton.length; i++) {
      moreInfoButton[i].addEventListener('click', () => {
        if (over.style.display === 'none') {
          over.style.display = 'block'
        } else {
          over.style.display = 'none'
        }
        showInfo(i, array)
      })
    }
  })

function showInfo(i, array) {
  // console.log(blaf)

  liName.textContent = `Name: ${array[i + 5].name}`
  liStatus.textContent = `Status: ${array[i + 5].status}`
  liSpecies.textContent = `Species: ${array[i + 5].species}`
  liGender.textContent = `Gender: ${array[i + 5].gender}`
  liOrigin.textContent = `Origin: ${array[i + 5].origin.name}`
  liLocation.textContent = `Current location: ${array[i + 5].location.name}`
}
