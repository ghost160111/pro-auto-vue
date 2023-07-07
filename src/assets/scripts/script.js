import { gallery } from './data.json'

try {
  document.addEventListener('DOMContentLoaded', () => {
    ;(function () {
      let i
      let link = document.querySelectorAll('.link')
      for (i = 0; i < link.length; i++) {
        link[i].addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        })
      }
      for (i = 0; i < gallery.length; i++) {
        let location = document.querySelector('.images-list')
        let list = document.createElement('li')
        let imageTags = document.createElement('img')
        let attributes = [
          imageTags.setAttribute('class', 'image'),
          imageTags.setAttribute('src', gallery[i]),
          imageTags.setAttribute('alt', 'JS logo')
        ]
        location.appendChild(list)
        list.appendChild(imageTags)
      }
    })()
  })
} catch (error) {
  console.log(`${error.name}: ${error.message}`)
}
