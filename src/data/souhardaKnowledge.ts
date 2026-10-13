export interface Director {
  id: number;
  nameEn: string;
  nameKn: string;
  designationEn: string;
  designationKn: string;
  regionEn: string;
  regionKn: string;
}

export interface Workforce {
  id: number;
  nameEn: string;
  nameKn: string;
  roleEn: string;
  roleKn: string;
  phone: string;
  email: string;
}

// 1. BOARD OF DIRECTORS DATA
export const DIRECTORS_DATA: Director[] = [
  {
    id: 1,
    nameEn: "Sri. G. Nanjangouda",
    nameKn: "ಶ್ರೀ ಜಿ. ನಂಜನಗೌಡ",
    designationEn: "President",
    designationKn: "ಅಧ್ಯಕ್ಷರು",
    regionEn: "Vijayanagar",
    regionKn: "ವಿಜಯನಗರ"
  },
  {
    id: 2,
    nameEn: "Sri A R Prasannakumar",
    nameKn: "ಶ್ರೀ ಎ ಆರ್ ಪ್ರಸನ್ನಕುಮಾರ್",
    designationEn: "Vice - President",
    designationKn: "ಉಪಾಧ್ಯಕ್ಷರು",
    regionEn: "Shivamogga",
    regionKn: "ಶಿವಮೊಗ್ಗ"
  },
  {
    id: 3,
    nameEn: "Sri. B. H. Krishna Reddy",
    nameKn: "ಶ್ರೀ ಬಿ. ಎಚ್. ಕೃಷ್ಣ ರೆಡ್ಡಿ",
    designationEn: "Director",
    designationKn: "ನಿರ್ದೇಶಕರು",
    regionEn: "Kolar",
    regionKn: "ಕೋಲಾರ"
  },
  {
    id: 4,
    nameEn: "Sri Sharanagouda G. Patil",
    nameKn: "ಶ್ರೀ ಶರಣಗೌಡ ಜಿ. ಪಾಟೀಲ್",
    designationEn: "Managing Director",
    designationKn: "ಸಹ ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು",
    regionEn: "Head Office - Bengaluru",
    regionKn: "ಮುಖ್ಯ ಕಚೇರಿ - ಬೆಂಗಳೂರು"
  }
];

// 2. WORKFORCE & HELPDESK DATA
export const WORKFORCE_DATA: Workforce[] = [
  {
    id: 1,
    nameEn: "IT & E-Stamping Support Desk",
    nameKn: "ಐಟಿ ಮತ್ತು ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಸಹಾಯವಾಣಿ",
    roleEn: "Technical Helpdesk",
    roleKn: "ತಾಂತ್ರಿಕ ಸಹಾಯವಾಣಿ",
    phone: "080-23378375",
    email: "bgudo@souharda.coop"
  }
];

// 3. SUPPLEMENTARY METADATA
export const MEMBERS_SUMMARY = {
  totalCooperatives: "6,100+",
  annualTurnover: "₹77,000 Cr+",
  totalDeposits: "₹43,700 Cr+",
  regionsCovered: ["Bengaluru", "Belagavi", "Kalaburagi", "Mysuru"],
  actName: "Karnataka Souharda Sahakari Act, 1997"
};

export const COURT_LEGAL_DATA = {
  route: "/court/",
  titleEn: "Dispute Resolution & Arbitration Court",
  titleKn: "ನ್ಯಾಯಾಲಯ ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆ ವಿಭಾಗ",
  purposeEn: "Handles statutory dispute resolution, loan recovery proceedings, and arbitration awards under Section 39 of the KSS Act 1997.",
};

export const SWABHIMANI_SAHAKARI_DATA = {
  route: "/education/swabhimani-sahakari/",
  titleEn: "Swabhimani Sahakari Monthly Magazine",
  titleKn: "ಸ್ವಾಭಿಮಾನಿ ಸಹಕಾರಿ ಮಾಸಪತ್ರಿಕೆ",
  subscriptionEn: "Annual Subscription: ₹300 | Single Issue: ₹30"
};

export const SERVICES_SUMMARY = {
  education: {
    route: "/education/",
    courseName: "Diploma in Cooperation and Banking Management (DCBM)",
    totalFee: "₹5,600",
    duration: "6 Months"
  }
};