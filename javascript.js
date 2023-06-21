const currentYear = new Date()
const year = document.querySelector(".current-year")
year.textContent = currentYear.getFullYear()

// we can use toggel because it verify if an element exist if so it will remove it otherwise it will add it
const [gridName] = document.getElementsByName("grid-outline")
gridName.addEventListener("click", function () {
  const header = document.querySelector(".header")
  header.classList.add("nav-open")
})

const [closeName] = document.getElementsByName("close-outline")
closeName.addEventListener("click", function () {
  const header = document.querySelector(".header")
  header.classList.remove("nav-open")
})

//Sticky navbar

const hero = document.querySelector(".hero")

const obs = new IntersectionObserver(
  function (entries) {
    const [{ isIntersecting }] = entries
    if (!isIntersecting) {
      document.body.classList.add("sticky")
    }
    if (isIntersecting) {
      document.body.classList.remove("sticky")
    }
  },
  {
    //when the element is completely outside the view-h(threshold=0% and vh not root=> root=null)
    root: null,
    threshold: 0,
    //we want the effect to happen 80px before exiting the v-h(ki tab9a 80px wy5roj hero men view port applique)
    rootMargin: "-80px",
  }
)
obs.observe(hero)
