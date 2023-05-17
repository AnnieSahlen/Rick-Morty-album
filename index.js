async function fetchData() {
  let response = await fetch('https://rickandmortyapi.com/api/character')
  // console.log(response)
  let data = await response.json()
  let array = data.results
  // console.log(array)

  return array
}

function displayCharacters(array) {
  // let array = data.results
  let characters = []
  let characterName = document.querySelectorAll('.name')
  // For-loopar datan och skjutsar in karaktärernas namn till arrayen "characters"
  for (let i = 0; i < array.length; i++) {
    characters.push(array[i].name)
    //ForEach-loopar alla p-element med klass "name" och ändrar innehållet till namnen från for-loopen
    characterName.forEach((characterName, i) => {
      characterName.textContent = characters[i]
    })
  }
  // Hämtar fem bilder och skjutsar in i array "imageArray"
  let imageArray = []
  let img = document.querySelectorAll('.image')
  for (let i = 0; i <= 4; i++) {
    imageArray.push(array[i].image)
    // console.log('images', imageArray)
    // Loopar en gång för varje img-element och placerar bilderna från imageArray
    img.forEach((img, i) => {
      img.setAttribute('src', imageArray[i])
    })
  }
  // Hämtar alla element från html-filen
  let moreInfoButton = document.querySelectorAll('.moreInfoButton')
  let over = document.querySelector('#over')
  let overUl = document.querySelector('#overUl')
  let liName = document.querySelector('#liName')
  let liStatus = document.querySelector('#liStatus')
  let liSpecies = document.querySelector('#liSpecies')
  let liGender = document.querySelector('#liGender')
  let liOrigin = document.querySelector('#liOrigin')
  let liLocation = document.querySelector('#liLocation')
  let liEpisode = document.querySelector('#liEpisode')
  let blaf = 'f'
  // Klick på inforutan ger display "none".
  over.addEventListener('click', () => {
    over.style.display = ''
  })
  //Applicerar event på alla knappar.
  //När man klickar på knappen visas inforutan via display och funktionen showInfo().
  //
  for (let i = 0; i < moreInfoButton.length; i++) {
    moreInfoButton[i].addEventListener('click', () => {
      console.log(over.style.display)
      if (over.style.display === '') {
        over.style.display = 'block'
        // over.style = 'display: block'
        console.log('dsdfsf')
      } else {
        over.style.display = none
      }
      showInfo(i)
    })
  }

  // addEventListener('click', (event) => {
  //   // console.log(event.target.id)
  //   // let over = document.querySelector('#over')

  //   if (over.style.display !== '') {
  //     console.log(event.target.id)

  //     // over2.style.display = ''
  //     over.style = "display = ''"
  //   }
  // })

  // Ger en lista med info om karaktären.
  function showInfo(i) {
    liName.textContent = `Name: ${characters[i]}`
    liStatus.textContent = `Status: ${array[i].status}`
    liSpecies.textContent = `Species: ${array[i].species}`
    liGender.textContent = `Gender: ${array[i].gender}`
    liOrigin.textContent = `Origin: ${array[i].origin.name}`
    liLocation.textContent = `Current location: ${array[i].location.name}`
    // liEpisode.textContent = `In episodes: ${array[i].episode}`
  }
}

// Går att göra alla fetches i början med async och sen först när man vill använda resultatet kan man använda await, som väntar in svaren. Då går koden snabbare.
async function main() {
  let characters = fetchData()
  //funkar let characters = awit fetchData()

  // funkar inte Promise.all([characters]).then(displayCharacters(characters))

  // funkar inte await Promise.all([characters])
  // displayCharacters(characters)

  displayCharacters(await characters)

  // let a = 5

  // fetchData().then((characters) => {
  //   console.log(characters)
  //   displayCharacters(characters)
  // })
}
let a = null
// console.log(document.currentScript.getAttribute('one'))

main()

//farlig å lägga in kod här utan .then efter mainU()
// a + 3
// let f = 76

// console.log(array)

// fetch('https://rickandmortyapi.com/api/character')
//   .then((response) => response.json())
//   .then((data) => {
//     let array = data.results

//     let characters = []
//     let characterName = document.querySelectorAll('.name')

//     // For-loopar datan och skjutsar in karaktärernas namn till arrayen "characters"
//     for (let i = 0; i < array.length; i++) {
//       characters.push(array[i].name)
//       //ForEach-loopar alla p-element med klass "name" och ändrar innehållet till namnen från for-loopen
//       characterName.forEach((characterName, i) => {
//         characterName.textContent = characters[i]
//       })
//     }
//     // Hämtar fem bilder och skjutsar in i array "imageArray"
//     let imageArray = []
//     let img = document.querySelectorAll('.image')

//     for (let i = 0; i <= 4; i++) {
//       imageArray.push(array[i].image)
//       // console.log('images', imageArray)

//       // Loopar en gång för varje img-element och placerar bilderna från imageArray
//       img.forEach((img, i) => {
//         img.setAttribute('src', imageArray[i])
//       })
//     }
//     // Hämtar alla element från html-filen
//     let moreInfoButton = document.querySelectorAll('.moreInfoButton')
//     let over = document.querySelector('#over')
//     let overUl = document.querySelector('#overUl')
//     let liName = document.querySelector('#liName')
//     let liStatus = document.querySelector('#liStatus')
//     let liSpecies = document.querySelector('#liSpecies')
//     let liGender = document.querySelector('#liGender')
//     let liOrigin = document.querySelector('#liOrigin')
//     let liLocation = document.querySelector('#liLocation')
//     // let liEpisode = document.querySelector('#liEpisode')

//     let blaf = 'f'

//     // Klick på inforutan ger display "none".
//     over.addEventListener('click', () => {
//       over.style.display = 'none'
//     })

//     //Applicerar event på alla knappar.
//     //När man klickar på knappen visas inforutan via display och funktionen showInfo().
//     //
//     for (let i = 0; i < moreInfoButton.length; i++) {
//       moreInfoButton[i].addEventListener('click', () => {
//         if (over.style.display === 'none') {
//           over.style.display = 'block'
//         } else {
//           over.style.display = 'none'
//         }
//         showInfo(i)
//       })
//     }

//     // Ger en lista med info om karaktären.
//     function showInfo(i) {
//       liName.textContent = `Name: ${characters[i]}`
//       liStatus.textContent = `Status: ${array[i].status}`
//       liSpecies.textContent = `Species: ${array[i].species}`
//       liGender.textContent = `Gender: ${array[i].gender}`
//       liOrigin.textContent = `Origin: ${array[i].origin.name}`
//       liLocation.textContent = `Current location: ${array[i].location.name}`
//       // liEpisode.textContent = `In episodes: ${array[i].episode}`
//     }
//   })
