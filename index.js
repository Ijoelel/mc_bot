const express = require("express");
const mineflayer = require("mineflayer");
const AutoAuth = require("mineflayer-auto-auth");
const app = express();

app.use(express.json());

// U CAN ONLY EDIT THIS SECTION!!
const bot_name = ["Gabriel", "Mikhael", "Yehudiel", "Rafael", "Uriel"];

let index = 0;
function createBot() {
    const bot = mineflayer.createBot({
        host: "fianarnatha.aternos.me",
        version: false, // U can replace with 1.16.5 for example, remember to use ', = '1.16.5'
        username: bot_name[index],
        port: 43969,
        plugins: [AutoAuth],
        AutoAuth: "joelxx",
    });

    bot.on("spawn", () => {
        console.log(`${bot_name[index]}_spawned`);
        if (index < 4) {
            index++;
        } else [(index = 0)];
    });
}

createBot();

setInterval(() => {
    try {
        createBot();
    } catch (error) {
        console.log(error);
    }
}, 3600 * 10);
