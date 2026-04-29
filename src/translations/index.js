const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      activities: 'Volunteering',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Mananjo Lavisy RANDRIANTSALAMA',
      role: 'AI & Data Scientist',
      downloadCV: 'Download CV',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'What I Do :',
      // description: 'I am a mid-level data scientist specialized in:',
      services: [
        'End-to-end AI solutions and automation within your ERP / BI tools or Web Apps (ex: chatbots, voicebots, recommendation engine, etc...)',
        'Predictive modeling and ML models for ai/data-driven decision making (customer churn, demand forecasting, sentiment analysis, etc...)',
        'Advanced BI/Big Data Analytics (Automated ETL pipelines & Interactive Business Dashboards)',
      ]
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical Stack',
      conceptsLabel: 'Concepts',
      toolsLabel: 'Tools',
      showMore: 'Show 3 more',
      showLess: 'Show less',
      categories: [
        {
          emoji: '\uD83D\uDCCA',
          name: 'BI & Analytics',
          concepts: ['Dashboarding', 'KPI Tracking', 'Business Reporting', 'Storytelling', 'Data Modeling', 'Data Cleaning'],
          tools: ['Power BI', 'Power Query', 'Excel', 'Spreadsheet','DBeaver','MySQL']
        },
        {
          emoji: '\uD83D\uDD2C',
          name: 'Data Science',
          concepts: ['EDA', 'Statistics', 'Time Series Analysis', 'Forecasting', 'Data Mining', 'PCA (Dimensionality Reduction)', 'NLP'],
          tools: ['Pandas', 'NumPy','Matplotlib', 'Seaborn', 'SciPy', 'Streamlit', 'spaCy', 'Jupyter']
        },
        {
          emoji: '\uD83E\uDDE0',
          name: 'AI Engineering',
          concepts: ['Prompt Engineering', 'Agentic AI', 'AI Automation', 'Fine-tuning', 'Model Evaluation', 'RAG'],
          tools: ['OpenAI API', 'LangChain', 'Hugging Face', 'Python', 'FastAPI', 'Streamlit', 'n8n']
        },
        {
          emoji: '\u2699\uFE0F',
          name: 'Machine Learning',
          concepts: ['Supervised/Unsupervised Learning','Anomaly detection','Features Engineering', 'Model Tuning', 'Transfer Learning', 'MLOps Pipelines'],
          tools: ['Scikit-learn', 'K-means', 'SVM' ,'XGBoost', 'TensorFlow/Keras', 'PyTorch', 'MLflow']
        },
        {
          emoji: '\u2601\uFE0F',
          name: 'Cloud & DataOps',
          concepts: ['Deployment', 'CI/CD', 'Model Monitoring', 'Workflow Automation', 'Containerization', 'Scalable APIs', 'ELT/ETL Pipeline', 'Data Warehousing'],
          tools: ['GCP/AWS', 'Docker', 'Git/Gitlab CI', 'GitHub Actions', 'FastAPI','Linux', 'PostgreSQL', 'Talend OS']
        },
        {
          emoji: '\uD83D\uDCF1',
          name: 'Backend & Mobile Development',
          concepts: ['REST APIs', 'Authentication', 'Responsive UI', 'State Management', 'CRUD Systems', 'Database Integration', 'API Integrations'],
          tools: ['MERN Stack (MongoDB, Express, React, Node.js)', 'React Native', 'JavaScript', 'TypeScript', 'Bruno']
        }
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Recent Work',
      taglineLabel: 'Tagline:',
      stackLabel: 'Technical stack',
      viewOnGithub: 'View on GitHub',
      viewDemo: 'Live Demo',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          title: 'Training Management System',
          category: 'Web Development | Data Analytics',
          tagline: 'Graduation Project - Faculty of Computers & AI - CAIRO UNIVERSITY - 2023',
          description: 'The Training Management System for Students is a comprehensive platform designed to streamline the learning and development process for students. It provides a centralized system for managing training programs, courses, resources, and student progress. The system allows students to access training materials, tracking dashboards, track their learning journey, and receive personalized recommendations based on their interests and goals. With features such as course enrollment, progress tracking, and interactive learning modules, the Training Management System enhances the overall learning experience and helps students achieve their educational objectives effectively.',
          //metrics: [
          //  { value: '94%', label: 'model accuracy' },
          //  { value: '-28%', label: 'estimated churn risk' }
          //],
          technologies: ['Python', 'Django', 'React Js', 'Tailwind CSS', 'MySQL'],
          images: ['/projects/p1_1.png', '/projects/p1_2.png'],
          github: 'https://prezi.com/p/eomzj69yxamm/training-management-system/',
          // demo: ''
        },
        {
          title: 'My-varotra : An end-to-end ERP Solution for Small Businesses with AI-assisted Analytics',
          category: 'BI & Data Analytics',
          tagline: 'Turned raw sales data into a decision-ready dashboard for faster business reporting.',
          description: 'A complete e-commerce ERP with AI assist for every type of users (Admin, Seller, Buyer) with BI dashboards for sales monitoring and insights generation. The dashboard provides real-time sales tracking, automated reporting, and actionable insights to drive informed business decisions. And a chatbot assistant to help users navigate the platform and answer their questions.',
          //metrics: [
          //  { value: 'Real-time', label: 'sales monitoring' },
          //  { value: '-60%', label: 'manual reporting time' }
          //],
          technologies: ['React JS', 'Node.js', 'Express', 'Python', 'MySQL'],
          images: ['/projects/myv-1.png', '/projects/myv-2.png', '/projects/myv-3.png', '/projects/myv-4.png', '/projects/myv-5.png'],
          github: 'https://github.com/MananjoLavisy',
          // demo: ''
        },
        {
          title: 'LAVISY-bot : An Intelligent Chatbot for Customer Support with Sentiment Analysis',
          category: 'NLP',
          tagline: 'An intelligent FAQ bot for playground reservations and user support.',
          description: 'A conversational assistant designed to answer FAQ about playground bookings, reservation rules, pricing, availability, and basic support flows. Built to guide users through booking steps, reduce repetitive support requests, and provide quick answers for a smoother reservation experience.',
          //metrics: [
          //  { value: '10K+', label: 'reviews per day' },
          //  { value: '92%', label: 'domain accuracy' }
          //],
          technologies: ['Python', 'Scikit-Learn', 'Streamlit'],
          images: ['/projects/p3_1.png', '/projects/p3_2.png'],
          github: 'https://github.com/MananjoLavisy/LAVISY_bot',
          // demo: ''
        },
        {
          title: 'Car Rental App',
          category: 'Mobile Development',
          tagline: 'Mobile App for Car Rental Services with User-friendly Interface and Real-time Bookings.',
          description: 'A mobile application designed for car rental services, providing users with a seamless experience for browsing available cars, making reservations, and managing bookings. The app features a user-friendly interface, real-time availability updates, and secure payment integration. It allows users to easily search for cars based on their preferences, view detailed information about each vehicle, and complete the booking process with just a few taps.',
          //metrics: [
          //  { value: '-67%', label: 'fraudulent transactions' },
          //  { value: 'Real-time', label: 'risk scoring' }
          //],
          technologies: ['React Native', 'TypeScript', 'Supabase'],
          images: ['/projects/template-no-image.svg', '/projects/template-no-image.svg'],
          github: 'https://github.com/MananjoLavisy/CarRentalApp_v2',
          //demo: ''
        },
          // {
          //  title: 'Fake News Detection System',
          //  category: 'AI | NLP',
          //  tagline: 'Detecting Fake News with Machine Learning and NLP Techniques from a local dataset (from Kaggle).',
          //  description: 'This was a 2-days Hackathon project where we built a fake news detection system using machine learning and natural language processing techniques. We used a local dataset from Kaggle that contains news articles labeled as real or fake. We performed data preprocessing, feature extraction, and trained a machine learning model to classify news articles as real or fake. The system achieved an accuracy of 95% on the test set and can be used to help users identify and avoid fake news.',
          //  technologies: ['React JS', 'Tailwind CSS'],
          //  images: ['/projects/p5_1.jpg', '/projects/p5_2.jpg'],
          //  github: 'https://github.com/MananjoLavisy/',
          // },
         {
          title: 'Personal Portfolio Website',
          category: 'Web Development',
          tagline: 'A personal portfolio website to showcase my projects, skills, and experience.',
          description: 'A personal portfolio website built with React JS and Tailwind CSS. The website features a clean and modern design, with sections for about me, skills, projects, education, experience, and contact information. It is fully responsive and optimized for both desktop and mobile devices.',
          //metrics: [
          //  { value: '-67%', label: 'fraudulent transactions' },
          //  { value: 'Real-time', label: 'risk scoring' }
          //],
          technologies: ['React JS', 'Tailwind CSS'],
          images: ['/projects/template-no-image.svg', '/projects/template-no-image.svg'],
          github: 'https://github.com/MananjoLavisy/Portfolio',
          //demo: ''
         }
      ]
    },
    education: {
      title: 'Education',
      subtitle: 'Degree & Professionnal Certifications',
      formationsTitle: 'Degree',
      certificationsTitle: 'Professional Certifications',
      mainCoursesLabel: 'Main courses',
      specializationLabel: 'Specialization',
      durationLabel: 'Duration',
      languageLabel: 'Language of study',
      showDetails: 'Show details',
      formations: [
        {
          title: 'M.Eng in "AI & Data Science"',
          university: 'INSI - Institut National Supérieur d\'Informatique',
          institutionUrl: 'https://www.insi.mg/',
          year: '2025 - Now',
          logo: '/assets/diplomas/logo_insi.png',
          // logoPending: true,
          accreditor: 'College de Paris',
          accreditorLogo: '/assets/diplomas/logo_paris.png',
          badge: {
            emoji: '📜🏅',
            label: 'Double degree accredited by Collège de Paris'
          },
          // specialization: 'Machine Learning and Big Data Analytics',
          duration: '2 years (4 semesters)',
          languageOfStudy: 'French and English',
          mainCourses: ['AI Architecture', 'Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Econometrics', 'Blockchain', 'Cloud Computing', 'MLOps', 'Data Engineering', 'Big Data Analytics']
        },
        {
          title: 'B.Sc in "Computer Science"',
          university: 'CAIRO UNIVERSITY',
          faculty: 'Faculty of Computers & AI',
          institutionUrl: 'http://newecom.fci-cu.edu.eg/#/',
          year: '2019 - 2023',
          logo: '/assets/diplomas/logo_fcai.png',
          // logoPending: true,
          specialization: 'Information Systems',
          duration: '4 years (8 semesters)',
          languageOfStudy: 'English',
          mainCourses: ['Advanced Algorithms', 'Database Systems', 'Advanced Programming', 'Software Engineering', 'Operating Systems', 'Computer Networks', 'Artificial Intelligence', 'Machine Learning', 'ETL/ELT', 'Big Data Analytics', 'Data Warehouse', 'Statistics for Data Science']
        },
        {
          title: 'Mathématiques & Informatique',
          university: 'Université d\'Antananarivo',
          faculty: 'Faculté des Sciences',
          institutionUrl: 'https://siansa.univ-antananarivo.mg/',
          year: '2016 - 2018',
          logo: '/assets/diplomas/logo_maths.png',
          // logoPending: true,
          // specialization: 'Information Systems',
          // duration: '4 years - 8 semesters',
          statusNote: 'Cursus interrupted for external scholarship opportunities for outstanding students in High School.',
          languageOfStudy: 'French',
          mainCourses: ['Mathematics', 'Algebra', 'Calculus', 'Probability', 'Statistics', 'Programming', 'Algorithms']
        },
        {
          title: 'Baccalauréat - série C',
          // university: 'For 12 School - Antananarivo, Madagascar',
          faculty: 'For 12 School - Antananarivo, Madagascar',
          // institutionUrl: 'https://siansa.univ-antananarivo.mg/',
          year: '2016',
          logo: '/assets/diplomas/logo_for12.png',
          // logoPending: true,
          // specialization: 'Information Systems',
          // duration: '4 years - 8 semesters',
          highlightNote: '🏆 Awards: Achieved the highest score in Mathematics (97.5 / 100) in the entire country in 2016.',
          languageOfStudy: 'French',
          // mainCourses: ['Mathematics', 'Algebra', 'Calculus', 'Statistics', 'Programming', 'Algorithms']
        }
      ],
      certifications: [
        { title: 'IBM Data Science', issuer: 'Coursera', year: '2025', url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7T1ZMIL6LBJZ' },
        { title: 'Machine Learning Specialization', issuer: 'Stanford University', year: '2025', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/OWN7BSDX0SLD' },
        { title: 'SQL Programming', issuer: 'Astronomer', year: '2025', url: 'https://www.linkedin.com/learning/certificates/dabf51438bb4474d1b9438bd2413f3e899774383aa011e969fd2141691a09c29/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'Leadership Excellence in Business Management', issuer: 'Institute of Management, Technology and Finance - Linkedin ', year: '2025', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.udemy.com%2Fcertificate%2FUC-5c46e0fb-fd4b-4af3-8317-df07938f13d8%2F&urlhash=guTn&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'Data Management & Analysis for Cluster Information Management', issuer: 'UNICEF', year: '2025', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fagora.unicef.org%2Fmod%2Fcertificate%2Fview.php%3Fid%3D225473%26action%3Dget&urlhash=xWvU&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'JavaScript Foundations', issuer: 'Mozilla', year: '2025', url: 'https://www.linkedin.com/learning/certificates/aba4579d2f24437f7e4fd63985ac4d0d084f9f3cc210c3d68360f96972678f1d/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'IT Support Professional Certificate', issuer: 'Google', year: '2023', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/96CLX6KUNKEZ' },
        { title: 'Google Data Analytics', issuer: 'Coursera', year: '2022', url: 'https://www.coursera.org/account/accomplishments/professional-cert/8Z9WRFBX6NT2' }

      ],
      showMore: 'Show more',
      showLess: 'Show less'
    },
    activities: {
      title: 'Volunteering',
      subtitle: 'Community involvement, volunteer work, and event participation',
      items: [
        {
          title: 'Volunteer AI Trainer',
          organization: 'Ivotoeran\'ny Tanora',
          organizationUrl: '',
          period: '2024',
          description: 'Delivered volunteer training sessions in artificial intelligence for learners and community participants.',
          skills: ['Artificial Intelligence', 'Training', 'Mentoring']
        },
        {
          title: 'Socio-cultural Coordinator',
          organization: 'Malagasy Diaspora in Egypt',
          organizationUrl: '',
          period: '2021 - 2022',
          description: 'Led socio-cultural activities and helped coordinate the Malagasy community in Egypt. Organized initiatives and events.',
          skills: ['Community Leadership', 'Event Coordination', 'Communication']
        }
      ]
    },
    experience: {
      title: 'Experiences',
      subtitle: 'Professional Background',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          title: 'AI & Backend Developer',
          company: 'ALAXIONE',
          companyUrl: 'https://www.alaxione.fr/',
          logo: '',
          period: '2026 - Present',
          description: 'training & developing AI models for business optimization, and resolving backend tickets issues for a digital healthcare solutions provider.',
          skills: ['Python', 'PHP', 'TypeScript', 'GCP / CX Agents Studio', 'Docker', 'CI/CD', 'Agentic AI', 'Voicebot Agents']
        },
        {
          title: 'AI Trainer (Freelance)',
          company: 'Toloka AI',
          companyUrl: 'https://toloka.ai',
          logo: '',
          period: '2025 - Present',
          description: 'Training AI models for various use cases, including content moderation, sentiment analysis, and data annotation, to improve model performance and accuracy.',
          skills: ['Data Collection','AI Training', 'Data Annotation', 'Quality Assurance', 'Model Evaluation']
        },
        {
          title: 'Data manager Intern',
          company: 'United Nations Population Fund - UNFPA Madagascar',
          companyUrl: 'https://madagascar.unfpa.org/en',
          logo: '',
          period: '2025',
          description: 'Managed and analyzed data related to pregnancy, birth, population and development indicators, contributing to informed decision-making and program planning for the UNFPA Madagascar office.',
          skills: ['Data Collection', 'Data Cleaning', 'Data Analysis', 'Data Visualization', 'Data Reporting', 'Excel', 'Power BI', 'Kobo toolbox','Google Spreadsheets', 'Appscript']
        },
        {
          title: 'Developer Intern',
          company: 'Ministry of the Interior and Decentralization - Madagascar',
          companyUrl: '',
          logo: '',
          period: '2024',
          description: 'Designed and developped a web application for digitalizing the national identity card (CIN) issuance process.',
          skills: ['UML','System Design','Web Development', 'React JS', 'Django', 'MySQL', 'Git']
        },
        {
          title: 'Data Analyst - Call Center',
          company: 'CONCENTRIX EGYPT',
          companyUrl: 'https://www.concentrix.com/',
          logo: '',
          period: '2023 - 2024',
          description: 'Analyzed call center data to identify trends, optimize operations, and improve customer satisfaction for a global business services company, Performed data analysis, created dashboards and reports, and supported decision-making processes.',
          skills: ['Data Analysis', 'Dashboarding', 'Reporting', 'Excel', 'AWS / Paragon']
        },
        {
          title: 'Bilingual Technical Support Specialist (ENG-FR)',
          company: 'Teleperformance EGYPT',
          companyUrl: 'https://www.tp.com/ar-eg/locations/egypt/',
          logo: '',
          period: '2019 - 2020',
          description: 'Provided technical support and troubleshooting assistance to customers in both English and French for a global customer experience management company, helping to resolve technical issues and ensure customer satisfaction.',
          skills: ['AWS / Paragon', 'Technical Support', 'Troubleshooting', 'Customer Service', 'Bilingual Communication (English-French)']
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
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      education: 'Formation',
      activities: 'Volontariat',
      experience: 'Expériences',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Mananjo Lavisy RANDRIANTSALAMA',
      role: 'Ingénieur en IA & Data Scientist',
      downloadCV: 'Télécharger CV',
      contact: 'Me Contacter'
    },
    about: {
      title: 'À Propos',
      subtitle: 'Ce Que Je fais :',
      // description: 'Je suis un data scientist de niveau intermediaire specialise dans :',
      services: [
        'Solutions IA de bout en bout et automatisation dans vos outils ERP / BI ou applications web (ex : chatbots, voicebots, moteur de recommandation, etc.)',
        'Modèles predictifs et ML pour une prise de décision basée sur l\'IA et les données (churn client, prévision de la demande, analyse de sentiments, etc.)',
        'BI / Big Data Analytics avancée (pipelines ETL automatisées et tableaux de bord business interactifs)'
      ]
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Stack Technique',
      conceptsLabel: 'Concepts',
      toolsLabel: 'Outils',
      showMore: 'Voir 3 de plus',
      showLess: 'Voir moins',
      categories: [
        {
          emoji: '\uD83D\uDCCA',
          name: 'BI & Analytics',
          concepts: ['Dashboarding', 'Suivi KPI', 'Reporting metier', 'Storytelling', 'Modelisation des données', 'Nettoyage des données'],
          tools: ['Power BI', 'Power Query', 'Excel', 'Spreadsheet', 'DBeaver', 'MySQL']
        },
        {
          emoji: '\uD83D\uDD2C',
          name: 'Data Science',
          concepts: ['EDA', 'Statistiques', 'Analyse de séries temporelles', 'Forecasting', 'Data Mining', 'PCA (réduction de dimension)', 'NLP'],
          tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Streamlit', 'spaCy', 'Jupyter']
        },
        {
          emoji: '\uD83E\uDDE0',
          name: 'AI Engineering',
          concepts: ['Prompt Engineering', 'Agents IA Autonomes', 'Automatisation IA', 'Fine-tuning', 'Evaluation de modèles', 'RAG'],
          tools: ['OpenAI API', 'LangChain', 'Hugging Face', 'Python', 'FastAPI', 'Streamlit', 'n8n']
        },
        {
          emoji: '\u2699\uFE0F',
          name: 'Machine Learning',
          concepts: ['Apprentissage supervisée/non supervisée', 'Détection d\'anomalies', 'Feature Engineering', 'Model Tuning', 'Transfer Learning', 'Pipelines MLOps'],
          tools: ['Scikit-learn', 'K-means', 'SVM', 'XGBoost', 'TensorFlow/Keras', 'PyTorch', 'MLflow']
        },
        {
          emoji: '\u2601\uFE0F',
          name: 'Cloud & DataOps',
          concepts: ['Déploiement', 'CI/CD', 'Monitoring de modèles', 'Automatisation des workflows', 'Conteneurisation', 'APIs scalables', 'Pipeline ELT/ETL', 'Data Warehousing'],
          tools: ['GCP/AWS', 'Docker', 'Git/Gitlab CI', 'GitHub Actions', 'FastAPI', 'Linux', 'PostgreSQL', 'Talend OS']
        },
        {
          emoji: '\uD83D\uDCF1',
          name: 'Backend & Mobile Developpement',
          concepts: ['APIs REST', 'Authentification', 'UI responsive', 'Gestion d\'état', 'Systèmes CRUD', 'Intégration base de données', 'Intégrations API'],
          tools: ['MERN Stack (MongoDB, Express, React, Node.js)', 'React Native', 'JavaScript', 'TypeScript', 'Bruno']
        }
      ],
    },
    projects: {
      title: 'Projets',
      subtitle: 'Travaux Récents',
      taglineLabel: 'Tagline :',
      stackLabel: 'Stack technique',
      viewOnGithub: 'Voir sur GitHub',
      viewDemo: 'Demo Live',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      items: [
        {
          title: 'Training Management System',
          category: 'Developpement Web | Data Analytics',
          tagline: 'Projet de fin d\'études - Faculty of Computers & AI - CAIRO UNIVERSITY - 2023',
          description: 'Le Training Management System for Students est une plateforme complète conçue pour fluidifier le processus d\'apprentissage et de developpement des étudiants. Elle fournit un système centralisé pour gérer les programmes de formation, les cours, les ressources et la progression des étudiants. Le système permet aux étudiants d\'accéder aux supports de formation, aux tableaux de suivi, de suivre leur parcours d\'apprentissage et de recevoir des recommandations personnalisées selon leurs intérets et objectifs. Avec des fonctionnalités telles que l\'inscription aux cours, le suivi de progression et des modules interactifs, le Training Management System améliore l\'expérience d\'apprentissage globale et aide les étudiants à atteindre efficacement leurs objectifs éducatifs.',
          //metrics: [
          //  { value: '94%', label: 'model accuracy' },
          //  { value: '-28%', label: 'estimated churn risk' }
          //],
          technologies: ['Python', 'Django', 'React Js', 'Tailwind CSS', 'MySQL'],
          images: ['/projects/p1_1.png', '/projects/p1_2.png'],
          github: 'https://prezi.com/p/eomzj69yxamm/training-management-system/'
        },
        {
          title: 'My-varotra : Une solution ERP end-to-end pour les petites entreprises avec analytics assistées par IA',
          category: 'BI & Data Analytics',
          tagline: 'Transformation des données de vente brutes en dashboard décisionnel pour un reporting plus rapide.',
          description: 'Un ERP e-commerce complet avec assistance IA pour tous les types d\'utilisateurs (Admin, Vendeur, Acheteur), avec des dashboards BI pour le suivi des ventes et la génération d\'insights. Le dashboard fournit un suivi en temps réel, un reporting automatisé et des analyses exploitables pour soutenir les décisions business. Un assistant chatbot aide également les utilisateurs à naviguer sur la plateforme et à repondre a leurs questions.',
          //metrics: [
          //  { value: 'Real-time', label: 'sales monitoring' },
          //  { value: '-60%', label: 'manual reporting time' }
          //],
          technologies: ['React JS', 'Node.js', 'Express', 'Python', 'MySQL'],
          images: ['/projects/myv-1.png', '/projects/myv-2.png', '/projects/myv-3.png', '/projects/myv-4.png', '/projects/myv-5.png'],
          github: 'https://github.com/MananjoLavisy'
        },
        {
          title: 'LAVISY-bot : Un chatbot intelligent pour le support client avec analyse de sentiments',
          category: 'NLP',
          tagline: 'Un chatbot intelligent de FAQ pour les réservations de terrains de jeu et l\'assistance utilisateur.',
          description: 'Un assistant conversationnel conçu pour répondre aux questions fréquentes sur les réservations de terrains de jeu, les règles de réservation, les tarifs, la disponibilité et les demandes de support de base. Il guide les utilisateurs à travers les étapes de réservation, réduit les demandes de support répétitives et fournit des réponses rapides pour une expérience plus fluide.',
          //metrics: [
          //  { value: '10K+', label: 'reviews per day' },
          //  { value: '92%', label: 'domain accuracy' }
          //],
          technologies: ['Python', 'Scikit-Learn', 'Streamlit'],
          images: ['/projects/p3_1.png', '/projects/p3_2.png'],
          github: 'https://github.com/MananjoLavisy/LAVISY_bot'
        },
        {
          title: 'Car Rental App',
          category: 'Developpement Mobile',
          tagline: 'Application mobile de location de voitures avec interface intuitive et réservations en temps réel.',
          description: 'Application mobile conçue pour les services de location de voitures, offrant une expérience fluide pour consulter les véhicules disponibles, effectuer des resérvations et gérer les bookings. L\'application inclut une interface intuitive, des mises à jour de disponibilité en temps réel et une intégration de paiement securisé par carte bancaire. Les utilisateurs peuvent rechercher facilement des voitures selon leurs préférences, consulter les détails des véhicules et finaliser une résérvation en quelques taps.',
          //metrics: [
          //  { value: '-67%', label: 'fraudulent transactions' },
          //  { value: 'Real-time', label: 'risk scoring' }
          //],
          technologies: ['React Native', 'TypeScript', 'Supabase'],
          images: ['/projects/template-no-image.svg', '/projects/template-no-image.svg'],
          github: 'https://github.com/MananjoLavisy/CarRentalApp_v2'
        },
        {
          title: 'Personal Portfolio Website',
          category: 'Developpement Web',
          tagline: 'Un site portfolio personnel pour presenter mes projets, compétences et expériences.',
          description: 'Un site portfolio personnel developpe avec React JS et Tailwind CSS. Le site propose un design moderne et pure, avec des sections a propos, compétences, projets, formation, expérience et contact. Il est entierement responsive et optimise pour desktop et mobile.',
          //metrics: [
          //  { value: '-67%', label: 'fraudulent transactions' },
          //  { value: 'Real-time', label: 'risk scoring' }
          //],
          technologies: ['React JS', 'Tailwind CSS'],
          images: ['/projects/template-no-image.svg', '/projects/template-no-image.svg'],
          github: 'https://github.com/MananjoLavisy/Portfolio'
        }
      ]
    },
    education: {
      title: 'Formation',
      subtitle: 'Formations & Certifications',
      formationsTitle: 'Diplômes',
      certificationsTitle: 'Certifications Professionnelles',
      mainCoursesLabel: 'Cours principaux',
      specializationLabel: 'Spécialisation',
      durationLabel: 'Durée',
      languageLabel: 'Langue d\'apprentissage',
      showDetails: 'Voir détails',
      formations: [
        {
          title: 'Ingénierie en IA & Data',
          university: 'INSI - Institut National Supérieur d\'Informatique',
          institutionUrl: 'https://www.insi.mg/',
          year: '2025 - Now',
          logo: '/assets/diplomas/logo_insi.png',
          // logoPending: true,
          accreditor: 'Collège de Paris',
          accreditorLogo: '/assets/diplomas/logo_paris.png',
          // accreditorLogoPending: true,
          badge: {
            emoji: '📜🏅',
            label: 'Double diplôme accredité par Collège de Paris'
          },
          // specialization: 'Machine Learning and Big Data Analytics',
          duration: '2 ans (4 semestres)',
          languageOfStudy: 'Francais et Anglais',
          mainCourses: ['Architecture IA', 'Machine Learning', 'Deep Learning', 'Apprentissage par renforcement', 'Économétrie', 'Blockchain', 'Cloud Computing', 'MLOps', 'Ingénierie des données', 'Big Data Analytics']
        },
        {
          title: 'B.Sc en "Computer Science"',
          university: 'CAIRO UNIVERSITY',
          faculty: 'Faculty of Computers & AI',
          institutionUrl: 'http://newecom.fci-cu.edu.eg/#/',
          year: '2019 - 2023',
          logo: '/assets/diplomas/logo_fcai.png',
          // logoPending: true,
          specialization: 'Information Systems',
          duration: '4 ans (8 semestres)',
          languageOfStudy: 'Anglais',
          mainCourses: ['Algorithmes avancés', 'Gestion de bases de données', 'Programmation avancée', 'Génie Logiciel', 'Système d\'exploitation', 'Système et réseaux', 'Intelligence artificielle', 'Apprentissage automatique', 'Traitement des données', 'Réseaux de données', 'ETL/ELT', 'Big Data Analytics', 'Data Warehouse', 'Statistique']
        },
        {
          title: 'Mathématiques & Informatique',
          university: 'Université d\'Antananarivo',
          faculty: 'Faculté des Sciences',
          institutionUrl: 'https://siansa.univ-antananarivo.mg/',
          year: '2016 - 2018',
          logo: '/assets/diplomas/logo_maths.png',
          // logoPending: true,
          // specialization: 'Information Systems',
          // duration: '4 years - 8 semesters',
          statusNote: 'Parcours interrompu pour une opportunité de bourses extérieures.',
          languageOfStudy: 'Francais',
          mainCourses: ['Analyses', 'Algèbre', 'Maths Fondamentale', 'Probabilités', 'Statistiques', 'Programmation', 'Algorithmes']
        },
        {
          title: 'Baccalauréat - série C',
          // university: 'For 12 School - Antananarivo, Madagascar',
          faculty: 'For 12 School - Antananarivo, Madagascar',
          year: '2016',
          logo: '/assets/diplomas/logo_for12.png',
          // logoPending: true,
          // specialization: 'Information Systems',
          // duration: '4 years - 8 semesters',
          highlightNote: '🏆 Awards : A obtenu la meilleure note du pays en Mathématiques (97.5 / 100) au BACC 2016.',
          languageOfStudy: 'Francais'
        }
      ],
      certifications: [
        { title: 'IBM Data Science', issuer: 'Coursera', year: '2025', url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7T1ZMIL6LBJZ' },
        { title: 'Machine Learning Specialization', issuer: 'Stanford University', year: '2025', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/OWN7BSDX0SLD' },
        { title: 'SQL Programming', issuer: 'Astronomer', year: '2025', url: 'https://www.linkedin.com/learning/certificates/dabf51438bb4474d1b9438bd2413f3e899774383aa011e969fd2141691a09c29/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'Leadership Excellence in Business Management', issuer: 'Institute of Management, Technology and Finance - Linkedin ', year: '2025', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.udemy.com%2Fcertificate%2FUC-5c46e0fb-fd4b-4af3-8317-df07938f13d8%2F&urlhash=guTn&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'Data Management & Analysis for Cluster Information Management', issuer: 'UNICEF', year: '2025', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fagora.unicef.org%2Fmod%2Fcertificate%2Fview.php%3Fid%3D225473%26action%3Dget&urlhash=xWvU&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'JavaScript Foundations', issuer: 'Mozilla', year: '2025', url: 'https://www.linkedin.com/learning/certificates/aba4579d2f24437f7e4fd63985ac4d0d084f9f3cc210c3d68360f96972678f1d/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdMkb1EusScuIB2Q9fzfkLg%3D%3D' },
        { title: 'IT Support Professional Certificate', issuer: 'Google', year: '2023', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/96CLX6KUNKEZ' },
        { title: 'Google Data Analytics', issuer: 'Coursera', year: '2022', url: 'https://www.coursera.org/account/accomplishments/professional-cert/8Z9WRFBX6NT2' }
      ],
      showMore: 'Voir plus',
      showLess: 'Voir moins'
    },
    activities: {
      title: 'Volontariat',
      subtitle: 'Engagement communautaire et bénévolat',
      items: [
        {
          title: 'Formateur bénévole en Intelligence Artificielle',
          organization: 'Ivotoeran\'ny Tanora',
          organizationUrl: '',
          period: '2024',
          description: 'Animation de sessions de formation bénevole en intelligence artificielle pour des apprenants et des participants de la communauté pour une campagne municipale du 2024 - Antanananarivo.',
          skills: ['Intelligence Artificielle', 'Formation', 'Mentorat']
        },
        {
          title: 'Responsable Socio-Culturelle',
          organization: 'Diaspora Malagasy en Egypte',
          organizationUrl: '',
          period: '2021 - 2022',
          description: 'A dirigér et coordonner des activités socio-culturelles (sorties, voyages, rencontres, ... ) et aide à la communication de la communauté malgache en Egypte. Responsable de la Organisation d\'initiatives et d\'evenements.',
          skills: ['Leadership', 'Organisation d\'evenements', 'Communication']
        },
      ]
    },
    experience: {
      title: 'Expériences Professionnelles',
      subtitle: 'Parcours',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      items: [
        {
          title: 'Devéloppeur IA & Backend',
          company: 'ALAXIONE',
          companyUrl: 'https://www.alaxione.fr/',
          logo: '',
          period: '2026 - Présent',
          description: 'Entrainement et devéloppement de modèles IA pour l\'optimisation business, ainsi que résolution de tickets backend pour un fournisseur de solutions de santé numérique en France.',
          skills: ['Python', 'PHP', 'TypeScript', 'GCP / CX Agents Studio', 'Docker', 'CI/CD', 'Agentic AI', 'Voicebot Agents']
        },
        {
          title: 'AI Trainer (Freelance)',
          company: 'Toloka AI',
          companyUrl: 'https://toloka.ai',
          logo: '',
          period: '2025 - Present',
          description: 'Entrainement de modèles IA pour plusieurs cas d\'usage, incluant modération de contenu, analyse de sentiments et annotation de données afin d\'améliorer les performances et la précision des modèles.',
          skills: ['Data Collection', 'AI Training', 'Data Annotation', 'Quality Assurance', 'Model Evaluation']
        },
        {
          title: 'Data manager Intern',
          company: 'United Nations Population Fund - UNFPA Madagascar',
          companyUrl: 'https://madagascar.unfpa.org/en',
          logo: '',
          period: '2025',
          description: 'Gestion et analyse de données liées à la grossesse, aux nouveaux-nés, à la population et au devéloppement, contribuant à la prise de décision et à la planification des programmes de l\'UNFPA Madagascar.',
          skills: ['Data Collection', 'Data Cleaning', 'Data Analysis', 'Data Visualization', 'Data Reporting', 'Excel', 'Power BI', 'Kobo toolbox', 'Google Spreadsheets', 'Appscript']
        },
        {
          title: 'Stagiaire Développeur',
          company: 'Ministère de l\'Intérieur et de la Décentralisation - Madagascar',
          companyUrl: '',
          logo: '',
          period: '2024',
          description: 'Conception et devéloppement d\'une application web pour digitaliser le processus de délivrance de la carte nationale d\'identite (CIN).',
          skills: ['UML', 'System Design', 'Web Development', 'React JS', 'Django', 'MySQL', 'Git']
        },
        {
          title: 'Data Analyst - Centre d\'appels',
          company: 'CONCENTRIX EGYPT',
          companyUrl: 'https://www.concentrix.com/',
          logo: '',
          period: '2023 - 2024',
          description: 'Analyse des données d\'appels pour identifier les tendances, optimiser les opérations et améliorer la satisfaction client pour une entreprise mondiale de services business. Réalisation d\'analyses, de dashboards et de rapports pour soutenir la prise de décision.',
          skills: ['Data Analysis', 'Dashboarding', 'Reporting', 'Excel', 'AWS / Paragon']
        },
        {
          title: 'Support Technique Bilingue (ENG-FR)',
          company: 'Teleperformance EGYPT',
          companyUrl: 'https://www.tp.com/ar-eg/locations/egypt/',
          logo: '',
          period: '2019 - 2020',
          description: 'Support technique et assistance au dépannage en anglais et en francais pour une entreprise mondiale de gestion de l\'expérience client, afin de résoudre les problèmes techniques et d\'assurer la satisfaction client.',
          skills: ['AWS / Paragon', 'Technical Support', 'Troubleshooting', 'Customer Service', 'Bilingual Communication (English-French)']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Me Contacter',
      description: 'Vous avez un projet en tete ? Discutons de la manière dont je peux vous aider a exploiter vos données pour atteindre vos objectifs.',
      cta: 'Envoyez-moi un email',
      email: 'mananjolavisy2@gmail.com',
      location: 'Antananarivo, Madagascar',
      availability: 'Ouvert aux opportunités',
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
