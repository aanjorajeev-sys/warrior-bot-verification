const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        message: "Warrior Bot backend is running!"
    });
});

app.get("/auth/discord/callback", (req, res) => {
    res.send("Discord OAuth2 callback received.");
});

app.listen(PORT, () => {
    console.log(`Warrior Bot backend running on port ${PORT}`);
});
