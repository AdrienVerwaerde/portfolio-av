// Variable pour suivre l'état actuel de la langue
let isFrench = false;

// Fonction pour basculer entre les versions française et anglaise
function toggleTranslation() {
    // Charger la version opposée de la page actuelle
    const targetPage = isFrench ? "index.html" : "indexEng.html";

    fetch(targetPage)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const targetDocument = parser.parseFromString(data, "text/html");
            const targetBody = targetDocument.body;

            // Remplacer le contenu actuel par le nouveau
            document.body.parentNode.replaceChild(targetBody, document.body);

            // Mettre à jour l'état de la langue
            isFrench = !isFrench;
        })
        .catch(error => {
            console.error("Erreur lors du chargement de la page cible:", error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    // Définir l'icône du drapeau par défaut en fonction de la page chargée
    const languageButtons = document.getElementById('languageButtons');
    const frenchFlag = languageButtons.querySelector('.french-flag');
    const englishFlag = languageButtons.querySelector('.english-flag');

    // Masquer les deux drapeaux par défaut
    frenchFlag.style.display = 'none';
    englishFlag.style.display = 'none';

    // Vérifier si la page actuelle est indexEng.html
    if (window.location.pathname.includes('indexEng.html')) {
        // Si c'est le cas, afficher le drapeau français par défaut
        frenchFlag.style.display = 'block';
        // Mettre à jour l'état de la langue
        isFrench = true;
    } else {
        // Sinon, afficher le drapeau anglais par défaut
        englishFlag.style.display = 'block';
        // Mettre à jour l'état de la langue
        isFrench = false;
    }

    // Définir la classe active sur le drapeau actif
    languageButtons.children[0].classList.add('active');
});
