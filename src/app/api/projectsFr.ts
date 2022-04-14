export const projectsFr = [
    {
        id:"teamTraveler",
        name: "Team Traveler",
        technologies: 'Android Studio, Java, FireBase, MVP, NoSql',
        images: [
            {
                title:'',
                src: "assets/images/voyages.webp",
            },
            {
                title:'',
                src:"assets/images/voyage.webp",
            },
            {
                title:'',
                src: "assets/images/logements.webp",
            },
        ],
        url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
        detail:"L'application vous permettra d'organiser des voyage en groupe facilement et rapidement. Votez pour les dates, les transports, hébergement ou même les activités. Grâce à cette <a title='Télécharger sur Google Play' href='https://play.google.com/store/apps/details?id=team.traveler.teamtraveler'>application</a> plus de problème de choix ou désaccords.",
        codeSourceUrl:'https://github.com/zinedineBenkhider/team_traveler',
        detailIsDisplayed: false,
    },
    {
        id:"mautic",
        name: "Mautic Monitoring",
        technologies: 'Android Studio, Java, Rx_Java, Retrofit, MVP, Rest',
        images: [
            {
                title:'Compagnes de marketing',
                src:   "assets/images/compagnes.jpg",
            },
            {
                title:'Détail de la compagne',
                src :"assets/images/compagne-detail.jpg",
            },
            {
                title:"Performance d'un émail",
                src: "assets/images/email-detail.jpg",
            },
            {
                title:"Performance d'un Asset",
                src: "assets/images/asset-detail.jpg" 
            },
            
        ],
        url:'#portfolio',
        detail:"<p>Mautic est un outil open source de marketing automatique</p> <p>L'application permet d'avoir des rapports dynamiques et détaillés, d’analyser les tendances individuels des campagnes.<br> Un tableau de bord visuellement convivial vous donne un point de vue rapide unique sur la performance de: vos campagnes numériques, assets, et formulaires. </p> <p>L'application est disponible en Français et en Anglais.</p>",
        codeSourceUrl:'https://github.com/zinedineBenkhider/mautic_monitoring',
        detailIsDisplayed: false,
    },
    {
        id:"pokedex",
        name: "Pokedex",
        technologies: 'Java, J2EE, SpringBoot, TDD, MySQL, BootStrap, Services, Deploiment',
        images: [
            {
                title:'Pokedex',
                src:   "assets/images/pokedex.png",
            },
            {
                title:'Trainers',
                src :"assets/images/trainers.png",
            },
            {
                title:"Profile",
                src: "assets/images/profile-trainer.png",
            },            
        ],
        url:'#portfolio',
        detail:"<p>Affichage du détail des pokémons et de leurs drésseurs.</p> <p>L'application contient deux micro-service: pokemon management et trainer management, qui exposent un canal de communication REST/JSON.<br>Le 3éme micro-service WEB-UI se connecte aux deux micro-service.</p>",
        codeSourceUrl:'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
    {
        id:"portfolio",
        name: "Portfolio",
        technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title:'Portfolio',
                src:   "assets/images/portfolio.png",
            },
        ],
        url:'https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640',
        detail:"<p>CV sous forme de site WEB responsive que j'ai mis en open-source sur GitHub accompagné d'une publication d'un <a title='Voir l'article' href='https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640' target='_blank'>article</a> sur medium. </p>",
        codeSourceUrl:'https://github.com/zinedineBenkhider/portfolio',
        detailIsDisplayed: false,
    },
    {
        id:"riddle",
        name: "Transfer Riddle",
        technologies: 'Java, J2EE(Web Services), JavaScript, Html5, CSS, BootStrap',
        images: [
            {
                title:'riddle',
                src:   "assets/images/riddle.png",
            },
        ],
        url:'https://transfer-riddle-solver.herokuapp.com/index.html',
        detail:"Affichage des étapes de la résolution d'énigme de transvasement. Étant donné deux réservoirs vides de contenance X et Y, comment obtenir précisément T litres dans l’un des deux réservoirs (T étant un entier). On peut remplir ou vider un réservoir, et transvaser le contenu de l’un dans l’autre, jusqu’à ce que la source soit vide ou la destination pleine.",
        codeSourceUrl:'https://github.com/zinedineBenkhider/transfer_riddle_client',
        detailIsDisplayed: false,
    },
];

