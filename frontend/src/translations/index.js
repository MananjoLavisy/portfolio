const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'John Doe',
      title: 'Data Scientist',
      subtitle: 'Transforming data into actionable insights through machine learning and advanced analytics',
      downloadCV: 'Download CV',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'Background & Experience',
      description: 'Passionate Data Scientist with expertise in machine learning, statistical analysis, and data visualization. I transform complex datasets into clear, actionable business insights. With years of experience in developing predictive models and data-driven solutions, I help organizations leverage their data to make informed decisions and achieve measurable results.'
    },
    services: {
      title: 'Services',
      subtitle: 'What I Can Do',
      items: [
        {
          title: 'Machine Learning',
          description: 'Development of predictive models using advanced ML algorithms for classification, regression, and clustering tasks.',
          concepts: ['Supervised Learning', 'Unsupervised Learning', 'Ensemble Methods', 'Feature Engineering'],
          tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'MLflow']
        },
        {
          title: 'Data Analysis',
          description: 'In-depth exploratory data analysis and statistical modeling to uncover patterns and trends in your data.',
          concepts: ['EDA', 'Statistical Testing', 'Hypothesis Testing', 'A/B Testing'],
          tools: ['Python', 'Pandas', 'NumPy', 'Jupyter']
        },
        {
          title: 'Data Visualization',
          description: 'Creating compelling visualizations and interactive dashboards to communicate insights effectively.',
          concepts: ['Storytelling', 'Dashboard Design', 'KPI Tracking', 'Reporting'],
          tools: ['Power BI', 'Tableau', 'Matplotlib', 'Plotly']
        },
        {
          title: 'Deep Learning',
          description: 'Building neural networks for computer vision, NLP, and complex pattern recognition problems.',
          concepts: ['CNN', 'RNN', 'Transformers', 'Transfer Learning'],
          tools: ['TensorFlow', 'PyTorch', 'Keras', 'Hugging Face']
        },
        {
          title: 'Business Intelligence',
          description: 'Developing BI solutions and reports to help drive data-informed business decisions.',
          concepts: ['Data Warehousing', 'ETL', 'OLAP', 'Data Modeling'],
          tools: ['SQL', 'Power BI', 'Looker', 'dbt']
        },
        {
          title: 'MLOps & Deployment',
          description: 'End-to-end ML pipeline development, model deployment, and monitoring in production.',
          concepts: ['CI/CD', 'Model Monitoring', 'Containerization', 'API Design'],
          tools: ['Docker', 'FastAPI', 'AWS', 'Kubernetes']
        }
      ],
      conceptsLabel: 'Concepts',
      toolsLabel: 'Tools'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Recent Work',
      viewOnGithub: 'View on GitHub',
      items: [
        {
          title: 'Customer Churn Prediction',
          category: 'Machine Learning',
          description: 'Built a predictive model to identify at-risk customers with 94% accuracy using ensemble methods. Implemented feature engineering pipeline and deployed model as REST API.',
          images: ['/projects/churn-1.jpg', '/projects/churn-2.jpg'],
          github: 'https://github.com/username/churn-prediction'
        },
        {
          title: 'Sales Forecasting Dashboard',
          category: 'Data Visualization',
          description: 'Interactive Power BI dashboard for real-time sales analytics and forecasting. Includes drill-down capabilities and automated reporting.',
          images: ['/projects/sales-1.jpg', '/projects/sales-2.jpg'],
          github: ''
        },
        {
          title: 'Sentiment Analysis API',
          category: 'NLP / Deep Learning',
          description: 'REST API for sentiment analysis using BERT, processing 10K+ reviews daily. Fine-tuned model achieves 92% accuracy on domain-specific data.',
          images: ['/projects/sentiment-1.jpg', '/projects/sentiment-2.jpg'],
          github: 'https://github.com/username/sentiment-api'
        },
        {
          title: 'Fraud Detection System',
          category: 'Machine Learning',
          description: 'Real-time fraud detection pipeline reducing fraudulent transactions by 67%. Uses anomaly detection and gradient boosting for high precision.',
          images: ['/projects/fraud-1.jpg', '/projects/fraud-2.jpg'],
          github: 'https://github.com/username/fraud-detection'
        },
        {
          title: 'Image Classification',
          category: 'Computer Vision',
          description: 'CNN-based image classifier for quality control in manufacturing. Achieves 98% accuracy with data augmentation techniques.',
          images: ['/projects/image-1.jpg', '/projects/image-2.jpg'],
          github: ''
        },
        {
          title: 'Recommendation Engine',
          category: 'Machine Learning',
          description: 'Collaborative filtering system increasing user engagement by 35%. Combines content-based and collaborative approaches for hybrid recommendations.',
          images: ['/projects/reco-1.jpg', '/projects/reco-2.jpg'],
          github: 'https://github.com/username/recommendation-engine'
        }
      ]
    },
    education: {
      title: 'Education',
      subtitle: 'Formations & Certifications',
      formationsTitle: 'Formations',
      certificationsTitle: 'Certifications',
      formations: [
        {
          title: 'Master in Data Science',
          institution: 'University Name - Faculty of Science',
          institutionUrl: 'https://university.edu/faculty-science',
          year: '2020 - 2022',
          description: 'Specialization in Machine Learning and Big Data Analytics'
        },
        {
          title: 'Bachelor in Computer Science',
          institution: 'University Name - Faculty of Engineering',
          institutionUrl: 'https://university.edu/faculty-engineering',
          year: '2017 - 2020',
          description: 'Focus on Statistics and Programming'
        }
      ],
      certifications: [
        { title: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023', url: 'https://www.credly.com/badges/your-badge-id' },
        { title: 'TensorFlow Developer', issuer: 'Google', year: '2023', url: 'https://www.credential.net/your-credential-id' },
        { title: 'Professional Data Scientist', issuer: 'DataCamp', year: '2022', url: 'https://www.datacamp.com/certificate/your-cert-id' },
        { title: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '2022', url: 'https://learn.microsoft.com/en-us/users/your-profile' }
      ],
      showMore: 'Show more',
      showLess: 'Show less'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional Background',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          title: 'Senior Data Scientist',
          company: 'Company Name',
          companyUrl: 'https://company.com',
          logo: '/assets/companies/company1.png',
          period: '2022 - Present',
          description: 'Leading data science initiatives, developing ML models for business optimization, and mentoring junior team members.',
          skills: ['Python', 'TensorFlow', 'AWS', 'MLOps']
        },
        {
          title: 'Data Scientist',
          company: 'Company Name',
          companyUrl: 'https://company2.com',
          logo: '/assets/companies/company2.png',
          period: '2020 - 2022',
          description: 'Built predictive models and data pipelines, collaborated with cross-functional teams to deliver data-driven solutions.',
          skills: ['Python', 'Scikit-learn', 'SQL', 'Power BI']
        },
        {
          title: 'Data Analyst',
          company: 'Company Name',
          companyUrl: 'https://company3.com',
          logo: '/assets/companies/company3.png',
          period: '2018 - 2020',
          description: 'Performed data analysis, created dashboards and reports, and supported business decision-making processes.',
          skills: ['SQL', 'Excel', 'Tableau', 'Python']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get In Touch',
      description: 'Have a project in mind? Let\'s discuss how I can help you leverage data to achieve your goals.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        email: 'Email',
        location: 'Location',
        availability: 'Availability'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      projects: 'Projets',
      education: 'Formation',
      experience: 'Expérience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'John Doe',
      title: 'Data Scientist',
      subtitle: 'Transformer les données en insights actionnables grâce au machine learning et à l\'analyse avancée',
      downloadCV: 'Télécharger CV',
      contact: 'Me Contacter'
    },
    about: {
      title: 'À Propos',
      subtitle: 'Parcours & Expérience',
      description: 'Data Scientist passionné avec une expertise en machine learning, analyse statistique et visualisation de données. Je transforme des ensembles de données complexes en insights business clairs et actionnables. Avec des années d\'expérience dans le développement de modèles prédictifs et de solutions data-driven, j\'aide les organisations à exploiter leurs données pour prendre des décisions éclairées.'
    },
    services: {
      title: 'Services',
      subtitle: 'Ce Que Je Peux Faire',
      items: [
        {
          title: 'Machine Learning',
          description: 'Développement de modèles prédictifs utilisant des algorithmes ML avancés pour la classification, régression et clustering.',
          concepts: ['Apprentissage Supervisé', 'Non Supervisé', 'Méthodes Ensemble', 'Feature Engineering'],
          tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'MLflow']
        },
        {
          title: 'Analyse de Données',
          description: 'Analyse exploratoire approfondie et modélisation statistique pour découvrir les patterns et tendances.',
          concepts: ['EDA', 'Tests Statistiques', 'Tests d\'Hypothèses', 'A/B Testing'],
          tools: ['Python', 'Pandas', 'NumPy', 'Jupyter']
        },
        {
          title: 'Visualisation',
          description: 'Création de visualisations percutantes et de tableaux de bord interactifs pour communiquer les insights.',
          concepts: ['Storytelling', 'Design Dashboard', 'Suivi KPI', 'Reporting'],
          tools: ['Power BI', 'Tableau', 'Matplotlib', 'Plotly']
        },
        {
          title: 'Deep Learning',
          description: 'Construction de réseaux de neurones pour la vision par ordinateur, le NLP et la reconnaissance de patterns.',
          concepts: ['CNN', 'RNN', 'Transformers', 'Transfer Learning'],
          tools: ['TensorFlow', 'PyTorch', 'Keras', 'Hugging Face']
        },
        {
          title: 'Business Intelligence',
          description: 'Développement de solutions BI et de rapports pour la prise de décisions basées sur les données.',
          concepts: ['Data Warehousing', 'ETL', 'OLAP', 'Modélisation'],
          tools: ['SQL', 'Power BI', 'Looker', 'dbt']
        },
        {
          title: 'MLOps & Déploiement',
          description: 'Développement de pipelines ML end-to-end, déploiement et monitoring de modèles en production.',
          concepts: ['CI/CD', 'Monitoring', 'Conteneurisation', 'API Design'],
          tools: ['Docker', 'FastAPI', 'AWS', 'Kubernetes']
        }
      ],
      conceptsLabel: 'Concepts',
      toolsLabel: 'Outils'
    },
    projects: {
      title: 'Projets',
      subtitle: 'Travaux Récents',
      viewOnGithub: 'Voir sur GitHub',
      items: [
        {
          title: 'Prédiction de Churn Client',
          category: 'Machine Learning',
          description: 'Modèle prédictif pour identifier les clients à risque avec 94% de précision. Pipeline de feature engineering et déploiement en API REST.',
          images: ['/projects/churn-1.jpg', '/projects/churn-2.jpg'],
          github: 'https://github.com/username/churn-prediction'
        },
        {
          title: 'Dashboard Prévision Ventes',
          category: 'Visualisation',
          description: 'Tableau de bord Power BI interactif pour l\'analyse des ventes en temps réel. Capacités drill-down et reporting automatisé.',
          images: ['/projects/sales-1.jpg', '/projects/sales-2.jpg'],
          github: ''
        },
        {
          title: 'API Analyse de Sentiments',
          category: 'NLP / Deep Learning',
          description: 'API REST pour l\'analyse de sentiments utilisant BERT, traitant plus de 10K avis par jour. Précision de 92% sur données spécifiques.',
          images: ['/projects/sentiment-1.jpg', '/projects/sentiment-2.jpg'],
          github: 'https://github.com/username/sentiment-api'
        },
        {
          title: 'Système Détection Fraude',
          category: 'Machine Learning',
          description: 'Pipeline de détection de fraude en temps réel réduisant les transactions frauduleuses de 67%. Détection d\'anomalies et gradient boosting.',
          images: ['/projects/fraud-1.jpg', '/projects/fraud-2.jpg'],
          github: 'https://github.com/username/fraud-detection'
        },
        {
          title: 'Classification d\'Images',
          category: 'Vision par Ordinateur',
          description: 'Classificateur d\'images CNN pour le contrôle qualité en fabrication. 98% de précision avec augmentation de données.',
          images: ['/projects/image-1.jpg', '/projects/image-2.jpg'],
          github: ''
        },
        {
          title: 'Moteur de Recommandation',
          category: 'Machine Learning',
          description: 'Système de filtrage collaboratif augmentant l\'engagement de 35%. Approche hybride combinant contenu et collaboration.',
          images: ['/projects/reco-1.jpg', '/projects/reco-2.jpg'],
          github: 'https://github.com/username/recommendation-engine'
        }
      ]
    },
    education: {
      title: 'Formation',
      subtitle: 'Formations & Certifications',
      formationsTitle: 'Formations',
      certificationsTitle: 'Certifications',
      formations: [
        {
          title: 'Master en Data Science',
          institution: 'Nom de l\'Université - Faculté des Sciences',
          institutionUrl: 'https://university.edu/faculty-science',
          year: '2020 - 2022',
          description: 'Spécialisation en Machine Learning et Big Data Analytics'
        },
        {
          title: 'Licence en Informatique',
          institution: 'Nom de l\'Université - Faculté d\'Ingénierie',
          institutionUrl: 'https://university.edu/faculty-engineering',
          year: '2017 - 2020',
          description: 'Focus sur les Statistiques et la Programmation'
        }
      ],
      certifications: [
        { title: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023', url: 'https://www.credly.com/badges/your-badge-id' },
        { title: 'TensorFlow Developer', issuer: 'Google', year: '2023', url: 'https://www.credential.net/your-credential-id' },
        { title: 'Professional Data Scientist', issuer: 'DataCamp', year: '2022', url: 'https://www.datacamp.com/certificate/your-cert-id' },
        { title: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '2022', url: 'https://learn.microsoft.com/en-us/users/your-profile' }
      ],
      showMore: 'Voir plus',
      showLess: 'Voir moins'
    },
    experience: {
      title: 'Expérience',
      subtitle: 'Parcours Professionnel',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      items: [
        {
          title: 'Data Scientist Senior',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company.com',
          logo: '/assets/companies/company1.png',
          period: '2022 - Présent',
          description: 'Direction des initiatives data science, développement de modèles ML pour l\'optimisation business, et mentorat des juniors.',
          skills: ['Python', 'TensorFlow', 'AWS', 'MLOps']
        },
        {
          title: 'Data Scientist',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company2.com',
          logo: '/assets/companies/company2.png',
          period: '2020 - 2022',
          description: 'Construction de modèles prédictifs et pipelines de données, collaboration avec les équipes pour livrer des solutions data-driven.',
          skills: ['Python', 'Scikit-learn', 'SQL', 'Power BI']
        },
        {
          title: 'Data Analyst',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company3.com',
          logo: '/assets/companies/company3.png',
          period: '2018 - 2020',
          description: 'Analyse de données, création de tableaux de bord et rapports, support aux processus de décision business.',
          skills: ['SQL', 'Excel', 'Tableau', 'Python']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Me Contacter',
      description: 'Vous avez un projet en tête? Discutons de comment je peux vous aider à exploiter vos données.',
      form: {
        name: 'Votre Nom',
        email: 'Votre Email',
        message: 'Votre Message',
        send: 'Envoyer'
      },
      info: {
        email: 'Email',
        location: 'Localisation',
        availability: 'Disponibilité'
      }
    },
    footer: {
      rights: 'Tous droits réservés.'
    }
  }
};

export default translations;
