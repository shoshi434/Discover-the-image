const currentUser=JSON.parse(sessionStorage.getItem("currentUser"))//מקבל את המשתמש הנוכחי מהסשן סטורג
const h1=document.querySelector("#h1")
const win=document.querySelector("#win")
const lose=document.querySelector("#lose")
h1.textContent=currentUser.name+", Your score is:"
win.textContent="win:    "+currentUser.win
lose.textContent="lose:    "+currentUser.lose