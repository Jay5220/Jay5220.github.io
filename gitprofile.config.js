// gitprofile.config.js

const config = {
  github: {
    username: 'Jay5220', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jay-patel-3293b11a3',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '+1 (217)-550-3979',
    email: 'pateljay5220@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gcGd81EwE6CwCziyjS-aQ8ocqI1PrXhX/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'HTML5',
    'CSS3',
    'PHP',
    'JavaScript',
    'TypeScript',
    'Laravel',
    'React.js',
    'Node.js',
    'WordPress',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Microsoft Azure',
    'Postman',
    'JMeter',
    'Git',
    'Agile Development - Scrum'
  ],
  experiences: [
    {
      company: 'Office of Admissions - University of Texas at Arlington',
      position: 'Admissions Assistant - Captain',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://www.uta.edu/admissions/contact-us',
    },
    {
      company: 'ResilientHex Pvt. Ltd.',
      position: 'Back-End Developer Intern',
      from: 'Jan 2021',
      to: 'July 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Technical Essentials',
      year: 'February 2023',
      body: 'This course provided an introduction to the AWS Cloud platform and covered the fundamentals as well as provided hands-on experience with the core AWS services including Amazon Elastic Compute Cloud (Amazon EC2), Amazon Simple Storage Service (Amazon S3), and Amazon Virtual Private Cloud (Amazon VPC).',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'University of Texas at Arlington',
      degree: 'Master of Science in Computer Science',
      from: 'August 2021',
      to: 'May 2023',
    },
    {
      institution: 'Gujarat Technological University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      from: 'August 2017',
      to: 'July 2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Data Analysis and Retrieval Performance Optimisation Using Redis',
      description: '• Developed a Flask-based web application to analyze and import any data set into an Azure Cloud SQL database • Implemented a back-end using Python-Flask to process and analyze large volumes of data, and integrated Redis for fast data retrieval and caching. • Designed and developed a user-friendly front-end using HTML and CSS to display the results of the data analysis, providing an intuitive and interactive experience for users. • Achieved significant performance improvements through the use of Redis Cache and optimized back-end processing, ensuring fast and efficient data analysis and retrieval for users.',
      imageUrl: '',
      link: '',
    },
    {
      title: 'Multiplayer Game with Multiple Instances & Load Testing on Azure Cloud',
      description:
        "• Developed a Multiplayer Game (Game of Nim) with multiple instances and load tested it on the Azure cloud using Python, JavaScript, and JMeter. • Utilized Python and JavaScript to design and implement a real-time multiplayer game, allowing users to compete with each other in real-time. • Conducted load testing on Azure cloud using JMeter to assess the game's performance, scalability, and stability under high user loads, ensuring a seamless and enjoyable gaming experience for all players.",
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
