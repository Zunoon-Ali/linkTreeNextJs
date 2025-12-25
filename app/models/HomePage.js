import mongoose from "mongoose";
const HomePageHeroSchema = new mongoose.Schema({
    heroH2: String,
    heroP: String,
    heroButtonLink: String,
    heroSliderVideos: [String],
});

const HomePageAboutSchema = new mongoose.Schema({
    aboutVideo: String,
    aboutH2: String,
    aboutP: String,
    aboutButtonText: String,
    aboutButtonLink: String,
});

const HomePageCanvaSchema = new mongoose.Schema({
    canvaVideo: String,
    canvaH2: String,
    canvaP: String,
    canvaButtonText: String,
    canvaButtonLink: String,
});

const HomePageTrustedSchema = new mongoose.Schema({
    trustedH2: String,
    trustedItems: [String],
});

const HomePageFeaturesSchema = new mongoose.Schema({
    featuresH2: String,
    featuresButtons: [String],
    featuresItems: [
        {
            title: String,
            image: String,
        },
    ],
});

const HomePageEmilioSchema = new mongoose.Schema({
    emilioImages: [String],
});

const HomePageFaqSchema = new mongoose.Schema({
    questions: [String],
    p1: [String],
    p2: [String],
    p3: [String],
    aLink: [String],
    aText: [String],

});

const JumpStartFooterColumnSchema = new mongoose.Schema({
    title: String,            // "Company"
    links: [
        {
            text: String,         // "About"
            url: String,          // "/about"
        },
    ],
});

const HomePageJumpStartSchema = new mongoose.Schema({
    heading: String,
    buttonLink: String,

    footerColumns: [JumpStartFooterColumnSchema], 

    loginLink: String,
    getStartedLink: String,

    appLinks: {
        apple: String,
        google: String,
    },

    socialLinks: {
        skype: String,
        pinterest: String,
        instagram: String,
        twitter: String,
    },

    flags: [String],
    description: String,
});


/* ================= MAIN SCHEMA ================= */

const HomePageSchema = new mongoose.Schema({
    hero: HomePageHeroSchema,
    about: HomePageAboutSchema,
    canva: HomePageCanvaSchema,
    trusted: HomePageTrustedSchema,
    features: HomePageFeaturesSchema,
    emilio: HomePageEmilioSchema,
    faqs: HomePageFaqSchema,
    jumpStart: HomePageJumpStartSchema,
});

export default mongoose.models.HomePage ||
    mongoose.model("HomePage", HomePageSchema);
