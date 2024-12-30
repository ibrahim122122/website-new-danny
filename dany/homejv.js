function performSearch() {
    const query = document.getElementById('searchInput').value;
    alert('You searched for: ' + query);
}

function switchLanguage() {
    const selectedLanguage = document.getElementById('languageSwitcher').value;
    alert('Language switched to: ' + selectedLanguage);
    applyTranslations();
}

// Countdown function
function initializeCountdowns() {
    const flashSaleEndDate = new Date("2024-12-31T23:59:59").getTime();
    const countdownElements = document.querySelectorAll('.countdown');

    setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = flashSaleEndDate - now;

        if (timeRemaining < 0) {
            countdownElements.forEach(element => {
                element.textContent = "Sale Ended";
            });
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElements.forEach(element => {
            element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        });
    }, 1000);
}

// Advertisement Slideshow Logic
let currentAdIndex = 0;
const slides = document.querySelectorAll('.advertisement-slide');

function showNextSlide() {
    slides[currentAdIndex].classList.remove('active');
    currentAdIndex = (currentAdIndex + 1) % slides.length;
    slides[currentAdIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);

// Language translations
const translations = {
    "en": {
        "store_name": "Danny Store",
        "search_button": "Search",
        "home_button": "Home",
        "laptops_button": "Laptops",
        "stands_button": "Stands",
        "bags_button": "Bags",
        "language_label": "Language",
        "flash_sale_title": "Flash Sale - Limited Time Offer!",
        "product_highlights_title": "Product Highlights"
    },
    "fr": {
        "store_name": "Magasin Danny",
        "search_button": "Chercher",
        "home_button": "ACCUEIL",
        "laptops_button": "Ordinateurs portables",
        "stands_button": "Supports",
        "bags_button": "Sacs",
        "language_label": "Langue",
        "flash_sale_title": "Vente flash - Offre limitée!",
        "product_highlights_title": "Points forts du produit"
    },
    "es": {
        "store_name": "Tienda Danny",
        "search_button": "Buscar",
        "home_button": "Inicio",
        "laptops_button": "Portátiles",
        "stands_button": "Soportes",
        "bags_button": "Bolsas",
        "language_label": "Idioma",
        "flash_sale_title": "Venta flash - ¡Oferta por tiempo limitado!",
        "product_highlights_title": "Destacados del producto"
    },
    "de": {
        "store_name": "Danny Laden",
        "search_button": "Suchen",
        "home_button": "Startseite",
        "laptops_button": "Laptops",
        "stands_button": "Ständer",
        "bags_button": "Taschen",
        "language_label": "Sprache",
        "flash_sale_title": "Blitzverkauf - Begrenztes Angebot!",
        "product_highlights_title": "Produkt-Highlights"
    },
    "zh": {
        "store_name": "丹尼商店",
        "search_button": "搜索",
        "home_button": "主页",
        "laptops_button": "笔记本电脑",
        "stands_button": "支架",
        "bags_button": "背包",
        "language_label": "语言",
        "flash_sale_title": "限时闪购！",
        "product_highlights_title": "产品亮点"
    }
};

function applyTranslations() {
    const language = document.getElementById('languageSwitcher').value;
    for (const key in translations[language]) {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(element => {
            element.textContent = translations[language][key];
        });
    }
}

// Initialize countdowns and translations
initializeCountdowns();
applyTranslations();