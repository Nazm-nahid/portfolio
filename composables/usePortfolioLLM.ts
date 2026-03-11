export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const portfolioData = {
  name: 'MD. Nazmul Hossain Nahid',
  title: 'Software Engineer | Competitive Programmer',
  email: 'nazm.nahid@gmail.com',
  phone: '(+880) 1404343933',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/Nazm-nahid',
  linkedin: 'https://www.linkedin.com/in/nazm-nahid',

  about:
    'Software Engineer at Pathao with expertise in building secure and scalable systems. Active competitive programmer with strong problem-solving fundamentals.',

  workExperience: [
    {
      company: 'Pathao',
      position: 'Software Engineer I',
      period: 'June 2024 – Present',
      highlights: [
        'Built OTP verification platform (4x faster)',
        'Architected cohort-based feedback system (Jorip)',
        'Reduced parcel loss by ~80% with fraud detection',
      ],
    },
    {
      company: 'BYDO Academy',
      position: 'Junior Software Engineer (Part-time)',
      period: 'Sept 2021 – Sept 2022',
      highlights: ['Built user and content management systems', 'Scalable education platform'],
    },
  ],

  projects: [
    {
      name: 'Jorip — Feedback Collection Platform',
      techs: ['Golang', 'Nuxt.js', 'PostgreSQL', 'CI/CD'],
      description: 'Cohort-based feedback platform with webhooks and iframe integration',
    },
    {
      name: 'RUET CSE Alumni Platform',
      techs: ['Spring Boot', 'MySQL', 'JWT', 'REST API'],
      description: 'Alumni directory, forum, job portal with secure authentication',
    },
    {
      name: 'KhujeDei — Lost & Found Platform',
      techs: ['Spring Boot', 'MySQL', 'AI Face Recognition'],
      description: 'AI-powered lost-and-found system with chatbot automation',
    },
  ],

  skills: {
    languages: ['C', 'C++', 'Java', 'PHP', 'JavaScript', 'Python'],
    frameworks: ['Spring Boot', 'Laravel', 'Golang', 'Vue.js', 'Nuxt.js'],
    web: ['HTML', 'CSS', 'jQuery', 'Ajax', 'TailwindCSS'],
    database: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'CI/CD'],
  },

  achievements: [
    'Solved 1300+ DSA problems across online judges',
    'ICPC Dhaka Regional 2023 — 121st place',
    'RUET Codesmash 2019 — 5th place among 200 participants',
    'Problem Setter — Code to Save a Mother, RUET Codesmash 2020',
    'Codeforces Specialist (Max Rating: 1584)',
    'CodeChef (Max Rating: 1855)',
  ],

  education: {
    school: 'Rajshahi University of Engineering & Technology (RUET)',
    degree: 'B.Sc. in Computer Science and Engineering',
    graduation: 2024,
    cgpa: 3.49,
  },
};

