let x = window.setInterval(() => {
  if (document.body != null && !document.body.hidden){
    document.body.hidden = true
  }
}, 100)

document.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    window.clearInterval(x)
    document.body.hidden = false
  }, 200)
})

