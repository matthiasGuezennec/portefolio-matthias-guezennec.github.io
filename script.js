// Tableau contenant les descriptions des projets et expériences professionnelles
const projects = [
  {
    type: 1, //type 0 : texte uniquement ; type 1 : images incluse
    title: "Stage de développement Full-Stack Web","description": "!end Lors de ce stage de 11 semaines, j’ai conçu une solution permettant la création de graphiques paramétrables et intuitifs, destinée aux développeurs du framework de Linedata. Ce travail comprenait également la rédaction d’une documentation claire et précise, facilitant l’intégration et l’utilisation de ces fonctionnalités. !end La configuration des graphiques avec Chart.js variant selon le type, il a été nécessaire de produire une documentation spécifique pour chaque graphique. Celle-ci inclut une partie commune à tous les graphiques ainsi qu’une section dédiée aux propriétés particulières, telles que des interactions personnalisées — par exemple, le suivi dynamique du curseur sur un graphique linéaire. !end <br><br><br><h2>Objectifs secondaires du stage</h2><br> Par ailleurs, j’ai effectué la montée de version et la mise à jour des interfaces graphiques de deux projets internes complémentaires. L’un d’eux permettait d’analyser l’état d’avancement des différents projets en cours (nombre total de tickets, tickets résolus, responsables, etc). !end",
    image: "bureau.webp !end chartJs_exemple.png !end !end experiment.png",
    logo: "Linedata_Logo.png",
  },
  {
    type: 0,
    title: "Structure de gestion de données d'une pizzeria",
    description:
      "Ce projet consistait à développer une structure de gestion de données pour une pizzeria. L'objectif était de créer un système pour gérer les commandes, les clients, les menus, et les paiements de manière fluide et efficace avec deux sites, un pour les commandes en ligne des clients et un pour l'administrateur du contenu du site, et deux application Java, une mobile pour le livreur et une pour afficher les commandes au pizzaiolo. Utilisation de technologies telles que PHP, Java, MySQL, et un design responsive pour s'assurer que l'application soit accessible à tout moment sur toutes les plateformes.",
  },
  {
    type: 0,
    title: "Création d'un jeu vidéo éducatif pour les mathématiques",
    description:
      "Le jeu vidéo créé avait pour but d'apprendre les mathématiques de manière interactive et ludique. En utilisant Unity et C#, ce jeu a été conçu pour être accessible à un public jeune et scolaire. Il permet aux joueurs de résoudre des problèmes mathématiques tout en jouant sur différentes difficultées. ",
  },
  {
    type: 0,
    title: "Site de streaming de Bridge pour la FFB",
    description:
      "Ce projet impliquait le développement d'une plateforme de streaming en direct pour la Fédération Française de Bridge (FFB). L'objectif était de permettre aux joueurs et spectateurs de suivre les compétitions de bridge en temps réel, avec des outils interactifs pour suivre les parties et analyser les mains jouées avec en plus un guide qui peut expliquer au joueurs moins expérimentés les actions faites en directe. Le site utilise des technologies modernes telles que Python, YOLO, OpenCV, Roboflow, Ultralytics, Django, openAi, JavaScript, un serveur o2switch et un flux de streaming en direct.",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));
const container = document.getElementById("project-description");
const title = document.getElementById("project-title");

// vérifie le si le projet existe
if (!isNaN(projectId) && projectId >= 0 && projectId < projects.length) {
  const project = projects[projectId];
  title.textContent = project.title;

  // ajoute un logo si disponible
  if (project.logo !== undefined) {
    title.innerHTML = `<img src="images/${projectId}/${project.logo}" alt="logo" style="height: 5em; vertical-align: middle; margin-right: 0.5em;">` + title.innerHTML;
  }

  if (project.type == 0) {
    document.getElementById("project-description").textContent =
      project.description;
  } else {
    texts = splitString(project.description); // texte séparé pour les images entre chaque point
    images = splitString(project.image);
    let html = "";
    for (let i = 0; i < texts.length; i++) {
      html += texts[i] + "<br>";

      // Vérifie si une image correspond à cette itération
      if (i < images.length && images[i].trim() !== "") {
        html += `<img src="images/${projectId}/${images[i]}" alt="image ${i}" class="project-image"><br>`;
      }
    }

    container.innerHTML = html;
  }
} else {
  document.getElementById("project-title").textContent = "Projet non trouvé";
  document.getElementById("project-description").textContent =
    "Désolé, ce projet n'existe pas ou il n'est pas encore disponible.";
}

/**
 * Pour le type 1 UNIQUEMENT:
 *
 * Sépare les différent texte d'un string avec comme séparateur !end
 * @param {*} input "Bloc 1 !end !end Bloc 3 !end"
 * @returns Résultat : ["Bloc 1", "", "Bloc 3", ""]
 */
function splitString(input) {
  return input.split("!end").map((str) => str.trim());
}
