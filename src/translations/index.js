const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Lavisy RANDRIANTSALAMA',
      downloadCV: 'Download CV',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'What I Do :',
      description: 'I am a mid-level data scientist specialized in:',
      services: [
        'Data Analysis and Visualization',
        'Train & Finetune ML Models',
        'ERP / BI Reporting',
        'Predicting and solving any complex problems with AI & data-driven solutions'
      ]
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical Stack',
      conceptsLabel: 'Concepts',
      toolsLabel: 'Tools',
      categories: [
        {
          emoji: '\uD83E\uDD16',
          name: 'Machine Learning & AI',
          concepts: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'Feature Engineering', 'Transfer Learning'],
          tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'OpenCV']
        },
        {
          emoji: '\uD83D\uDCCA',
          name: 'Data Analysis & Visualization',
          concepts: ['EDA', 'Statistical Testing', 'Hypothesis Testing', 'A/B Testing', 'Time Series', 'Storytelling', 'KPI Tracking'],
          tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'Jupyter', 'SciPy']
        },
        {
          emoji: '\uD83D\uDCBB',
          name: 'Web & Mobile Dev',
          concepts: ['REST API', 'MVC', 'SPA', 'Responsive Design', 'Authentication', 'State Management', 'CI/CD'],
          tools: ['React', 'Node.js', 'Express', 'FastAPI', 'Flask', 'HTML/CSS', 'JavaScript', 'TypeScript']
        },
        {
          emoji: '\uD83D\uDCC8',
          name: 'Business Intelligence',
          concepts: ['Data Warehousing', 'ETL', 'OLAP', 'Data Modeling', 'Dashboard Design', 'Reporting', 'KPI Definition'],
          tools: ['Power BI', 'Tableau', 'Looker', 'DAX', 'SQL', 'Excel', 'Google Data Studio']
        },
        {
          emoji: '\u2601\uFE0F',
          name: 'Data Engineering & Cloud',
          concepts: ['Data Pipelines', 'Data Lakes', 'Streaming', 'Containerization', 'Microservices', 'Infrastructure as Code'],
          tools: ['SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GCP', 'Kafka', 'Spark', 'Git', 'Linux']
        },
        {
          emoji: '\uD83D\uDE80',
          name: 'MLOps & Deployment',
          concepts: ['Model Monitoring', 'Model Versioning', 'A/B Testing Models', 'CI/CD for ML', 'Experiment Tracking', 'API Design'],
          tools: ['MLflow', 'Airflow', 'Kubernetes', 'GitHub Actions', 'Streamlit', 'Gradio', 'Docker', 'dbt']
        }
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Recent Work',
      viewOnGithub: 'View on GitHub',
      viewDemo: 'Live Demo',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          title: 'Customer Churn Prediction',
          category: 'Machine Learning',
          description: 'Built a predictive model to identify at-risk customers with 94% accuracy using ensemble methods. Implemented feature engineering pipeline and deployed model as REST API.',
          technologies: ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI'],
          images: ['/projects/churn-1.jpg', '/projects/churn-2.jpg'],
          github: 'https://github.com/username/churn-prediction',
          demo: ''
        },
        {
          title: 'Sales Forecasting Dashboard',
          category: 'Data Visualization',
          description: 'Interactive Power BI dashboard for real-time sales analytics and forecasting. Includes drill-down capabilities and automated reporting.',
          technologies: ['Power BI', 'SQL', 'Python', 'DAX'],
          images: ['/projects/sales-1.jpg', '/projects/sales-2.jpg'],
          github: '',
          demo: ''
        },
        {
          title: 'Sentiment Analysis API',
          category: 'NLP / Deep Learning',
          description: 'REST API for sentiment analysis using BERT, processing 10K+ reviews daily. Fine-tuned model achieves 92% accuracy on domain-specific data.',
          technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker'],
          images: ['/projects/sentiment-1.jpg', '/projects/sentiment-2.jpg'],
          github: 'https://github.com/username/sentiment-api',
          demo: ''
        },
        {
          title: 'Fraud Detection System',
          category: 'Machine Learning',
          description: 'Real-time fraud detection pipeline reducing fraudulent transactions by 67%. Uses anomaly detection and gradient boosting for high precision.',
          technologies: ['Python', 'LightGBM', 'Kafka', 'PostgreSQL'],
          images: ['/projects/fraud-1.jpg', '/projects/fraud-2.jpg'],
          github: 'https://github.com/username/fraud-detection',
          demo: ''
        },
        {
          title: 'Image Classification',
          category: 'Computer Vision',
          description: 'CNN-based image classifier for quality control in manufacturing. Achieves 98% accuracy with data augmentation techniques.',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
          images: ['/projects/image-1.jpg', '/projects/image-2.jpg'],
          github: '',
          demo: ''
        },
        {
          title: 'Recommendation Engine',
          category: 'Machine Learning',
          description: 'Collaborative filtering system increasing user engagement by 35%. Combines content-based and collaborative approaches for hybrid recommendations.',
          technologies: ['Python', 'Scikit-learn', 'Surprise', 'Flask'],
          images: ['/projects/reco-1.jpg', '/projects/reco-2.jpg'],
          github: 'https://github.com/username/recommendation-engine',
          demo: ''
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
        { title: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023', url: '/assets/certifications/aws-ml.pdf' },
        { title: 'TensorFlow Developer', issuer: 'Google', year: '2023', url: '/assets/certifications/tensorflow.pdf' },
        { title: 'Professional Data Scientist', issuer: 'DataCamp', year: '2022', url: '/assets/certifications/datacamp.pdf' },
        { title: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '2022', url: '/assets/certifications/azure.pdf' }
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
          logo: '',
          period: '2022 - Present',
          description: 'Leading data science initiatives, developing ML models for business optimization, and mentoring junior team members.',
          skills: ['Python', 'TensorFlow', 'AWS', 'MLOps']
        },
        {
          title: 'Data Scientist',
          company: 'Company Name',
          companyUrl: 'https://company2.com',
          logo: '',
          period: '2020 - 2022',
          description: 'Built predictive models and data pipelines, collaborated with cross-functional teams to deliver data-driven solutions.',
          skills: ['Python', 'Scikit-learn', 'SQL', 'Power BI']
        },
        {
          title: 'Data Analyst',
          company: 'Company Name',
          companyUrl: 'https://company3.com',
          logo: '',
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
      cta: 'Send me an email',
      email: 'mananjolavisy2@gmail.com',
      location: 'Antananarivo, Madagascar',
      availability: 'Open to opportunities',
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
      about: 'A Propos',
      skills: 'Competences',
      projects: 'Projets',
      education: 'Formation',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Lavisy RANDRIANTSALAMA',
      downloadCV: 'Telecharger CV',
      contact: 'Me Contacter'
    },
    about: {
      title: 'A Propos',
      subtitle: 'Ce Que Je Fais :',
      description: 'Je suis un data scientist de niveau intermediaire specialise dans :',
      services: [
        'Analyse et Visualisation de Donnees',
        'Entrainement & Fine-tuning de Modeles ML',
        'ERP / BI Reporting',
        'Prediction et resolution de problemes complexes avec l\'IA et des solutions data-driven'
      ]
    },
    skills: {
      title: 'Competences',
      subtitle: 'Stack Technique',
      conceptsLabel: 'Concepts',
      toolsLabel: 'Outils',
      categories: [
        {
          emoji: '\uD83E\uDD16',
          name: 'Machine Learning & IA',
          concepts: ['Apprentissage Supervise', 'Non Supervise', 'Deep Learning', 'NLP', 'Vision par Ordinateur', 'Reinforcement Learning', 'Feature Engineering', 'Transfer Learning'],
          tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'OpenCV']
        },
        {
          emoji: '\uD83D\uDCCA',
          name: 'Analyse & Visualisation',
          concepts: ['EDA', 'Tests Statistiques', 'Tests d\'Hypotheses', 'A/B Testing', 'Series Temporelles', 'Storytelling', 'Suivi KPI'],
          tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'Jupyter', 'SciPy']
        },
        {
          emoji: '\uD83D\uDCBB',
          name: 'Dev Web & Mobile',
          concepts: ['REST API', 'MVC', 'SPA', 'Design Responsive', 'Authentification', 'Gestion d\'Etat', 'CI/CD'],
          tools: ['React', 'Node.js', 'Express', 'FastAPI', 'Flask', 'HTML/CSS', 'JavaScript', 'TypeScript']
        },
        {
          emoji: '\uD83D\uDCC8',
          name: 'Business Intelligence',
          concepts: ['Data Warehousing', 'ETL', 'OLAP', 'Modelisation de Donnees', 'Design Dashboard', 'Reporting', 'Definition KPI'],
          tools: ['Power BI', 'Tableau', 'Looker', 'DAX', 'SQL', 'Excel', 'Google Data Studio']
        },
        {
          emoji: '\u2601\uFE0F',
          name: 'Data Engineering & Cloud',
          concepts: ['Pipelines de Donnees', 'Data Lakes', 'Streaming', 'Conteneurisation', 'Microservices', 'Infrastructure as Code'],
          tools: ['SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GCP', 'Kafka', 'Spark', 'Git', 'Linux']
        },
        {
          emoji: '\uD83D\uDE80',
          name: 'MLOps & Deploiement',
          concepts: ['Monitoring de Modeles', 'Versioning de Modeles', 'A/B Testing Modeles', 'CI/CD pour ML', 'Suivi d\'Experiences', 'API Design'],
          tools: ['MLflow', 'Airflow', 'Kubernetes', 'GitHub Actions', 'Streamlit', 'Gradio', 'Docker', 'dbt']
        }
      ],
    },
    projects: {
      title: 'Projets',
      subtitle: 'Travaux Recents',
      viewOnGithub: 'Voir sur GitHub',
      viewDemo: 'Demo Live',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      items: [
        {
          title: 'Prediction de Churn Client',
          category: 'Machine Learning',
          description: 'Modele predictif pour identifier les clients a risque avec 94% de precision. Pipeline de feature engineering et deploiement en API REST.',
          technologies: ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI'],
          images: ['/projects/churn-1.jpg', '/projects/churn-2.jpg'],
          github: 'https://github.com/username/churn-prediction',
          demo: ''
        },
        {
          title: 'Dashboard Prevision Ventes',
          category: 'Visualisation',
          description: 'Tableau de bord Power BI interactif pour l\'analyse des ventes en temps reel. Capacites drill-down et reporting automatise.',
          technologies: ['Power BI', 'SQL', 'Python', 'DAX'],
          images: ['/projects/sales-1.jpg', '/projects/sales-2.jpg'],
          github: '',
          demo: ''
        },
        {
          title: 'API Analyse de Sentiments',
          category: 'NLP / Deep Learning',
          description: 'API REST pour l\'analyse de sentiments utilisant BERT, traitant plus de 10K avis par jour. Precision de 92% sur donnees specifiques.',
          technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker'],
          images: ['/projects/sentiment-1.jpg', '/projects/sentiment-2.jpg'],
          github: 'https://github.com/username/sentiment-api',
          demo: ''
        },
        {
          title: 'Systeme Detection Fraude',
          category: 'Machine Learning',
          description: 'Pipeline de detection de fraude en temps reel reduisant les transactions frauduleuses de 67%. Detection d\'anomalies et gradient boosting.',
          technologies: ['Python', 'LightGBM', 'Kafka', 'PostgreSQL'],
          images: ['/projects/fraud-1.jpg', '/projects/fraud-2.jpg'],
          github: 'https://github.com/username/fraud-detection',
          demo: ''
        },
        {
          title: 'Classification d\'Images',
          category: 'Vision par Ordinateur',
          description: 'Classificateur d\'images CNN pour le controle qualite en fabrication. 98% de precision avec augmentation de donnees.',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
          images: ['/projects/image-1.jpg', '/projects/image-2.jpg'],
          github: '',
          demo: ''
        },
        {
          title: 'Moteur de Recommandation',
          category: 'Machine Learning',
          description: 'Systeme de filtrage collaboratif augmentant l\'engagement de 35%. Approche hybride combinant contenu et collaboration.',
          technologies: ['Python', 'Scikit-learn', 'Surprise', 'Flask'],
          images: ['/projects/reco-1.jpg', '/projects/reco-2.jpg'],
          github: 'https://github.com/username/recommendation-engine',
          demo: ''
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
          institution: 'Nom de l\'Universite - Faculte des Sciences',
          institutionUrl: 'https://university.edu/faculty-science',
          year: '2020 - 2022',
          description: 'Specialisation en Machine Learning et Big Data Analytics'
        },
        {
          title: 'Licence en Informatique',
          institution: 'Nom de l\'Universite - Faculte d\'Ingenierie',
          institutionUrl: 'https://university.edu/faculty-engineering',
          year: '2017 - 2020',
          description: 'Focus sur les Statistiques et la Programmation'
        }
      ],
      certifications: [
        { title: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023', url: '/assets/certifications/aws-ml.pdf' },
        { title: 'TensorFlow Developer', issuer: 'Google', year: '2023', url: '/assets/certifications/tensorflow.pdf' },
        { title: 'Professional Data Scientist', issuer: 'DataCamp', year: '2022', url: '/assets/certifications/datacamp.pdf' },
        { title: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '2022', url: '/assets/certifications/azure.pdf' }
      ],
      showMore: 'Voir plus',
      showLess: 'Voir moins'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Parcours Professionnel',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      items: [
        {
          title: 'Data Scientist Senior',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company.com',
          logo: '',
          period: '2022 - Present',
          description: 'Direction des initiatives data science, developpement de modeles ML pour l\'optimisation business, et mentorat des juniors.',
          skills: ['Python', 'TensorFlow', 'AWS', 'MLOps']
        },
        {
          title: 'Data Scientist',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company2.com',
          logo: '',
          period: '2020 - 2022',
          description: 'Construction de modeles predictifs et pipelines de donnees, collaboration avec les equipes pour livrer des solutions data-driven.',
          skills: ['Python', 'Scikit-learn', 'SQL', 'Power BI']
        },
        {
          title: 'Data Analyst',
          company: 'Nom de l\'Entreprise',
          companyUrl: 'https://company3.com',
          logo: '',
          period: '2018 - 2020',
          description: 'Analyse de donnees, creation de tableaux de bord et rapports, support aux processus de decision business.',
          skills: ['SQL', 'Excel', 'Tableau', 'Python']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Me Contacter',
      description: 'Vous avez un projet en tete? Discutons de comment je peux vous aider a exploiter vos donnees.',
      cta: 'Envoyez-moi un email',
      email: 'mananjolavisy2@gmail.com',
      location: 'Antananarivo, Madagascar',
      availability: 'Ouvert aux opportunites',
      info: {
        email: 'Email',
        location: 'Localisation',
        availability: 'Disponibilite'
      }
    },
    footer: {
      rights: 'Tous droits reserves.'
    }
  }
};

export default translations;
