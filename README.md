
Introduction:

    This is a server side application that performs simple crud operations on product id and name using in-memory storage.

Installation:

    Clone or fork this repository into your machine.
    Install NodeJS in your system.
    npm install

Run:

    nodemon product.server.js

Features:

    You can test the endpoints using postman and given urls.

            GET
            get all products
            http://localhost:3000/getAllProducts

            GET
            get a product
            http://localhost:3000/getProduct/5

            POST
            create product
            http://localhost:3000/addProduct

            Body
            raw (json)
            json
            {
                "id": "kjbfjyg",
                "name":"product tyjffftd"
            }

            PUT
            edit product
            http://localhost:3000/editProduct/1

            Body
            raw (json)
            json
            {
                "name":"product tyjffftd"
            }

            DELETE
            delete product
            http://localhost:3000/deleteProduct/2



