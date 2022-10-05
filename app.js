const get = (query) => {
    const param = new URLSearchParams (
        window.location.search
    );
    return param.get(query);
}

let form = document.querySelector('#form')
// let button = document.querySelector('#submit')
const users = [
    {
        email: 'edwingodswill@gmail.com',
        password: '1234' 
    },
    {
        email: 'brightergood@gmail.com',
        password: '2233'
    },
    {
        email: 'omonighofaith@gmail.com',
        password: '4567'
    }
]

const login = (email, password) => {
    logged = false;
    users.forEach(user => {
        if (user.email == email && user.password == password){
            logged = true
        }
    });

    return logged
}

//API Login
let email = get('email')
let password = get('password')
let apiLogin = login (email, password)
if (apiLogin){
    console.log('login successful')
}

//Form Login
window.addEventListener('load', function(e){
    //Login 
    form.addEventListener ('submit', function (e) {
        e.preventDefault()
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        let authorize = login(email, password)

        if (authorize){
            alert('You have successfully logged in')
        }
        else{
            alert('Incorrect email or password')
        }

        console.log('logged: '+logged)

    })


    //Signup


})

