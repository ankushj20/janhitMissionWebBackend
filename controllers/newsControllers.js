const News = require("../models/news");
const Advertisement = require("../models/advertisement");

exports.getAllNews = async (req, res) => {
  try {
    const { category } = req.query; // ✅ Get category from query params
    let query = {};

    if (category) {
      query.category = category; // ✅ Filter by category
    }

    const news = await News.find(query).sort({ createdAt: -1 }); // ✅ Fetch category-wise news
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Error fetching news" });
  }
};




exports.getAd = async (req, res) => {
    try {
      const adImage = await Advertisement.find().sort({ createdAt: -1 }); 
      res.json(adImage);
    } catch (err) {
      res.status(500).json({ message: "Error fetching advertisement" });
    }
  };



  exports.getAnukarniyaNews = async (req, res) => {
    try {
      const anukarniyaNews = await News.find({ category: "अनुकर्णिया" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(anukarniyaNews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching अनुकरणीय news" });
    }
  };
  


  exports.getapnaMPNews = async (req, res) => {
    try {
      const apnaMPnews = await News.find({ category: "अपना एमपी" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(apnaMPnews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching अपना एमपी news" });
    }
  };

  exports.getcourtkachheriNews = async (req, res) => {
    try {
      const courtkachherinews = await News.find({ category: "कोर्ट कचेरी" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(courtkachherinews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching कोर्ट कचेरी news" });
    }
  };

  exports.getmantrisantriNews = async (req, res) => {
    try {
      const courtmantrisamtrinews = await News.find({ category: "मंत्री संतरी" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(courtmantrisamtrinews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching मंत्री संतरी news" });
    }
  };
  exports.getKhabarpalikaNews = async (req, res) => {
    try {
      const khabarpalikanews = await News.find({ category: "मंत्री संतरी" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(khabarpalikanews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching मंत्री संतरी news" });
    }
  };
  exports.getYebBhiPadhiyeNews = async (req, res) => {
    try {
      const yebhipadhiyenews = await News.find({ category: "यह भी पड़िए" }).sort({ createdAt: -1 }); // ✅ Sirf अनुकरणीय wali news fetch karo
      res.json(yebhipadhiyenews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching यह भी पड़िए news" });
    }
  };