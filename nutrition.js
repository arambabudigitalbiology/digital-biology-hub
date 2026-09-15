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
        },
        answer: "A"
    },
    {
        id: 10,
        questionEn: "Massive amounts of gaseous exchange in plants occur through:",
        questionTe: "మొక్కలలో భారీ మొత్తంలో వాయు మార్పిడి జరిగే భాగాలు:",
        options: {
            A: "Roots / వేర్లు",
            B: "Stem bark / కాండపు బెరడు",
            C: "Stomata / పత్రరంధ్రాలు (స్టొమాట)[span_10](start_span)[span_10](end_span)",
            D: "Fruits / పండ్లు"
        },
        answer: "C"
    },
    {
        id: 11,
        questionEn: "What is the indicator used in Activity-1 to test the presence of starch in leaves?",
        questionTe: "యాక్టివిటీ-1 లో ఆకులలో స్టార్చ్ ఉనికిని పరీక్షించడానికి ఉపయోగించే సూచిక ఏది?",
        options: {
            A: "Iodine / Betadine solution / అయోడిన్ / బెటాడిన్ ద్రావణం[span_11](start_span)[span_11](end_span)",
            B: "Phenolphthalein / ఫినాల్ఫ్తాలిన్",
            C: "Methyl orange / మెథిల్ ఆరెంజ్",
            D: "Litmus paper / లిట్మస్ పేపర్"
        },
        answer: "A"
    },
    {
        id: 12,
        questionEn: "The presence of starch in a leaf is indicated by which colour change with iodine?",
        questionTe: "ఆకులో స్టార్చ్ ఉన్నప్పుడు అయోడిన్ పరీక్షలో ఏ రంగు ఏర్పడుతుంది?",
        options: {
            A: "Bright red / ముదురు ఎరుపు",
            B: "Milky white / పాల లాంటి తెలుపు",
            C: "Yellow / పసుపు",
            D: "Bluish black / నీలం-నలుపు రంగు (బ్లూయిష్ బ్లాక్)[span_12](start_span)[span_12](end_span)"
        },
        answer: "D"
    },
    {
        id: 13,
        questionEn: "What is the purpose of boiling the leaf in methylated spirit during the starch test?",
        questionTe: "స్టార్చ్ పరీక్ష సమయంలో ఆకును మెథిలేటెడ్ స్పిరిట్‌లో మరగబెట్టడం వెనుక ఉద్దేశ్యం ఏమిటి?",
        options: {
            A: "To add starch / స్టార్చ్ కలపడానికి",
            B: "To dissolve chlorophyll and make the leaf pale / క్లోరోఫిల్‌ను కరిగించి ఆకును పాలిపోయినట్లు చేయడానికి[span_13](start_span)[span_13](end_span)",
            C: "To make the leaf hard / ఆకును గట్టిగా చేయడానికి",
            D: "To add oxygen / ఆక్సిజన్ చేర్చడానికి"
        },
        answer: "B"
    },
    {
        id: 14,
        questionEn: "In Mohl’s half-leaf experiment (Activity-2), what substance is placed in the bottle to absorb carbon dioxide?",
        questionTe: "మోహల్ హాఫ్-లీఫ్ ప్రయోగంలో కార్బన్‌డైఆక్సైడ్‌ను పీల్చుకోవడానికి బాటిల్‌లో ఉంచే పదార్థం ఏది?",
        options: {
            A: "Potassium hydroxide (KOH) / పొటాషియం హైడ్రాక్సైడ్ (KOH)[span_14](start_span)[span_14](end_span)",
            B: "Sodium chloride / సోడియం క్లోరైడ్",
            C: "Copper sulphate / కాపర్ సల్ఫేట్",
            D: "Calcium carbonate / కాల్షియం కార్బోనేట్"
        },
        answer: "A"
    },
    {
        id: 15,
        questionEn: "Which scientist observed that oxygen bubbles are formed around green parts of aquatic plants only in sunlight?",
        questionTe: "నీటి మొక్కల ఆకుపచ్చ భాగాల చుట్టూ సూర్యరశ్మిలో మాత్రమే ఆక్సిజన్ బుడగలు ఏర్పడతాయని గమనించిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Robert Hill / రాబర్ట్ హిల్",
            B: "Jan Ingenhousz / జాన్ ఇంజెన్‌హౌజ్[span_15](start_span)[span_15](end_span)",
            C: "Julius Von Sachs / జూలియస్ వాన్ సాక్స్",
            D: "Engelman / ఎంగెల్‌మన్"
        },
        answer: "B"
    },
    {
        id: 16,
        questionEn: "Who used oxygen-sensitive bacteria and a strand of algae to detect the maximum rate of photosynthesis under different colours of light?",
        questionTe: "వివిధ రంగుల కాంతిలో కిరణజన్య సంయోగక్రియ రేటును కనుగొనడానికి ఆక్సిజన్-సెన్సిటివ్ బ్యాక్టీరియాను ఉపయోగించిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Van Helmont / వాన్ హెల్మాంట్",
            B: "Joseph Priestley / జోసెఫ్ ప్రిస్ట్లీ",
            C: "C.B. Van Niel / సి.బి. వాన్ నీల్",
            D: "Engelman / ఎంగెల్‌మన్[span_16](start_span)[span_16](end_span)"
        },
        answer: "D"
    },
    {
        id: 17,
        questionEn: "In the Hydrilla lab activity, how is the evolved gas tested?",
        questionTe: "హైడ్రిల్లా ప్రయోగంలో వెలువడిన వాయువును ఏ విధంగా పరీక్షించవచ్చు?",
        options: {
            A: "Using lime water / సున్నపు నీటిని ఉపయోగించి",
            B: "By smelling it / వాసన చూసి",
            C: "By inserting a glowing incense stick or match stick / మండుతున్న అగర్బత్తి లేదా అగ్గిపుల్లని ఉంచి[span_17](start_span)[span_17](end_span)",
            D: "Using litmus paper / లిట్మస్ పేపర్ ద్వారా"
        },
        answer: "C"
    },
    {
        id: 18,
        questionEn: "Why is a plant kept in a dark room for 3 days before conducting photosynthesis experiments?",
        questionTe: "కిరణజన్య సంయోగక్రియ ప్రయోగాలు చేయడానికి ముందు మొక్కను 3 రోజులు చీకటిలో ఉంచడానికి కారణం ఏమిటి?",
        options: {
            A: "To increase chlorophyll / క్లోరోఫిల్‌ను పెంచడానికి",
            B: "To destarch the leaves / ఆకులలోని స్టార్చ్‌ను తొలగించడానికి (డీస్టార్చ్ చేయడానికి)[span_18](start_span)[span_18](end_span)",
            C: "To kill the plant / మొక్కను చంపడానికి",
            D: "To remove water / నీటిని తొలగించడానికి"
        },
        answer: "B"
    },
    {
        id: 19,
        questionEn: "Who obtained an extract of the green coloured substance and named it 'chlorophyll' in 1817?",
        questionTe: "1817లో ఆకుపచ్చ పదార్థం యొక్క సారాన్ని వెలికితీసి దానికి 'క్లోరోఫిల్' అని పేరు పెట్టిన శాస్త్రవేత్తలు ఎవరు?",
        options: {
            A: "Watson and Crick / వాట్సన్ మరియు క్రిక్",
            B: "Banting and Best / బాంటింగ్ మరియు బెస్ట్",
            C: "Pelletier and Caventou / పెల్లెటియర్ మరియు కేవెంబో[span_19](start_span)[span_19](end_span)",
            D: "Schleiden and Schwann / శ్లీడన్ మరియు శ్వాన్"
        },
        answer: "C"
    },
    {
        id: 20,
        questionEn: "Who observed in 1883 that chlorophyll is found in cell organelles called 'chloroplasts'?",
        questionTe: "1883లో క్లోరోఫిల్ అనేది 'హరితరేణువులు' అనే కణాంగాలలో ఉంటుందని గుర్తించిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Daniel I. Arnon / డేనియల్ ఐ. ఆర్నాన్",
            B: "Robert Hill / రాబర్ట్ హిల్",
            C: "Jan Ingenhousz / జాన్ ఇంజెన్‌హౌజ్",
            D: "Julius Von Sachs / జూలియస్ వాన్ సాక్స్[span_20](start_span)[span_20](end_span)"
        },
        answer: "D"
    },
    {
        id: 21,
        questionEn: "Who successfully isolated whole chloroplasts for study in the lab in 1954?",
        questionTe: "1954లో సంపూర్ణ హరితరేణువులను వేరుచేసి ప్రయోగశాలలో అధ్యయనం చేసిన శాస్త్రవేత్త ఎవరు?",
        options: {
            A: "Robert Hooke / రాబర్ట్ హుక్",
            B: "Daniel I. Arnon / డేనియల్ ఐ. ఆర్నాన్[span_21](start_span)[span_21](end_span)",
            C: "C.B. Van Niel / సి.బి. వాన్ నీల్",
            D: "Paul Langerhans / పౌల్ లాంగర్‌హాన్స్"
        },
        answer: "B"
    },
    {
        id: 22,
        questionEn: "The stacked sac-like inner membrane structures inside a chloroplast are called:",
        questionTe: "హరితరేణువులో గొలుసుకట్టుగా లేదా పేర్చబడిన సంచుల వలె ఉండే అంతర్గత నిర్మాణాలను ఏమంటారు?",
        options: {
            A: "Grana / గ్రానా[span_22](start_span)[span_22](end_span)",
            B: "Stroma / స్ట్రోమా",
            C: "Ribosomes / రైబోసోములు",
            D: "Cristae / క్రిస్టె"
        },
        answer: "A"
    },
    {
        id: 23,
        questionEn: "The fluid-filled intermediary portion of the chloroplast where dark reactions occur is called:",
        questionTe: "హరితరేణువులో చీకటి చర్యలు జరిగే ద్రవంతో నిండిన భాగాన్ని ఏమంటారు?",
        options: {
            A: "Grana / గ్రానా",
            B: "Cytoplasm / సైటోప్లాజమ్",
            C: "Stroma / స్ట్రోమా[span_23](start_span)[span_23](end_span)",
            D: "Matrix / మాట్రిక్స్"
        },
        answer: "C"
    },
    {
        id: 24,
        questionEn: "Which metal atom is present in the chlorophyll molecule?",
        questionTe: "క్లోరోఫిల్ అణువులో ఉండే లోహ పరమాణువు ఏది?",
        options: {
            A: "Iron / ఇనుము (Fe)",
            B: "Calcium / కాల్షియం (Ca)",
            C: "Sodium / సోడియం (Na)",
            D: "Magnesium / మెగ్నీషియం (Mg)[span_24](start_span)[span_24](end_span)"
        },
        answer: "D"
    },
    {
        id: 25,
        questionEn: "Chlorophyll 'a' is what colour?",
        questionTe: "క్లోరోఫిల్ 'a' ఏ రంగులో ఉంటుంది?",
        options: {
            A: "Bluish-green / నీలం-ఆకుపచ్చ రంగు[span_25](start_span)[span_25](end_span)",
            B: "Yellowish-green / పసుపుపచ్చని రంగు",
            C: "Red / ఎరుపు",
            D: "Orange / నారింజ"
        },
        answer: "A"
    },
    {
        id: 26,
        questionEn: "Light-dependent reactions (photochemical phase) take place in which part of the chloroplast?",
        questionTe: "కిరణజన్య సంయోగక్రియ కాంతి చర్యలు (ఫోటోకెమికల్ దశ) హరితరేణువులోని ఏ భాగంలో జరుగుతాయి?",
        options: {
            A: "Stroma / స్ట్రోమా",
            B: "Outer membrane / వెలుపలి పొర",
            C: "Grana / గ్రానా[span_26](start_span)[span_26](end_span)",
            D: "Nucleus / కేంద్రకం"
        },
        answer: "C"
    },
    {
        id: 27,
        questionEn: "Photolysis of water (splitting of water molecules) during light reaction was discovered by:",
        questionTe: "కాంతి చర్యలో నీటి అణువు విచ్ఛిన్నం కావడాన్ని (ఫోటోలైసిస్) కనుగొన్న వారు:",
        options: {
            A: "C.B. Van Niel / సి.బి. వాన్ నీల్",
            B: "Robert Hill / రాబర్ట్ హిల్[span_27](start_span)[span_27](end_span)",
            C: "Jan Ingenhousz / జాన్ ఇంజెన్‌హౌజ్",
            D: "Engelman / ఎంగెల్‌మన్"
        },
        answer: "B"
    },
    {
        id: 28,
        questionEn: "What is the full form of NADP which picks up hydrogen during photolysis?",
        questionTe: "ఫోటోలైసిస్ సమయంలో హైడ్రోజన్‌ను స్వీకరించే NADP పూర్తి రూపం ఏమిటి?",
        options: {
            A: "Nitrogen Adenine Di-phosphate / నైట్రోజన్ అడెనిన్ డై-ఫాస్ఫేట్",
            B: "Nicotinamide Acid Di-phosphate / నికోటినమైడ్ యాసిడ్ డై-ఫాస్ఫేట్",
            C: "Nicotinamide Adenine Dinucleotide Phosphate / నికోటినమైడ్ అడెనిన్ డైన్యూక్లియోటైడ్ ఫాస్ఫేట్[span_28](start_span)[span_28](end_span)",
            D: "None of these / ఏదీ కాదు"
        },
        answer: "C"
    },
    {
        id: 29,
        questionEn: "Organisms that cannot prepare their own food and depend on others are called:",
        questionTe: "తම ఆహారాన్ని తాము తయారు చేసుకోలేక ఇతరులపై ఆధారపడే జీవులను ఏమంటారు?",
        options: {
            A: "Heterotrophs / పరపోషకాలు[span_29](start_span)[span_29](end_span)",
            B: "Autotrophs / స్వయంపోషకాలు",
            C: "Saprophytes only / పూతికకాహారులు మాత్రమే",
            D: "Producers / ఉత్పాదకులు"
        },
        answer: "A"
    },
    {
        id: 30,
        questionEn: "Organisms like mold, yeast, and mushrooms that break down food material outside the body and absorb it are called:",
        questionTe: "బ్రెడ్ మోల్డ్, ఈస్ట్, పుట్టగొడుగుల వలె శరీరం వెలుపల ఆహారాన్ని విచ్ఛిన్నం చేసి గ్రహించే జీవులను ఏమంటారు?",
        options: {
            A: "Parasites / పరాన్నజీవులు",
            B: "Herbivores / శాఖాహారులు",
            C: "Carnivores / మాంసాహారులు",
            D: "Saprophytes / పూతికకాహారులు[span_30](start_span)[span_30](end_span)"
        },
        answer: "D"
    },
    {
        id: 31,
        questionEn: "Cuscuta (Dodder) is an example of which type of nutrition?",
        questionTe: "కస్కుటా (అమరవల్లి) ఏ రకమైన పోషణకు ఉదాహరణ?",
        options: {
            A: "Parasitic nutrition / పరాన్నజీవ పోషణ[span_31](start_span)[span_31](end_span)",
            B: "Saprophytic / పూతికకాహార పోషణ",
            C: "Autotrophic / స్వయంపోషణ",
            D: "Holozoic / హోలోజోయిక్ పోషణ"
        },
        answer: "A"
    },
    {
        id: 32,
        questionEn: "Root-like structures in Cuscuta that penetrate the host plant to draw water and nutrients are called:",
        questionTe: "కస్కుటా మొక్క అతిధేయి నుండి నీరు మరియు పోషకాలను గ్రహించడానికి ఉపయోగించే వేరు వంటి నిర్మాణాలు:",
        options: {
            A: "Pseudopodia / మిధ్యాపాదాలు",
            B: "Villi / విల్లీ",
            C: "Haustoria / హస్టోరియా (చూషకాలు)[span_32](start_span)[span_32](end_span)",
            D: "Cilia / సిలియా"
        },
        answer: "C"
    },
    {
        id: 33,
        questionEn: "Which unicellular organism takes in food using temporary finger-like extensions called pseudopodia?",
        questionTe: "తాత్కాలిక వేళ్ల లాంటి పొడిగింపుల (మిధ్యాపాదాలు) ద్వారా ఆహారాన్ని గ్రహించే ఏకకణ జీవి ఏది?",
        options: {
            A: "Paramecium / పారామీషియం",
            B: "Bacteria / బ్యాక్టీరియా",
            C: "Yeast / ఈస్ట్",
            D: "Amoeba / అమీబా[span_33](start_span)[span_33](end_span)"
        },
        answer: "D"
    },
    {
        id: 34,
        questionEn: "In Paramecium, food is taken in at a specific spot moved by the movement of:",
        questionTe: "పారామీషియంలో దేని కదలిక ద్వారా నిర్దిష్ట స్థానం ద్వారా ఆహారం లోపలికి తీసుకోబడుతుంది?",
        options: {
            A: "Cilia / సిలియా[span_34](start_span)[span_34](end_span)",
            B: "Pseudopodia / మిధ్యాపాదాలు",
            C: "Flagella / ఫ్లాజెల్లా",
            D: "Haustoria / హస్టోరియా"
        },
        answer: "A"
    },
    {
        id: 35,
        questionEn: "The human alimentary canal is a long tube extending from:",
        questionTe: "మానవ ఆహార నాళం ఏ భాగం నుండి ఏ భాగం వరకు విస్తరించి ఉన్న పొడవైన గొట్టం?",
        options: {
            A: "Stomach to intestine / కడుపు నుండి ప్రేగు వరకు",
            B: "Oesophagus to stomach / అన్నవాహిక నుండి కడుపు వరకు",
            C: "Mouth to anus / నోరు నుండి పాయువు వరకు[span_35](start_span)[span_35](end_span)",
            D: "Mouth to stomach / నోరు నుండి కడుపు వరకు"
        },
        answer: "C"
    },
    {
        id: 36,
        questionEn: "Saliva mainly contains an enzyme called amylase (ptyalin) which breaks down:",
        questionTe: "లాలాజలంలో ఉండే అమైలేజ్ (టైలిన్) ఎంజైమ్ దేనిని విచ్ఛిన్నం చేస్తుంది?",
        options: {
            A: "Complex carbohydrates into simple ones / సంక్లిష్ట కార్బోహైడ్రేట్లను సరళమైనవిగా[span_36](start_span)[span_36](end_span)",
            B: "Proteins / ప్రొటీన్లు",
            C: "Fats into fatty acids / కొవ్వులను ఫ్యాటీ ఆమ్లాలుగా",
            D: "Vitamins / విటమిన్లు"
        },
        answer: "A"
    },
    {
        id: 37,
        questionEn: "The wave-like muscular movements in the oesophagus that push food down are called:",
        questionTe: "ఆహారాన్ని క్రిందికి నెట్టడానికి అన్నవాహికలో జరిగే తరంగ లాంటి కండరాల కదలికలను ఏమంటారు?",
        options: {
            A: "Mastication / నమలడం",
            B: "Emulsification / ఎమల్సిఫికేషన్",
            C: "Defecation / విసర్జన",
            D: "Peristaltic movements / పెరిస్టాల్టిక్ కదలికలు[span_37](start_span)[span_37](end_span)"
        },
        answer: "D"
    },
    {
        id: 38,
        questionEn: "Which acid is present in the gastric juice of the stomach?",
        questionTe: "జఠర రసంలో ఉండే ఆమ్లం ఏది?",
        options: {
            A: "Nitric acid / నైట్రిక్ ఆమ్లం",
            B: "Sulphuric acid / సల్ఫ్యూరిక్ ఆమ్లం",
            C: "Hydrochloric acid (HCl) / హైడ్రోక్లోరిక్ ఆమ్లం[span_38](start_span)[span_38](end_span)",
            D: "Acetic acid / ఎసిటిక్ ఆమ్లం"
        },
        answer: "C"
    },
    {
        id: 39,
        questionEn: "Whi