const knowledgeBase = [
  {
    keywords: ['who', 'you', 'yourself', 'introduce', 'name'],
    response: `I'm ${portfolioData.name}, a ${portfolioData.title}. ${portfolioData.about} I'm based in ${portfolioData.location}.`,
  },
  {
    keywords: ['work', 'job', 'career', 'pathao', 'engineer', 'experience', 'position'],
    response: `I'm currently a Software Engineer at Pathao (June 2024 – Present), where I've built OTP verification platforms, architected the Jorip feedback system, and reduced parcel loss by ~80%. Previously, I worked at BYDO Academy (Sept 2021 – Sept 2022) as a Junior Software Engineer.`,
  },
  {
    keywords: ['skill', 'technology', 'language', 'framework', 'stack', 'tech', 'expertise'],
    response: `Languages: C, C++, Java, PHP, JavaScript, Python. Frameworks: Spring Boot, Laravel, Golang, Vue.js, Nuxt.js. Databases: MySQL, PostgreSQL. Tools: Git, Docker, CI/CD. I also have experience with HTML, CSS, jQuery, and TailwindCSS.`,
  },
  {
    keywords: ['project', 'portfolio', 'built', 'developed', 'created', 'build'],
    response: `I've built three major projects: 1) Jorip - A cohort-based feedback platform with Golang, Nuxt.js, and PostgreSQL. 2) RUET CSE Alumni Platform - Backend for alumni directory, forum, and job portal. 3) KhujeDei - An AI-powered lost-and-found system with face recognition and chatbot integration.`,
  },
  {
    keywords: ['achievement', 'contest', 'competition', 'codeforces', 'codechef', 'dsa', 'problem', 'icpc', 'competitive'],
    response: `I've solved 1300+ DSA problems across online judges. Achievements include: ICPC Dhaka Regional 2023 (121st place), RUET Codesmash 2019 (5th place), Codeforces Specialist (Max Rating: 1584), and CodeChef (Max Rating: 1855). I was also a Problem Setter for RUET Codesmash 2020.`,
  },
  {
    keywords: ['education', 'degree', 'university', 'study', 'studied', 'school', 'college', 'ruet', 'cgpa', 'graduation', 'graduate'],
    response: `I studied at RUET (Rajshahi University of Engineering & Technology) where I earned my B.Sc. in Computer Science and Engineering, graduating in 2024 with a CGPA of 3.49. The university is located in Rajshahi, Bangladesh, and has a strong focus on engineering and technology.`,
  },
  {
    keywords: ['jorip', 'feedback', 'churn', 'data-driven'],
    response: `Jorip is a scalable cohort-based feedback collection platform I architected at Pathao. It features webhooks, dynamic configuration, and iframe integration for seamless integration. Built with Golang, Nuxt.js, and PostgreSQL, deployed via CI/CD pipelines. It significantly helped reduce customer churn by enabling data-driven product decisions.`,
  },
  {
    keywords: ['alumni', 'directory', 'forum', 'job', 'portal'],
    response: `The RUET CSE Alumni Platform is a comprehensive backend system supporting alumni directory, forum discussions, job portal, and events. It features secure REST APIs, JWT authentication, OTP email verification, and strong password encryption for access control. This was an academic project during my time at RUET.`,
  },
  {
    keywords: ['khujedei', 'lost', 'found', 'face', 'recognition', 'ai', 'chatbot'],
    response: `KhujeDei is an intelligent lost-and-found system integrating AI-based face recognition and Messenger chatbot automation. It includes an admin dashboard for case management and was built with Spring Boot, MySQL, REST APIs, and JWT authentication. A personal project showcasing AI integration.`,
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'linkedin', 'github', 'connect', 'message'],
    response: `You can reach me at: Email: ${portfolioData.email} | Phone: ${portfolioData.phone} | GitHub: ${portfolioData.github} | LinkedIn: ${portfolioData.linkedin}`,
  },
  {
    keywords: ['verification', 'otp', 'bypass', 'faster', '4x', 'fast', 'operations'],
    response: `I built an internal OTP verification platform at Pathao that made operations 4x faster! It features activity logs, audit validation, and secure workflows, significantly reducing manual operations. This was a critical internal tool that improved team efficiency dramatically.`,
  },
  {
    keywords: ['fraud', 'parcel', 'loss', '80', 'security', 'workflow', 'detection'],
    response: `I re-engineered Pathao's pickup, authentication, and payment workflows with advanced fraud detection. This reduced parcel loss by ~80% and fraudulent activities by at least 30%. This involved analyzing security vulnerabilities and implementing comprehensive checks.`,
  },
  {
    keywords: ['spring', 'boot', 'golang', 'nuxt', 'vue', 'react', 'nodejs', 'express'],
    response: `I have deep experience with multiple frameworks! Spring Boot for Java backend development, Golang for high-performance systems, Nuxt.js and Vue.js for frontend, and Node.js/Express for JavaScript backends. I choose the right tool based on project requirements.`,
  },
  {
    keywords: ['database', 'mysql', 'postgresql', 'sql', 'data'],
    response: `I work with both MySQL and PostgreSQL. MySQL for simpler applications and quick deployments, PostgreSQL for complex queries, better reliability, and advanced features. I design efficient schemas and optimize queries for performance.`,
  },
  {
    keywords: ['bydo', 'academy', 'education', 'learning', 'platform'],
    response: `At BYDO Academy, I worked as a Junior Software Engineer (Part-time, Sept 2021 – Sept 2022). I built and maintained scalable user and content management systems for an education-focused social platform supporting users, course access, posts, and threaded discussions.`,
  },
  {
    keywords: ['docker', 'ci', 'cd', 'deploy', 'devops', 'git', 'tools'],
    response: `I have solid DevOps knowledge including Docker for containerization, CI/CD pipelines for automated deployments, and Git for version control. I believe in automation and continuous improvement in development workflows.`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'start', 'begin'],
    response: `Hey! 👋 I'm Nahid, a Software Engineer and Competitive Programmer. Ask me anything about my experience, projects, skills, achievements, or education. I'm happy to chat!`,
  },
  {
    keywords: ['thanks', 'thank', 'thanks!', 'appreciated', 'cool', 'nice'],
    response: `You're welcome! Feel free to ask more questions. I'd love to tell you more about my work and projects! 😊`,
  },
  {
    keywords: ['byda'],
    response: `BYDO Academy is a virtual learning school providing seamless online education. During my time there, I built scalable systems for user management and content delivery.`,
  },
];

