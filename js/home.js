
const usersArr=JSON.parse(localStorage.getItem("userArr")|| "[]")//מקבל את כל מערך המשתמשים מהלוקל סטורג
//משתני הlog in
const logInButton=document.querySelector("#logInButton")
const formLogIn=document.querySelector("#formLogIn")
const userName=document.querySelector("#userName")
const password=document.querySelector("#password")
const submitLogIn=document.querySelector("#submitLogIn")
const containerFormLogIn=document.querySelector("#containerFormLogIn")
//משתני ההרשמה
const containerFormSignIn=document.querySelector("#containerFormSignIn")
const signInButton=document.querySelector("#signInButton")
const formSignIn=document.querySelector("#formSignIn")
const userName1=document.querySelector("#userName1")
const password1=document.querySelector("#password1")
const confirmPassword1=document.querySelector("#confirmPassword1")
const email1=document.querySelector("#email1")
const submitSignIn=document.querySelector("#submitSignIn")
//הודעות שגיאה כניסה
const error=document.querySelector("#error")
// הודעות שגיאה הרשמה
const errorEmail=document.querySelector("#errorEmail")
const errorPassword=document.querySelector("#errorPassword")
const errorConfirmPassword=document.querySelector("#errorConfirmPassword")
const errorName=document.querySelector("#errorName")
let newUser={}//משתנה ששומר את כל הפרטים של המשתמש שנרשם כרגע
// בעת לחיצה יופיע טופס הכניסה וכן כפתור מעבר להרשמה למקרה שהוא משתמש חדש 
logInButton.addEventListener('click', () => {
containerFormLogIn.style.display="block"
containerFormSignIn.style.display="none"
})
//בעת לחיצה יופיע טופס ההרשמה
signInButton.addEventListener('click', () => {
containerFormLogIn.style.display="none"
containerFormSignIn.style.display="block"
})
//פונקציית בדיקת תקינות מייל
const isValidEmail = (email) => {
    if (email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@")) 
        return true
    else
   errorEmail.textContent="האימייל לא תקין" 
   errorEmail.style.display="block"
    
}
//בדיקת תקינות סיסמה
const isGoodPassword = (password) => {
    if (String(password).length>=6) 
        return true;
   errorPassword.textContent="הסיסמה צריכה להכיל לפחות 6 תווים"
   errorPassword.style.display="block"
}
//ביקת אימות הסיסמה
const isGoodConfirmPassword=(ConfirmPassword)=>{
if(ConfirmPassword===password1.value)
    return true
 errorConfirmPassword.textContent="האימות לא תואם לסיסמה"
 errorConfirmPassword.style.display="block"
}
//בדיקה אם השם קיים כבר
const chekUserNameExist=(e)=>{
    for(let i=0;i<usersArr.length;i++){
        if(usersArr[i].name===userName1.value){
        errorName.textContent="שם משתמש תפוס אנא בחר שם אחר"
        errorName.style.display="block"
        return false
        
    }     
    }
 return true
}
formSignIn.addEventListener("submit",(e)=>{//לחיצה על שליחה בהרשמה
    e.preventDefault()
    errorEmail.textContent=""
    errorPassword.textContent=""
    errorConfirmPassword.textContent=""
    errorName.textContent="" 
    if(isGoodPassword(password1.value)&&isValidEmail(email1.value)&&isGoodConfirmPassword(confirmPassword1.value)&&chekUserNameExist(userName1.value)){
         newUser={name:userName1.value,password:password1.value,email:email1.value,win:0,lose:0,index1:0,index2:0,index3:0}
         console.log(newUser)
        usersArr.push(newUser)
        localStorage.setItem("userArr",JSON.stringify(usersArr))
        alert("נרשמת בהצלחה! עבור לכניסה")
        
    }
    email1.value=""
    userName1.value=""
    password1.value=""   
    confirmPassword1.value=""   
})
//פונקציות הכניסה
//בדיקה אם שם המשתמש קיים ואם הסיסמה תואמת, אם כן מחזיר אמת ושומר אותו בסשן סטורג'- ועובר לדף המשחקים
const chekUserExist=(name,password)=>{
    for(let i=0;i<usersArr.length;i++){
        if(usersArr[i].name===name&&usersArr[i].password===password){
            let currentUser=usersArr[i]
            sessionStorage.setItem("currentUser",JSON.stringify(currentUser))//שומר בסשן סטורג' מיהו המשתמש הנוכחי
             return true
        }
    }
}

//בעת לחיצה על כפתור השליחה אם השם והסיסמה קיימים ותואמים עובר למשחק, אם לא מציג הודעת שגיאה
formLogIn.addEventListener("submit",(e)=>{
e.preventDefault()
error.textContent="" 
if(chekUserExist(userName.value,password.value)){
     window.location.href="../html/gamesMenue.html"
    }
    else
    {
        error.style.display="block"
        error.textContent="שם משתמש או סיסמה אינם נכונים"
    }
    password.value=""
    userName.value=""
})

