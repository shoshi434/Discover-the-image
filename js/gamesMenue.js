const currentUser=JSON.parse(sessionStorage.getItem("currentUser"))//מקבל את המשתמש הנוכחי מהסשן סטורג
const title=document.querySelector("#title")
title.textContent="hello"+" "+currentUser.name