
const questionElement = document.querySelector("#questionsContainer");
const answersContainer = document.querySelector("#answersContainer");
const box = document.querySelectorAll(".box");
const knowledgImage=document.querySelectorAll(".knowledgImage")
const boxes=document.querySelector("#boxes")
const currentUser=JSON.parse(sessionStorage.getItem("currentUser"))//מקבל את המשתמש הנוכחי מהסשן סטורג
const usersArr=JSON.parse(localStorage.getItem("userArr"))//מקבל את כל מערך המשתמשים מהלוקל סטורג
const imgLife=document.querySelectorAll(".imgLife")
const gif=document.querySelector("#gif")
const page=document.querySelector("#page")
const containerGifWin=document.querySelector("#containerGifWin")
const gifWin=document.querySelector("#gifWin")
const lifes=document.querySelector("#life")
const containerGif=document.querySelector("#containerGif")
let index =currentUser.index3+1// אינדקס של מערך השאלות
let life=3//מספר החיים בהתחלת המשחק
let size = 1;

const showFeedback = (message, isSuccess) => {//פונקציה שמציגה הודעת הצלחה/כישלון
    questionElement.innerHTML = `<h2 style="color: ${isSuccess ? '#00ffff' : 'red'}; font-size: 40px; text-align: center;">${message}</h2>`;
    answersContainer.innerHTML = "";
}

const clearQuestionArea = () => {//פונקציה שמנקה את אזור השאלות
    questionElement.innerHTML = '<div id="instructions"><h2 class="text">בחרו קלף נוסף כדי להמשיך</h2></div>';
    answersContainer.innerHTML = "";
}
const mix=(arr)=>{//פונקציה שמערבבת מערך
   let temp
   for(let i=0;i<arr.length;i++){
      let j=Math.floor(Math.random()*arr.length)
      temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
   }
   return arr
}
const changeImg=()=>{//פונקציה שמחליפה תמונה 
   let randomPicture=Math.floor(Math.random()*knowledgImage.length)
   let selectedImage = knowledgImage[randomPicture].src
   boxes.style.backgroundImage = `url(${selectedImage})`
   boxes.style.backgroundSize = 'cover'
}
for (let i = 0; i < box.length; i++) {
    changeImg()
    box[i].addEventListener('click', () => {
       if(box[i].style.backgroundColor != "transparent"){//(הוסר)גורם שלא יהיה ניתן ללחוץ על אלמנט שכבר שקוף   
       questionElement.innerHTML = `<div style="direction: rtl; text-align: center;">${questions[index].question}</div>`
       answersContainer.innerHTML = ""
      for (let j = 0; j < questions[index].options.length; j++) {
       let currentQuestion=questions[index]//משתנה ששומר מהי השאלה הנוכחית
           const option = document.createElement("button")
           option.classList="option"
           option.textContent =currentQuestion.options[j]
           answersContainer.append(option)
           option.addEventListener('click', () => {
                if (option.textContent === currentQuestion.answer) {
                    questionElement.innerHTML = `<h2 style="color: #00ffff; font-size: 40px; text-align: center;">כל הכבוד! תשובה נכונה! 🎉<br><br>בחרו קלף נוסף כדי להמשיך</h2>`;
                    answersContainer.innerHTML = "";
                    box[i].style.backgroundColor = "transparent"
                    box[i].style.borderColor = "transparent"
                    box[i].style.backgroundImage="none"
                   if(candidPhoto())
                       finishGame("win")
                       
                } 
                else {
                   life--
                   imgLife[life].style.display="none"
                   questionElement.innerHTML = `<h2 style="color: red; font-size: 40px; text-align: center;">אופס... תשובה שגויה ❌<br><br>בחרו קלף נוסף כדי להמשיך</h2>`;
                   answersContainer.innerHTML = "";
                   if(life<=0){
                   finishGame("lose")//שליחה לפונקציית סיום המשחק כשלון
                   }  
                }
                if(index>=questions.length-1){
                  index = 0 // לאתחל בחזרה לשאלה הראשונה
                  mix(questions)//זימון של פונקציית הערבוב כדי שהשאלות לא יעלו שוב באותו הסדר
                }
                else
               index++
               })}
           }})
       }
       const finishGame=(state)=>{//פונקציה שבודקת האם יש נצחון או הפסד ומעדכנת בהתאם וכן מעבירה לדף המתאים 
           if(state==="lose"){
               currentUser.lose++
               page.style.display="none"
               gif.style.display="block"
               containerGif.style.display="flex"
               setTimeout(function() {
                   window.location.href = "../html/win.html"; // החליף לכתובת ה-URL שלך
               }, 5000)
           }
          
           else{
               if(state==="win"){
                   currentUser.win++
                   lifes.style.display="none"
                   page.style.display="none"
                   containerGifWin.style.display="flex"
                   setTimeout(function() {
                       window.location.href = "../html/win.html"; // החליף לכתובת ה-URL שלך
                   }, 5000);
                   
               }
               
           //הוספת מעבר לדף נצחון
           }
           currentUser.index3=index
          for(let i=0;i<usersArr.length;i++){
           if(usersArr[i].name===currentUser.name)
               usersArr[i]=currentUser
           break
          }
          sessionStorage.setItem("currentUser",JSON.stringify(currentUser))
          localStorage.setItem("userArr",JSON.stringify(usersArr))
       }
       const candidPhoto=()=>{//בודקת אם כל התמונה כבר גלויה
           for(let i=0;i<box.length;i++){
               if(box[i].style.backgroundColor!= "transparent")
                   return false
           }
           return true
       }