function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

function extractKeywords(text: string): string[] {
  // Remove common words and extract meaningful keywords
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from',
    'is', 'are', 'was', 'were', 'be', 'been', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
    'can', 'have', 'has', 'had', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'this', 'that',
    'what', 'how', 'why', 'when', 'where', 'which', 'who', 'whom', 'me', 'you', 'him', 'us', 'them',
  ]);

  return text
    .toLowerCase()
    .split(/[\s\W]+/)
    .filter((word) => word.length > 0 && !stopWords.has(word));
}

function calculateSimilarity(keywords: string[], pattern: string[]): number {
  let matches = 0;
  for (const keyword of keywords) {
    if (pattern.includes(keyword)) {
      matches += 2; // Direct match
    } else {
      // Check for partial matches
      for (const p of pattern) {
        if (p.includes(keyword) || keyword.includes(p)) {
          matches += 1;
        }
      }
    }
  }
  return matches;
}

function findBestMatch(userMessage: string): string {
  const normalized = normalizeText(userMessage);
  const keywords = extractKeywords(normalized);

  // If no keywords found, it might be too short - try direct matching
  if (keywords.length === 0) {
    keywords.push(...normalized.split(/\s+/));
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const kb of knowledgeBase) {
    const score = calculateSimilarity(keywords, kb.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = kb;
    }
  }

  // If we found a match with at least one keyword match, return it
  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  // Fallback responses
  const fallbacks = [
    "That's a great question! You can find more details about me in my portfolio or reach out to me directly at nazm.nahid@gmail.com!",
    "I might not have covered that yet, but I'd love to discuss it further! Feel free to message me or check my projects.",
    "Interesting topic! Feel free to ask about my experience, skills, or projects - those I can definitely tell you about!",
    "I'm not sure I have specific info on that, but feel free to contact me via email or LinkedIn to chat more!",
    "Good question! You can learn more about me by checking out my projects section or reaching out directly!",
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

export function usePortfolioLLM() {
  const messages = ref<ChatMessage[]>([]);
  const isLoading = ref(false);

  const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const message: ChatMessage = {
      id: generateId(),
      role,
      content,
      timestamp: new Date(),
    };
    messages.value.push(message);
    return message;
  };

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    // Add user message
    addMessage('user', userInput);
    isLoading.value = true;

    // Simulate thinking delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Generate response
    const response = findBestMatch(userInput);
    addMessage('assistant', response);

    isLoading.value = false;
  };

  const clearMessages = () => {
    messages.value = [];
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
}
