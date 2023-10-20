const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

const TELEGRAM_BOT_TOKEN = "5967418285:AAFASEGhtyj04PkRucCa3q60BNw20CnVBrY";

const adminIds = ["5309765916", "301286678"];
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

function escape(text) {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}


const app = express();
app.use(cors());
app.use(express.json());
const port = 3101;
let i = 1;
// const transporter = nodemailer.createTransport({
//   host: "mail.alumzone.by",
//   port: 587,
//   tls: { rejectUnauthorized: false },
//   auth: {
//     user: "admin@alumzone.by", // generated ethereal user
//     pass: "7Ar2t}]DPh", // generated ethereal password
//   },
// });
//
// async function sendMail(name, email, number) {
//   const info = await transporter.sendMail({
//     from: '"AlumZone" <admin@alumzone.by>',
//     to: "admin@alumzone.by",
//     subject: "Новая заявка",
//     html: `<body style='font-family:Arial,sans-serif;'>
//                 <h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка</h2>\r\n
//
//                 <p><strong>Имя: </strong>${name}</p>\r\n
//                 <p><strong>E-mail: </strong>${email}</p>\r\n
//                 <p><strong>Телефон: </strong>${number}</p>\r\n
//
//                 </body>`,
//   });
// }

async function sendTelegram(name, number, title, idx) {
  for (const adminId of adminIds) {
    try {
      await bot.sendMessage(
        adminId,
        `*Новая заявка №${i}*\n\n*Имя*: ${escape(name)}\n*Телефон: *${escape(
          number
        )}\n${title ? `${title}` : ""}`,
        {
          parse_mode: "MarkdownV2",
        }
      );
      i++;
    } catch (e) {
      console.log(e?.message || "telegram error");
    }
  }
}

app.post("/applications", async (req, res) => {
  const { name, phoneNumber, title } = req.body;

  if (!phoneNumber || !name) {
    res.status(400);
    res.end();
  }
  try {
    // await sendMail(name, email, phoneNumber);
    await sendTelegram(name, phoneNumber, title);
    res.status(201);
    res.end();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Email app listening on port ${port}`);
});
