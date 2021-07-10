function generateCss() {
    let inset = document.getElementById('inset').checked
    inset = inset ? ' inset' : ''

    let offsetX = document.getElementById('offsetX').value
    let offsetY = document.getElementById('offsetY').value
    let blur = document.getElementById('blur').value
    let stretch = document.getElementById('stretch').value

    let color = document.getElementById('color').value
    let red = parseInt(color.slice(1,3),16)
    let green = parseInt(color.slice(3,5),16)
    let blue = parseInt(color.slice(5,7),16)
    let opacity = document.getElementById('opacity').value

    let result = document.getElementById('result')
    let textarea = document.getElementById('cssCode')

    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`
    
    textarea.value = 'box-shadow:' + str
    result.style.boxShadow = str
  }

for(let item of document.querySelectorAll('input')) {
  item.addEventListener('input', generateCss)
}

  generateCss()