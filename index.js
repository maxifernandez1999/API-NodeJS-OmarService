const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const htmlPortfolio = require('./constants/portfolio');
const htmlOmarService = require('./constants/omarservice');
const port = 3000;
const app = express();
// { origin: "*" }
app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT || port, () => {
  console.log(`The server started on port ${port} !!!!!!`);
});

app.get("/", (req, res) => {
  res.send(
    `${htmlPortfolio}`
  );
});

function notNull(){
  if(response.email !== null,
    response.name !== null,
    response.number !== null,
    response.subject !== null,
    response.message !== null){
      return true;
    }
}
app.post("/", (req, res) => {
  let user = req.body;
  console.log(user.email)
  console.log(user.name)
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "fmaximiliano443@gmail.com",
      pass: "wsgyjcudhvrxzhoc",
    },
  });
  let mailOptions = {
    from: "fmaximiliano443@gmail.com", // sender address
    to: user.email,
    subject: `Gracias ${user.name} por ponerte en contacto 😎`, // Subject line
    html: htmlPortfolio,
  };
 

  // send mail with defined transport object
  let info = transporter.sendMail(mailOptions).then((response) => {
    res.send("ok");
  });
});
app.post("/sendmail", (req, res) => {
  let user = req.body;
  console.log(user.email)
  console.log(user.name)
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "omarfernandezservice@gmail.com",
      pass: "eziqhkludjngoznv",
    },
  });
  let mailOptions = {
    from: "omarfernandezservice@gmail.com", // sender address
    to: user.email,
    subject: `Gracias ${user.name} por ponerte en contacto!`, // Subject line
    html: htmlOmarService,
  };
 

  // send mail with defined transport object
  let info = transporter.sendMail(mailOptions).then((response) => {
    res.send("ok");
  });
});
