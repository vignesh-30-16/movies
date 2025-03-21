let submit = document.getElementById("btn");
let rform=document.getElementById("form")


let array = JSON.parse(localStorage.getItem("user") || "[]");

if (submit) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
     

        if(username && password !== ""){
            array.push({name:username,pass:password})
            localStorage.setItem("user", JSON.stringify(array));
            localStorage.setItem('userName',`${username}`);

            alert("Registration successful");
            window.location.href = "dashboard.html"; 
            rform.reset();   

        }else{
            alert('Please enter the value');
        }
        
    })
   
}
 