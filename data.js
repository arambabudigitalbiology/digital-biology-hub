// ఈ ఫైల్‌లో మీరు ఎన్ని కొత్త వీడియోలు, క్విజ్‌లు, PDFలు అయినా యాడ్ చేసుకోవచ్చు. 
// index.html జోలికి వెళ్లాల్సిన పనే లేదు!

const resourceData = [
    
    // --- 1. LYSOSOMES QUIZ (Existing) ---
    {
        title: "Lysosomes (లైసోజోములు)",
        description: "Interactive Video Quiz covering suicidal bags of the cell and their functions.",
        type: "quiz",
        url: "lysosomes.html",       // ఇది మీరు తయారు చేసిన క్విజ్ ఫైల్ పేరు
        folders: ["class10", "student", "videos"], // ఈ కార్డ్ ఏయే ఫోల్డర్లలో కనిపించాలి?
        classBadge: "10th Class",
        badgeText: "Video Quiz",
        icon: "fas fa-biohazard",
        color: "#6366f1",            // Button & Icon Color (Indigo)
        bgColor: "#e0e7ff",          // Background color for top image area
        buttonText: "Play Quiz",
        buttonIcon: "fas fa-play-circle"
    },

    // --- 2. PHOTOSYNTHESIS QUIZ (Existing) ---
    {
        title: "Photosynthesis Mechanism",
        description: "Interactive Video Quiz covering light, stomata, xylem, and glucose formation.",
        type: "quiz",
        url: "photosynthesis.html",  // ఇది మీ ఫోటోసింథసిస్ ఫైల్ పేరు
        folders: ["class10", "student", "videos"],
        classBadge: "10th Class",
        badgeText: "Video Quiz",
        icon: "fas fa-leaf",
        color: "#059669",            // Green
        bgColor: "#d1fae5",
        buttonText: "Play Quiz",
        buttonIcon: "fas fa-play-circle"
    },

    // --- 3. YOUTUBE VIDEO LINK (Success Journey TV Example) ---
    {
        title: "Success Journey TV - Motivation & Tips",
        description: "Important tips for 10th class board exams success. Watch directly on my YouTube channel.",
        type: "youtube_embed",
        url: "https://www.youtube.com/@SuccessJourneyTV", // మీ యూట్యూబ్ వీడియో లింక్ ఇక్కడ ఇవ్వాలి
        folders: ["class10", "student", "youtube"],
        classBadge: "All Classes",
        badgeText: "YouTube",
        icon: "fab fa-youtube",
        color: "#ef4444",            // YouTube Red
        bgColor: "#fee2e2",
        buttonText: "Watch Video",
        buttonIcon: "fab fa-youtube"
    },

    // --- 4. TEACHER PORTAL - TLM EXAMPLE ---
    {
        title: "Biology TLM Models Gallery",
        description: "Innovative Teaching Learning Materials designed for effective classroom transaction.",
        type: "tlm",
        url: "#", // TLM page link will go here
        folders: ["teacher", "tlm", "images"],
        classBadge: "Teacher Portal",
        badgeText: "TLM Ideas",
        icon: "fas fa-tools",
        color: "#d97706",            // Orange
        bgColor: "#fef3c7",
        buttonText: "View Gallery",
        buttonIcon: "fas fa-images"
    },

    // --- 5. PDF & NOTES EXAMPLE (9th Class) ---
    {
        title: "9th Class Cell Structure Notes",
        description: "Complete chapter notes available for download in PDF format.",
        type: "pdf",
        url: "#", // PDF file link goes here
        folders: ["class9", "student", "pdf", "notes"],
        classBadge: "9th Class",
        badgeText: "PDF Note",
        icon: "fas fa-file-pdf",
        color: "#dc2626",            // Red
        bgColor: "#fee2e2",
        buttonText: "Download PDF",
        buttonIcon: "fas fa-download"
    }

    /* 
    కొత్తగా యాడ్ చేయాలంటే, పైన ఉన్న "{" నుండి "}," వరకు కాపీ చేసి, 
    కింద పేస్ట్ చేసి వివరాలు మార్చుకుంటే చాలు!
    
    Folders list you can use in the "folders" array:
    "teacher", "student", "class10", "class9", "class8", "videos", "youtube", "pdf", "notes", "tlm", "images"
    */
];
