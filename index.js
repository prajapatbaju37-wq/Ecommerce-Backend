const express=require('express');
const app=express();
require('./src/config/db');
require('dotenv').config();
const user=require('./src/models/usermodel');
const PORT=process.env.PORT | 5000;
app.use(express.json());
app.use('/ecomapp',user);

app.get('/',async(req,res)=>{
    return res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Welcome | Bajrang Ecom</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
        text-align: center;
      }

      .container {
        background: rgba(0,0,0,0.3);
        padding: 40px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        animation: fadeIn 1.5s ease-in-out;
      }

      h1 {
        font-size: 40px;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
        margin-bottom: 25px;
      }

      button {
        padding: 12px 25px;
        font-size: 16px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        background: white;
        color: #764ba2;
        transition: 0.3s;
      }

      button:hover {
        background: #ffd700;
        transform: scale(1.1);
      }

      @keyframes fadeIn {
        from {opacity: 0; transform: translateY(30px);}
        to {opacity: 1; transform: translateY(0);}
      }
    </style>
  </head>
  <body>

    <div class="container">
      <h1>Welcome to Bajrang E-Commerce 🛒</h1>
      <p>Your one-stop shop for amazing products!</p>
      <button onclick="goToShop()">Shop Now</button>
    </div>

    <script>
      function goToShop() {
        alert("Redirecting to Products Page 🚀");
        window.location.href = "/products";
      }
    </script>

  </body>
  </html>
  `);
});


app.listen(PORT,()=>{
    console.log(`Server is Running on PORT=${PORT}`);
});
