let form = document.querySelector(".form-container")
console.log(form)

let dataStore = {
    email: null,
    password: null
}
console.log(dataStore)

form.addEventListener("submit", event => {
    // event.preventDefault()
    console.log(event)
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    dataStore.email = event.target[0].value
    dataStore.password = event.target[1].value
    console.log(dataStore)
})

// URL Query Parameter Notes from Day Ahead

// Accessing Query parameters from the url in the browser
// document.location.search returns URL query String
// Utilize new URLSearchParams() method pass the string into it
// Use .get("property") method on an instance of URLSearchParams to get value of a property

// ! NOTICE
/* 
    This code will only run when:
    * event.preventDefault() is commented out
    * form method is GET
    * you hit "Go" with data inside the form
*/

let url = document.location.search
console.log("URL STRING", url)
let params = new URLSearchParams(url)
console.log("URL AS OBJECT", params)
let email = params.get("email")
console.log("GETTING INDIVIDUAL PROPERTY OUT", email)