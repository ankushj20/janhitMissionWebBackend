const express = require("express");
const router = express.Router();
const { getAllNews, getAd, getAnukarniyaNews, getapnaMPNews, getcourtkachheriNews, getmantrisantriNews, getKhabarpalikaNews, getYebBhiPadhiyeNews } = require("../controllers/newsControllers");

router.get("/news", getAllNews);
router.get("/advertisements", getAd);
router.get("/news/anukarniya", getAnukarniyaNews); // ✅ New API Route
router.get("/news/apna-mp", getapnaMPNews); // ✅ New API Route
router.get("/news/court-kachahri", getcourtkachheriNews); // ✅ New API Route
router.get("/news/mantri-santri", getmantrisantriNews); // ✅ New API Route
router.get("/news/khbar-palika", getKhabarpalikaNews); // ✅ New API Route
router.get("/news/yah-bhi-padhiye", getYebBhiPadhiyeNews); // ✅ New API Route

module.exports = router;
