
const customer = customers.results

// Grab container node
let container = document.querySelector(".container")

// Create header node
let header = document.createElement("header")
let h1 = document.createElement("h1")
let h1Text = document.createTextNode("INTERNAL COMPANY DIRECTOR")
header.append(h1)
h1.append(h1Text)
header.append(h1)
container.append(header)



//*****************************************************
// CREATING CUSTOMER LIST - TEMPLATE LITERAL WAY (ES6)
//*****************************************************
let eachCustomer = ""
for (let i = 0; i < customer.length; i++) {
  eachCustomer += `
    <div>
       <img src=${customer[i].picture.large} width="250">
       <p class="name">${customer[i].name.first} ${customer[i].name.last}</p>
       <p class="email">${customer[i].email}</p>
       <p>${customer[i].location.street}</p>
       <p>${customer[i].location.city} ${customer[i].location.state} ${customer[i].location.postcode}</p>
       <p>${customer[i].phone}</p>
       <p class="ssn">${customer[i].id.value}</p>
    </div>
  `
}
main.innerHTML = eachCustomer
