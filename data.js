// ఈ ఫైల్‌లో మీరు ఎన్ని కొత్త వీడియోలు, క్విజ్‌లు, PDFలు అయినా యాడ్ చేసుకోవచ్చు. 
// index.html జోలికి వెళ్లాల్సిన పనే లేదు!

const resourceData = [
    
    // --- 1. LYSOSOMES QUIZ ---
    {
        title: "Lysosomes (లైసోజోములు)",
        description: "Interactive Video Quiz covering suicidal bags of the cell and their functions.",
        type: "quiz",
        url: "lysosomes.html",       
        // ఈ కార్డ్ ఏయే ఫోల్డర్లలో కనిపించాలో కింద రాయాలి:
        folders: ["class10", "student", "videos"], 
        classBadge: "10th Class",
        badgeText: "Video Quiz",
        icon: "fas fa-biohazard",
        color: "#6366f1",            
        bgColor: "#e0e7ff",          
        buttonText: "Play Quiz",
        buttonIcon: "fas fa-play-circle"
    },

    // --- 2. PHOTOSYNTHESIS QUIZ ---
    {
        title: "Photosynthesis Mechanism",
        description: "Interactive Video Quiz covering light, stomata, xylem, and glucose formation.",
        type: "quiz",
        url: "photosynthesis.html",  
        folders: ["class10", "student", "videos"],
        classBadge: "10th Class",
        badgeText: "Video Quiz",
        icon: "fas fa-leaf",
        color: "#059669",            
        bgColor: "#d1fae5",
        buttonText: "Play Quiz",
        buttonIcon: "fas fa-play-circle"
    },

    // --- 3. YOUTUBE CHANNEL LINK ---
    {
        title: "Success Journey TV",
        description: "Watch Motivation, Tips, and Biology Lessons directly on my YouTube channel.",
        type: "youtube_link",
        url: "https://www.youtube.com/@SuccessJourneyTV", // మీ యూట్యూబ్ లింక్ ఇక్కడ ఉంటుంది
        folders: ["youtube", "student", "class10", "class9", "class8"],
        classBadge: "All Classes",
        badgeText: "YouTube",
        icon: "fab fa-youtube",
        color: "#ef4444",            
        bgColor: "#fee2e2",
        buttonText: "Watch on YouTube",
        buttonIcon: "fab fa-youtube"
    },

    // --- 4. TEACHER PORTAL - TLM EXAMPLE ---
    {
        title: "Biology TLM Models Gallery",
        description: "Innovative Teaching Learning Materials for effective classroom transaction.",
        type: "tlm",
        url: "#", // TLM page link will go here when you create it
        folders: ["teacher", "tlm", "images"],
        classBadge: "Teacher Portal",
        badgeText: "TLM Ideas",
        icon: "fas fa-tools",
        color: "#d97706",            
        bgColor: "#fef3c7",
        buttonText: "View Gallery",
        buttonIcon: "fas fa-images"
    },

    // --- 5. PDF NOTES EXAMPLE (9th Class) ---
    {
        title: "9th Class Cell Structure Notes",
        description: "Complete chapter notes available for download in PDF format.",
        type: "pdf",
        url: "#", // PDF file link goes here
        folders: ["class9", "student", "pdf", "notes"],
        classBadge: "9th Class",
        badgeText: "PDF Note",
        icon: "fas fa-file-pdf",
        color: "#dc2626",            
        bgColor: "#fee2e2",
        buttonText: "Download PDF",
        buttonIcon: "fas fa-download"
    },
        // --- క్రొత్త యూట్యూబ్ వీడియో ---
    {
        title: "PLANT CELL ANIMAL CELL",
        description: "Plant cells and animal cells are both eukaryotic cells, but they have several differences. A plant cell has a rigid cell wall, while an animal cell does not have a cell wall. Plant cells contain chloroplasts for photosynthesis, whereas animal cells do not contain chloroplasts. Plant cells usually have one large central vacuole, while animal cells have small and temporary vacuoles. Plant cells generally have a fixed, rectangular shape because of the cell wall, whereas animal cells usually have a flexible and irregular shape. Plant cells store food mainly in the form of starch, while animal cells store food mainly as glycogen. Both plant and animal cells have a cell membrane, cytoplasm, nucleus, mitochondria, and other common cell organelles.",
        type: "youtube_link",
        url: "https://youtu.be/kmKob-1-sL8", 
        folders: ["class10", "youtube", "student"], 
        classBadge: "10th Class",
        badgeText: "YouTube Video",
        icon: "fab fa-youtube",
        color: "#ef4444",            
        bgColor: "#fee2e2",
        buttonText: "Watch Video",
        buttonIcon: "fas fa-play"
    }
    

    /* 
    కొత్తగా యాడ్ చేయాలంటే, పైన ఉన్న "{" నుండి "}," వరకు కాపీ చేసి, 
    కింద పేస్ట్ చేసి వివరాలు మార్చుకుంటే చాలు!
    
    Folders list you can use in the "folders" array:
    "teacher", "student", "class10", "class9", "class8", "videos", "youtube", "pdf", "notes", "tlm", "images"
    */
];
