const express = require("express");
const router = express.Router();

const { getDB } = require("../config/db");

// Get all projects
router.get("/projects", async (req, res) => {
    try {
        const db = getDB();

        const projects = await db
            .collection("projects")
            .find()
            .toArray();

        res.json(projects);

    } catch (error) {
        res.status(500).json({
            message: "Unable to load projects"
        });
    }
});

// Get all certificates
router.get("/certificates", async (req, res) => {
    try {
        const db = getDB();

        const certificates = await db
            .collection("certificates")
            .find()
            .toArray();

        res.json(certificates);

    } catch (error) {
        res.status(500).json({
            message: "Unable to load certificates"
        });
    }
});

module.exports = router;