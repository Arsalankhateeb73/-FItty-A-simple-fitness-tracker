const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // prevent default form submission behavior

            // validate username and password
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'fitty' && password === 'fitty123') {
                open("Homepage.html");
                alert("LogIn Succesful");
            } else {
                alert('Username or password incorrect. Please try again.');
            }
        });
        let theme=document.querySelector("#theme");
        let currMode="light";
        let body=document.querySelector("body");
        theme.addEventListener("click",()=>{
            if(currMode==="light"){
                currMode="dark";
           body.classList.add("dark");
           body.classList.remove("light");
            console.log("Dark Mode on");
            
            }
            else{
                currMode="light";
                body.classList.add("light");
                body.classList.remove("dark");
            console.log("Light Mode on");
          
            }
            console.log(currMode);
        }

        );