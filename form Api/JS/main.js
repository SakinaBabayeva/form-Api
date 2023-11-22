const nameInput=document.getElementById("exampleInputName")
const surnameInput=document.getElementById("exampleInputSurname")
const ageInput=document.getElementById("exampleInputAge")
const emailInput=document.getElementById("exampleInputEmail")
const myform=document .getElementById("myForm")

function fetchPost (event){
    event.preventDefault();

 axios.post("https://655c3159ab37729791aa0622.mockapi.io/:students",{
        name:nameInput.value,
        surname:surnameInput.value,
        age:ageInput.value,
        email:emailInput.value
    })
    .then(res=>{
        console.log(res);
    })
}
myform.addEventListener('submit',fetchPost)




const username=document.getElementById("exampleInputUsername")
const email=document.getElementById("exampleInputEmail")
const password=document.getElementById("exampleInputPassword")
const adress=document.getElementById("exampleInputAdress")
const Country=document.getElementById("exampleInputCountry")
const MyForm=document.getElementById("myForm")

function fetchPost (event) {
    event.preventDefault();

    axios.post("https://655c3159ab37729791aa0622.mockapi.io/:students",{
    username:username.value,
    email:email.value,
    password:password.value,
    adress:adress.value,
    country:country.value

    }).then(res=>{
        console.log(res);
    })
}
myForm.addEventListener('submit', fetchPost)

FORM-3

const title=document.getElementById("title")
const price=document.getElementById("price")
const description=document.getElementById("description")
const discount=document.getElementById("discount")
const stock=document.getElementById("stock")
const quality=document.getElementById("quality")
const country=document.getElementById("country")
const customersCount=document.getElementById("customersCount")
const category=document.getElementById("category")
const city=document.getElementById("city")
const myForm=document.getElementById("myForm")

function fetchPost (event){
    event.preventDefault();
    
axios.post("https://655c3159ab37729791aa0622.mockapi.io/:students",{
    title:title.value,
    price:price.value,
    description:description.value,
    discount:discount.value,
    stock:stock.value,
    quality:quality.value,
    country:country.value,
    customersCount:customersCount.value,
    category:category.value,
    ciyt:city.value

}) .then(res=>{
    console.log(res);
})
}
myForm.addEventListener('submit', fetchPost)

        



