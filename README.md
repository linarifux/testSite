# testSite
<h2>Code Assessment for internship application</h2>

<code> Please, follow the instructions below to test the endpoints </code>

<h2> Customer Section </h2>

<h3>Create a customer account : </h3>
Send a <code>POST</code> request to : <code>localhost:5000/api/customer/signup</code> with the parameter <code> firstName, lastName, email, password, confirmPassword</code>
and <code>birthday</code>(MM/DD)
<br>
<h3>Customer Login : </h3>
Send a <code>POST</code> request to : <code>localhost:5000/api/customer/login</code> with the parameter <code>email</code> and <code>password</code>.
You will get a token back after successfully posting the above two requests. Please, save it for future use (to get a customer profile)
<br>
<h3>Reading a customer profile : </h3>
Send a <code>GET</code> request to : <code>localhost:5000/api/customer/me</code> and pass the <code>token</code> as a <code>Authorization</code> header like this: 
<code> Bearer yourtoken </code> 
<br><br></br>
<h2>Product Section </h2>
<h3>Create a new product : </h3>
Send a <code>POST</code> request to : <code>localhost:5000/api/products</code> with the parameter <code>title, description, price, onSale, quantity, reviews, colors, sizes, mainImage, images</code>
and <code>sku</code>
Note: only <code> title, description, price</code> and <code>sku</code> are mandatory fields. Authentication will be added after adding the seller section codes

<h3>Fetching all the products :</h3>
Send a <code>GET</code> request to : <code>localhost:5000/api/products</code> to fetch all the products you have created. This will return products with title, main image and price.

<h3>Fetching a single product :</h3>
Send a <code>GET</code> request to : <code>localhost:5000/api/products/:id</code> to fetch a single product of that id. Replace the <code> :id </code> with a product ID. This will return all the fields of the product.

<h3>I used POSTMAN to make the requests and check the endpoints </h3>

<h1>Thank you</h1>
