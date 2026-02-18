const express=require('express');
const app=express();
require('./src/config/db');
require('dotenv').config();
const user=require('./src/models/usermodel');
const PORT=process.env.PORT | 5000;
app.use(express.json());
app.use('/ecomapp',user);

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bajrang Prajapati | Portfolio</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', sans-serif;
      }

      body {
        background: linear-gradient(135deg, #1f1c2c, #928dab);
        color: white;
        scroll-behavior: smooth;
      }

      header {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      h1 {
        font-size: 50px;
        animation: fadeDown 1.5s ease;
      }

      h2 {
        margin-top: 15px;
        font-weight: 300;
        animation: fadeUp 2s ease;
      }

      .btn {
        margin-top: 30px;
        padding: 12px 30px;
        border-radius: 30px;
        border: none;
        font-size: 16px;
        cursor: pointer;
        background: white;
        color: #1f1c2c;
        transition: 0.3s;
      }

      .btn:hover {
        transform: scale(1.1);
        background: #00ffcc;
      }

      section {
        padding: 80px 20px;
        text-align: center;
      }

      .skills-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
      }

      .skill-card {
        background: rgba(255,255,255,0.1);
        padding: 25px;
        border-radius: 15px;
        width: 200px;
        transition: 0.3s;
        backdrop-filter: blur(10px);
      }

      .skill-card:hover {
        transform: translateY(-10px);
        background: rgba(255,255,255,0.2);
      }

      footer {
        padding: 20px;
        text-align: center;
        background: rgba(0,0,0,0.4);
      }

      @keyframes fadeDown {
        from {opacity:0; transform:translateY(-40px);}
        to {opacity:1; transform:translateY(0);}
      }

      @keyframes fadeUp {
        from {opacity:0; transform:translateY(40px);}
        to {opacity:1; transform:translateY(0);}
      }

      @media(max-width: 768px){
        h1 { font-size: 35px; }
        .skill-card { width: 150px; }
      }
    </style>
  </head>

  <body>

    <header>
      <h1>Bajrang Prajapati</h1>
      <h2>Full Stack Flutter Developer | 1 Year Experience</h2>
      <button class="btn" onclick="scrollToSkills()">View My Skills</button>
    </header>

    <section id="skills">
      <h1>My Skills</h1>
      <div class="skills-container">
        <div class="skill-card">Flutter</div>
        <div class="skill-card">Node.js</div>
        <div class="skill-card">Firebase</div>
        <div class="skill-card">AI</div>
        <div class="skill-card">Machine Learning</div>
        <div class="skill-card">Blockchain</div>
      </div>
    </section>

    <section>
      <h1>About Me</h1>
      <p style="max-width:700px; margin:20px auto; line-height:1.6;">
        I am a passionate Full Stack Flutter Developer with approximately 1 year of experience 
        building scalable mobile applications and backend systems. 
        I specialize in Flutter app development, Node.js backend architecture, 
        Firebase integration, and emerging technologies like AI, Machine Learning, and Blockchain.
      </p>
    </section>

    <section>
      <h1>Contact</h1>
      <button class="btn" onclick="contactMe()">Hire Me</button>
    </section>

    <footer>
      © 2026 Bajrang Prajapati | All Rights Reserved
    </footer>

    <script>
      function scrollToSkills() {
        document.getElementById("skills").scrollIntoView();
      }

      function contactMe() {
        alert("Thank you for your interest! Contact me at: bajrang@email.com");
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT=${PORT}`);
});
