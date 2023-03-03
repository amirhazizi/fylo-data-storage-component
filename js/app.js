// Variables
const slider = document.getElementById("slider")
const storageUsage = document.getElementById("storage-usage")
const storageRemaine = document.querySelector(".float-div h1")

// DOMcontentLoaded
window.addEventListener("DOMContentLoaded", () => {
  const sliderValue = parseInt(slider.value)
  const value = (parseInt(slider.value) / parseInt(slider.max)) * 100
  slider.value = 0
  let intalValue = 0
  let intalValueText = 0
  let initialValueRemaine = 1000
  let incrementSlider = Math.ceil(sliderValue / 1500)
  let increment = Math.ceil(sliderValue / 90)
  const incrementInvertal = setInterval(() => {
    // console.log(intalValue)
    initialValueRemaine -= increment
    intalValue += incrementSlider
    intalValueText += increment
    if (intalValue > value) {
      document.body.style.setProperty("--slidervalue", `${value}%`)
      slider.value = sliderValue
      storageUsage.textContent = `${sliderValue}GB`
      storageRemaine.textContent = slider.max - sliderValue
      clearInterval(incrementInvertal)
      return
    }
    document.body.style.setProperty("--slidervalue", `${intalValue}%`)
    slider.value = intalValueText
    storageUsage.textContent = `${intalValueText}GB`
    storageRemaine.textContent = initialValueRemaine
  }, 18)
})
