const resourceData = {
  
  "class8": [
    { chapterId: 1, chapterName: "What is Science?", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 2, chapterName: "Cell - The Basic Unit of Life", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 3, chapterName: "The World of Microorganisms Part I&II", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 4, chapterName: "Reproduction in Animals", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 5, chapterName: "The Age of Adolescence", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 6, chapterName: "Biodiversity and its Conservation", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 7, chapterName: "Different Ecosystems", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 8, chapterName: "Production of Food from Plants", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 9, chapterName: "Production of Food from Animals", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 10, chapterName: "Not for Breathing Not for Drinking", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 11, chapterName: "Why do we fall ill?", playlistUrl: "", modules: [], quizzes: [] }
  ],
  "class9": [
    { 
      chapterId: 1, 
      chapterName: "Cell - Structure and Functions", 
      playlistUrl: "", 
      modules: ["https://view.genially.com/6aa55b8a1b44580d49b8c70d"], 
      quizzes: [] 
    },
    { chapterId: 2, chapterName: "Plant Tissues", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 3, chapterName: "Animal Tissues", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 4, chapterName: "Transportation through Plasma Membrane", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 5, chapterName: "Diversity in Living Organisms", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 6, chapterName: "Sense Organs", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 7, chapterName: "Animal Behaviour", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 8, chapterName: "Challenges in Improving Agricultural Production", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 9, chapterName: "Adaptations in Different Ecosystems", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 10, chapterName: "Soil Pollution", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 11, chapterName: "Biogeochemical cycles", playlistUrl: "", modules: [], quizzes: [] }
  ],
  "class10": [
    { 
      chapterId: 1, 
      chapterName: "Nutrition", 
      playlistUrl: "https://www.youtube.com/playlist?list=PL3KgjzKcjj-rst5p9TUcBJz5ihI2ToR0h", 
      modules: [], 
      quizzes: [] 
    },
    { chapterId: 2, chapterName: "Respiration", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 3, chapterName: "Transportation", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 4, chapterName: "Excretion", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 5, chapterName: "Coordination", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 6, chapterName: "Reproduction", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 7, chapterName: "Coordination in life processes", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 8, chapterName: "Heredity and Evolution", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 9, chapterName: "Our environment", playlistUrl: "", modules: [], quizzes: [] },
    { chapterId: 10, chapterName: "Natural Resources", playlistUrl: "", modules: [], quizzes: [] }
  ]
};
const nutritionQuizData = [
    {
        id: 1,
        questionEn: "What is the primary reason why living organisms need food?",
        questionTe: "జీవులకు ఆహారం ప్రధానంగా ఏ కొరకు అవసరం?",
        options: {
            A: "Only for sleeping / నిద్రపోవడానికి మాత్రమే",
            B: "For growth and repair / పెరుగుదల మరియు మరమ్మత్తు కొరకు[span_1](start_span)[span_1](end_span)",
            C: "Only for respiration / శ్వాసక్రియ కొరకు మాత్రమే",
            D: "For excretion / విసర్జన కొరకు"
        },
        answer: "B"
    },
    {
        id: 2,
        questionEn: "Which process makes plants 'The universal food providers' for all living organisms?",
        questionTe: "మొకలను అన్ని జీవులకు 'విశ్వ ఆహార ప్రదాతలు'గా మార్చే ప్రక్రియ ఏది?",
        options: {
            A: "Transpiration / భాష్పోత్సేకం",
            B: "Respiration / శ్వాసక్రియ",
            C: "Digestion / జీర్ణక్రియ",
            D: "Photosynthesis / కిరణజన్య సంయోగక్రియ[span_2](start_span)[span_2](end_span)"
        },
        answer: "D"
    },
    {
        id: 3,
        questionEn: "Which scientist established the role of water in plant growth through a 5-year experiment?",
        questionTe: "5 సంవత్సరాల ప్రయోగం ద్వారా మొక్కల పెరుగుదలలో నీటి పాత్రను నిరూపించిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Van Helmont / వాన్ హెల్మాంట్[span_3](start_span)[span_3](end_span)",
            B: "Joseph Priestley / జోసెఫ్ ప్రిస్ట్లీ",
            C: "Jan Ingenhousz / జాన్ ఇంజెన్‌హౌజ్",
            D: "C.B. Van Niel / సి.బి. వాన్ నీల్"
        },
        answer: "A"
    },
    {
        id: 4,
        questionEn: "C.B. Van Niel worked on which organisms to understand photosynthesis?",
        questionTe: "కిరణజన్య సంయోగక్రియను అర్థం చేసుకోవడానికి సి.బి. వాన్ నీల్ ఏ జీవులపై ప్రయోగాలు చేశారు?",
        options: {
            A: "Green algae / ఆకుపచ్చ శైవలములు",
            B: "Amoeba / అమీబా",
            C: "Purple sulphur bacteria / గులాబీ రంగు సల్ఫర్ బ్యాక్టీరియా[span_4](start_span)[span_4](end_span)",
            D: "Fungi / శిలీంధ్రాలు"
        },
        answer: "C"
    },
    {
        id: 5,
        questionEn: "In Van Niel's experiment with purple sulphur bacteria, what was used instead of H2O?",
        questionTe: "వాన్ నీల్ ప్రయోగంలో గులాబీ సల్ఫర్ బ్యాక్టీరియాతో H2O స్థానంలో దేనిని ఉపయోగించారు?",
        options: {
            A: "HCl",
            B: "NH3",
            C: "CO2",
            D: "H2S (Hydrogen sulphide) / హైడ్రోజన్ సల్ఫైడ్[span_5](start_span)[span_5](end_span)"
        },
        answer: "D"
    },
    {
        id: 6,
        questionEn: "What is liberated instead of oxygen when bacteria are used in Van Niel's alternate equation?",
        questionTe: "వాన్ నీల్ ప్రత్యామ్నాయ సమీకరణంలో ఆక్సిజన్‌కు బదులుగా వెలువడే పదార్థం ఏది?",
        options: {
            A: "Sulphur / సల్ఫర్[span_6](start_span)[span_6](end_span)",
            B: "Nitrogen / నైట్రోజన్",
            C: "Carbon dioxide / కార్బన్‌డైఆక్సైడ్",
            D: "Hydrogen / హైడ్రోజన్"
        },
        answer: "A"
    },
    {
        id: 7,
        questionEn: "Who discovered Oxygen gas in the year 1774?",
        questionTe: "1774 సంవత్సరంలో ఆక్సిజన్ వాయువును కనుగొన్న శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Robert Hill / రాబర్ట్ హిల్",
            B: "Joseph Priestley / జోసెఫ్ ప్రిస్ట్లీ[span_7](start_span)[span_7](end_span)",
            C: "Lavoisier / లవ్‌సాయర్",
            D: "Engelman / ఎంగెల్‌మన్"
        },
        answer: "B"
    },
    {
        id: 8,
        questionEn: "Who coined the name 'Oxygen' in the year 1775?",
        questionTe: "1775 సంవత్సరంలో 'ఆక్సిజన్' అనే పేరును ఖరారు చేసిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Julius Von Sachs / జూలియస్ వాన్ సాక్స్",
            B: "Joseph Priestley / జోసెఫ్ ప్రిస్ట్లీ",
            C: "C.B. Van Niel / సి.బి. వాన్ నీల్",
            D: "Lavoisier / లవ్‌సాయర్[span_8](start_span)[span_8](end_span)"
        },
        answer: "D"
    },
    {
        id: 9,
        questionEn: "In Priestley's experiment, what was the role of the mint plant in the bell jar?",
        questionTe: "ప్రిస్ట్లీ ప్రయోగంలో బెల్ జార్‌లో ఉంచిన పుదీనా మొక్క పాత్ర ఏమిటి?",
        options: {
            A: "It restores the air that breathing animals and burning candles remove / జంతువులు మరియు మంటలు పాడుచేసిన గాలిని పునరుద్ధరిస్తుంది[span_9](start_span)[span_9](end_span)",
            B: "It consumes oxygen / ఇది ఆక్సిజన్‌ను పీల్చుకుంటుంది",
            C: "It produces carbon dioxide only / ఇది కార్బన్‌డైఆక్సైడ్‌ను మాత్రమే ఇస్తుంది",
            D: "It absorbs water / ఇది నీటిని పీల్చుకుంటుంది"
              
