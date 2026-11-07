require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", portfolioRoutes);

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error("Server error:", error);
    }
}

startServer();