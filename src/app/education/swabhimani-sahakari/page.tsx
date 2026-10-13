'use client';

import React, { useState, useMemo } from 'react';
import { Search, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import EducationHero from '@/components/common/EducationHero';

// 1. Available years array (2026 down to 2011)
const AVAILABLE_YEARS = Array.from({ length: 2026 - 2011 + 1 }, (_, i) => (2026 - i).toString());

// 2. Publication Dataset
const magazineData = {
  issues: [
    // 2026
    { year: '2026', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2026', displayNameEn: 'October 2026', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೬' },
    { year: '2026', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2026', displayNameEn: 'September 2026', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೬' },
    { year: '2026', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2026', displayNameEn: 'August 2026', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೬' },
    { year: '2026', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2026', displayNameEn: 'July 2026', displayNameKn: 'ಜುಲೈ ೨೦೨೬' },
    { year: '2026', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2026', displayNameEn: 'April 2026', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೬' },
    { year: '2026', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2026', displayNameEn: 'March 2026', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೬' },
    { year: '2026', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2026', displayNameEn: 'February 2026', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೬' },
    { year: '2026', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2026', displayNameEn: 'January 2026', displayNameKn: 'ಜನವರಿ ೨೦೨೬' },

    // 2025
    { year: '2025', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2025', displayNameEn: 'December 2025', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೫' },
    { year: '2025', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2025', displayNameEn: 'November 2025', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೫' },
    { year: '2025', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2025', displayNameEn: 'October 2025', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೫' },
    { year: '2025', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2025', displayNameEn: 'September 2025', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೫' },
    { year: '2025', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2025', displayNameEn: 'August 2025', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೫' },
    { year: '2025', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2025', displayNameEn: 'July 2025', displayNameKn: 'ಜುಲೈ ೨೦೨೫' },
    { year: '2025', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2025', displayNameEn: 'June 2025', displayNameKn: 'ಜೂನ್ ೨೦೨೫' },
    { year: '2025', month: 'May', baseName: 'Swabhimani_Sahakari_May_2025', displayNameEn: 'May 2025', displayNameKn: 'ಮೇ ೨೦೨೫' },
    { year: '2025', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2025', displayNameEn: 'April 2025', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೫' },
    { year: '2025', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2025', displayNameEn: 'March 2025', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೫' },
    { year: '2025', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2025', displayNameEn: 'February 2025', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೫' },
    { year: '2025', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2025', displayNameEn: 'January 2025', displayNameKn: 'ಜನವರಿ ೨೦೨೫' },

    // 2024
    { year: '2024', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2024', displayNameEn: 'December 2024', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೪' },
    { year: '2024', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2024', displayNameEn: 'November 2024', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೪' },
    { year: '2024', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2024', displayNameEn: 'October 2024', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೪' },
    { year: '2024', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2024', displayNameEn: 'September 2024', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೪' },
    { year: '2024', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2024', displayNameEn: 'August 2024', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೪' },
    { year: '2024', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2024', displayNameEn: 'July 2024', displayNameKn: 'ಜುಲೈ ೨೦೨೪' },
    { year: '2024', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2024', displayNameEn: 'June 2024', displayNameKn: 'ಜೂನ್ ೨೦೨೪' },
    { year: '2024', month: 'May', baseName: 'Swabhimani_Sahakari_May_2024', displayNameEn: 'May 2024', displayNameKn: 'ಮೇ ೨೦೨೪' },
    { year: '2024', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2024', displayNameEn: 'April 2024', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೪' },
    { year: '2024', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2024', displayNameEn: 'March 2024', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೪' },
    { year: '2024', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2024', displayNameEn: 'February 2024', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೪' },
    { year: '2024', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2024', displayNameEn: 'January 2024', displayNameKn: 'ಜನವರಿ ೨೦೨೪' },

    // 2023
    { year: '2023', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2023', displayNameEn: 'December 2023', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೩' },
    { year: '2023', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2023', displayNameEn: 'November 2023', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೩' },
    { year: '2023', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2023', displayNameEn: 'October 2023', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೩' },
    { year: '2023', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2023', displayNameEn: 'September 2023', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೩' },
    { year: '2023', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2023', displayNameEn: 'August 2023', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೩' },
    { year: '2023', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2023', displayNameEn: 'July 2023', displayNameKn: 'ಜುಲೈ ೨೦೨೩' },
    { year: '2023', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2023', displayNameEn: 'June 2023', displayNameKn: 'ಜೂನ್ ೨೦೨೩' },
    { year: '2023', month: 'May', baseName: 'Swabhimani_Sahakari_May_2023', displayNameEn: 'May 2023', displayNameKn: 'ಮೇ ೨೦೨೩' },
    { year: '2023', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2023', displayNameEn: 'April 2023', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೩' },
    { year: '2023', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2023', displayNameEn: 'March 2023', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೩' },
    { year: '2023', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2023', displayNameEn: 'February 2023', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೩' },
    { year: '2023', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2023', displayNameEn: 'January 2023', displayNameKn: 'ಜನವರಿ ೨೦೨೩' },

    // 2022
    { year: '2022', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2022', displayNameEn: 'December 2022', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೨' },
    { year: '2022', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2022', displayNameEn: 'November 2022', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೨' },
    { year: '2022', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2022', displayNameEn: 'October 2022', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೨' },
    { year: '2022', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2022', displayNameEn: 'September 2022', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೨' },
    { year: '2022', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2022', displayNameEn: 'August 2022', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೨' },
    { year: '2022', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2022', displayNameEn: 'July 2022', displayNameKn: 'ಜುಲೈ ೨೦೨೨' },
    { year: '2022', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2022', displayNameEn: 'June 2022', displayNameKn: 'ಜೂನ್ ೨೦೨೨' },
    { year: '2022', month: 'May', baseName: 'Swabhimani_Sahakari_May_2022', displayNameEn: 'May 2022', displayNameKn: 'ಮೇ ೨೦೨೨' },
    { year: '2022', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2022', displayNameEn: 'April 2022', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೨' },
    { year: '2022', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2022', displayNameEn: 'March 2022', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೨' },
    { year: '2022', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2022', displayNameEn: 'February 2022', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೨' },
    { year: '2022', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2022', displayNameEn: 'January 2022', displayNameKn: 'ಜನವರಿ ೨೦೨೨' },

    // 2021
    { year: '2021', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2021', displayNameEn: 'December 2021', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೧' },
    { year: '2021', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2021', displayNameEn: 'November 2021', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೧' },
    { year: '2021', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2021', displayNameEn: 'October 2021', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೧' },
    { year: '2021', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2021', displayNameEn: 'September 2021', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೧' },
    { year: '2021', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2021', displayNameEn: 'August 2021', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೧' },
    { year: '2021', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2021', displayNameEn: 'July 2021', displayNameKn: 'ಜುಲೈ ೨೦೨೧' },
    { year: '2021', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2021', displayNameEn: 'June 2021', displayNameKn: 'ಜೂನ್ ೨೦೨೧' },
    { year: '2021', month: 'May', baseName: 'Swabhimani_Sahakari_May_2021', displayNameEn: 'May 2021', displayNameKn: 'ಮೇ ೨೦೨೧' },
    { year: '2021', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2021', displayNameEn: 'April 2021', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೧' },
    { year: '2021', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2021', displayNameEn: 'March 2021', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೧' },
    { year: '2021', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2021', displayNameEn: 'February 2021', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೧' },
    { year: '2021', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2021', displayNameEn: 'January 2021', displayNameKn: 'ಜನವರಿ ೨೦೨೧' },

    // 2020
    { year: '2020', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2020', displayNameEn: 'December 2020', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೨೦' },
    { year: '2020', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2020', displayNameEn: 'November 2020', displayNameKn: 'ನವೆಂಬರ್ ೨೦೨೦' },
    { year: '2020', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2020', displayNameEn: 'October 2020', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೨೦' },
    { year: '2020', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2020', displayNameEn: 'September 2020', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೦' },
    { year: '2020', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2020', displayNameEn: 'August 2020', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೨೦' },
    { year: '2020', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2020', displayNameEn: 'July 2020', displayNameKn: 'ಜುಲೈ ೨೦೨೦' },
    { year: '2020', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2020', displayNameEn: 'June 2020', displayNameKn: 'ಜೂನ್ ೨೦೨೦' },
    { year: '2020', month: 'May', baseName: 'Swabhimani_Sahakari_May_2020', displayNameEn: 'May 2020', displayNameKn: 'ಮೇ ೨೦೨೦' },
    { year: '2020', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2020', displayNameEn: 'April 2020', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೨೦' },
    { year: '2020', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2020', displayNameEn: 'March 2020', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೨೦' },
    { year: '2020', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2020', displayNameEn: 'February 2020', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೨೦' },
    { year: '2020', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2020', displayNameEn: 'January 2020', displayNameKn: 'ಜನವರಿ ೨೦೨೦' },

    // 2019
    { year: '2019', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2019', displayNameEn: 'December 2019', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೯' },
    { year: '2019', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2019', displayNameEn: 'November 2019', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೯' },
    { year: '2019', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2019', displayNameEn: 'October 2019', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೯' },
    { year: '2019', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2019', displayNameEn: 'September 2019', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೯' },
    { year: '2019', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2019', displayNameEn: 'August 2019', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೯' },
    { year: '2019', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2019', displayNameEn: 'July 2019', displayNameKn: 'ಜುಲೈ ೨೦೧೯' },
    { year: '2019', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2019', displayNameEn: 'June 2019', displayNameKn: 'ಜೂನ್ ೨೦೧೯' },
    { year: '2019', month: 'May', baseName: 'Swabhimani_Sahakari_May_2019', displayNameEn: 'May 2019', displayNameKn: 'ಮೇ ೨೦೧೯' },
    { year: '2019', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2019', displayNameEn: 'April 2019', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೯' },
    { year: '2019', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2019', displayNameEn: 'March 2019', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೯' },
    { year: '2019', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2019', displayNameEn: 'February 2019', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೯' },
    { year: '2019', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2019', displayNameEn: 'January 2019', displayNameKn: 'ಜನವರಿ ೨೦೧೯' },

    // 2018
    { year: '2018', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2018', displayNameEn: 'December 2018', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೮' },
    { year: '2018', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2018', displayNameEn: 'November 2018', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೮' },
    { year: '2018', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2018', displayNameEn: 'October 2018', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೮' },
    { year: '2018', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2018', displayNameEn: 'September 2018', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೮' },
    { year: '2018', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2018', displayNameEn: 'August 2018', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೮' },
    { year: '2018', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2018', displayNameEn: 'July 2018', displayNameKn: 'ಜುಲೈ ೨೦೧೮' },
    { year: '2018', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2018', displayNameEn: 'June 2018', displayNameKn: 'ಜೂನ್ ೨೦೧೮' },
    { year: '2018', month: 'May', baseName: 'Swabhimani_Sahakari_May_2018', displayNameEn: 'May 2018', displayNameKn: 'ಮೇ ೨೦೧೮' },
    { year: '2018', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2018', displayNameEn: 'April 2018', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೮' },
    { year: '2018', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2018', displayNameEn: 'March 2018', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೮' },
    { year: '2018', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2018', displayNameEn: 'February 2018', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೮' },
    { year: '2018', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2018', displayNameEn: 'January 2018', displayNameKn: 'ಜನವರಿ ೨೦೧೮' },

    // 2017
    { year: '2017', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2017', displayNameEn: 'December 2017', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೭' },
    { year: '2017', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2017', displayNameEn: 'November 2017', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೭' },
    { year: '2017', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2017', displayNameEn: 'October 2017', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೭' },
    { year: '2017', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2017', displayNameEn: 'September 2017', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೭' },
    { year: '2017', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2017', displayNameEn: 'August 2017', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೭' },
    { year: '2017', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2017', displayNameEn: 'July 2017', displayNameKn: 'ಜುಲೈ ೨೦೧೭' },
    { year: '2017', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2017', displayNameEn: 'June 2017', displayNameKn: 'ಜೂನ್ ೨೦೧೭' },
    { year: '2017', month: 'May', baseName: 'Swabhimani_Sahakari_May_2017', displayNameEn: 'May 2017', displayNameKn: 'ಮೇ ೨೦೧೭' },
    { year: '2017', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2017', displayNameEn: 'April 2017', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೭' },
    { year: '2017', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2017', displayNameEn: 'March 2017', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೭' },
    { year: '2017', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2017', displayNameEn: 'February 2017', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೭' },
    { year: '2017', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2017', displayNameEn: 'January 2017', displayNameKn: 'ಜನವರಿ ೨೦೧೭' },

    // 2016
    { year: '2016', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2016', displayNameEn: 'December 2016', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೬' },
    { year: '2016', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2016', displayNameEn: 'November 2016', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೬' },
    { year: '2016', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2016', displayNameEn: 'October 2016', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೬' },
    { year: '2016', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2016', displayNameEn: 'September 2016', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೬' },
    { year: '2016', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2016', displayNameEn: 'August 2016', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೬' },
    { year: '2016', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2016', displayNameEn: 'July 2016', displayNameKn: 'ಜುಲೈ ೨೦೧೬' },
    { year: '2016', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2016', displayNameEn: 'June 2016', displayNameKn: 'ಜೂನ್ ೨೦೧೬' },
    { year: '2016', month: 'May', baseName: 'Swabhimani_Sahakari_May_2016', displayNameEn: 'May 2016', displayNameKn: 'ಮೇ ೨೦೧೬' },
    { year: '2016', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2016', displayNameEn: 'April 2016', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೬' },
    { year: '2016', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2016', displayNameEn: 'March 2016', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೬' },
    { year: '2016', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2016', displayNameEn: 'February 2016', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೬' },
    { year: '2016', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2016', displayNameEn: 'January 2016', displayNameKn: 'ಜನವರಿ ೨೦೧೬' },

    // 2015
    { year: '2015', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2015', displayNameEn: 'December 2015', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೫' },
    { year: '2015', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2015', displayNameEn: 'November 2015', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೫' },
    { year: '2015', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2015', displayNameEn: 'October 2015', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೫' },
    { year: '2015', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2015', displayNameEn: 'September 2015', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೫' },
    { year: '2015', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2015', displayNameEn: 'August 2015', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೫' },
    { year: '2015', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2015', displayNameEn: 'July 2015', displayNameKn: 'ಜುಲೈ ೨೦೧೫' },
    { year: '2015', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2015', displayNameEn: 'June 2015', displayNameKn: 'ಜೂನ್ ೨೦೧೫' },
    { year: '2015', month: 'May', baseName: 'Swabhimani_Sahakari_May_2015', displayNameEn: 'May 2015', displayNameKn: 'ಮೇ ೨೦೧೫' },
    { year: '2015', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2015', displayNameEn: 'April 2015', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೫' },
    { year: '2015', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2015', displayNameEn: 'March 2015', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೫' },
    { year: '2015', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2015', displayNameEn: 'February 2015', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೫' },
    { year: '2015', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2015', displayNameEn: 'January 2015', displayNameKn: 'ಜನವರಿ ೨೦೧೫' },

    // 2014
    { year: '2014', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2014', displayNameEn: 'December 2014', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೪' },
    { year: '2014', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2014', displayNameEn: 'November 2014', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೪' },
    { year: '2014', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2014', displayNameEn: 'October 2014', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೪' },
    { year: '2014', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2014', displayNameEn: 'September 2014', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೪' },
    { year: '2014', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2014', displayNameEn: 'August 2014', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೪' },
    { year: '2014', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2014', displayNameEn: 'July 2014', displayNameKn: 'ಜುಲೈ ೨೦೧೪' },
    { year: '2014', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2014', displayNameEn: 'June 2014', displayNameKn: 'ಜೂನ್ ೨೦೧೪' },
    { year: '2014', month: 'May', baseName: 'Swabhimani_Sahakari_May_2014', displayNameEn: 'May 2014', displayNameKn: 'ಮೇ ೨೦೧೪' },
    { year: '2014', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2014', displayNameEn: 'April 2014', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೪' },
    { year: '2014', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2014', displayNameEn: 'March 2014', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೪' },
    { year: '2014', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2014', displayNameEn: 'February 2014', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೪' },
    { year: '2014', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2014', displayNameEn: 'January 2014', displayNameKn: 'ಜನವರಿ ೨೦೧೪' },

    // 2013
    { year: '2013', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2013', displayNameEn: 'December 2013', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೩' },
    { year: '2013', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2013', displayNameEn: 'November 2013', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೩' },
    { year: '2013', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2013', displayNameEn: 'October 2013', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೩' },
    { year: '2013', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2013', displayNameEn: 'September 2013', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೩' },
    { year: '2013', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2013', displayNameEn: 'August 2013', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೩' },
    { year: '2013', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2013', displayNameEn: 'July 2013', displayNameKn: 'ಜುಲೈ ೨೦೧೩' },
    { year: '2013', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2013', displayNameEn: 'June 2013', displayNameKn: 'ಜೂನ್ ೨೦೧೩' },
    { year: '2013', month: 'May', baseName: 'Swabhimani_Sahakari_May_2013', displayNameEn: 'May 2013', displayNameKn: 'ಮೇ ೨೦೧೩' },
    { year: '2013', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2013', displayNameEn: 'April 2013', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೩' },
    { year: '2013', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2013', displayNameEn: 'March 2013', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೩' },
    { year: '2013', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2013', displayNameEn: 'February 2013', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೩' },
    { year: '2013', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2013', displayNameEn: 'January 2013', displayNameKn: 'ಜನವರಿ ೨೦೧೩' },

    // 2012
    { year: '2012', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2012', displayNameEn: 'December 2012', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೨' },
    { year: '2012', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2012', displayNameEn: 'November 2012', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೨' },
    { year: '2012', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2012', displayNameEn: 'October 2012', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೨' },
    { year: '2012', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2012', displayNameEn: 'September 2012', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೨' },
    { year: '2012', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2012', displayNameEn: 'August 2012', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೨' },
    { year: '2012', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2012', displayNameEn: 'July 2012', displayNameKn: 'ಜುಲೈ ೨೦೧೨' },
    { year: '2012', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2012', displayNameEn: 'June 2012', displayNameKn: 'ಜೂನ್ ೨೦೧೨' },
    { year: '2012', month: 'May', baseName: 'Swabhimani_Sahakari_May_2012', displayNameEn: 'May 2012', displayNameKn: 'ಮೇ ೨೦೧೨' },
    { year: '2012', month: 'Apr', baseName: 'Swabhimani_Sahakari_Apr_2012', displayNameEn: 'April 2012', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೨' },
    { year: '2012', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2012', displayNameEn: 'March 2012', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೨' },
    { year: '2012', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2012', displayNameEn: 'February 2012', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೨' },
    { year: '2012', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2012', displayNameEn: 'January 2012', displayNameKn: 'ಜನವರಿ ೨೦೧೨' },

    // 2011 (baseName matches files on disk; displayNameEn shows full month names)
    { year: '2011', month: 'Dec', baseName: 'Swabhimani_Sahakari_Dec_2011', displayNameEn: 'December 2011', displayNameKn: 'ಡಿಸೆಂಬರ್ ೨೦೧೧' },
    { year: '2011', month: 'Nov', baseName: 'Swabhimani_Sahakari_Nov_2011', displayNameEn: 'November 2011', displayNameKn: 'ನವೆಂಬರ್ ೨೦೧೧' },
    { year: '2011', month: 'Oct', baseName: 'Swabhimani_Sahakari_Oct_2011', displayNameEn: 'October 2011', displayNameKn: 'ಅಕ್ಟೋಬರ್ ೨೦೧೧' },
    { year: '2011', month: 'Sep', baseName: 'Swabhimani_Sahakari_Sep_2011', displayNameEn: 'September 2011', displayNameKn: 'ಸೆಪ್ಟೆಂಬರ್ ೨೦೧೧' },
    { year: '2011', month: 'Aug', baseName: 'Swabhimani_Sahakari_Aug_2011', displayNameEn: 'August 2011', displayNameKn: 'ಆಗಸ್ಟ್ ೨೦೧೧' },
    { year: '2011', month: 'Jul', baseName: 'Swabhimani_Sahakari_Jul_2011', displayNameEn: 'July 2011', displayNameKn: 'ಜುಲೈ ೨೦೧೧' },
    { year: '2011', month: 'Jun', baseName: 'Swabhimani_Sahakari_Jun_2011', displayNameEn: 'June 2011', displayNameKn: 'ಜೂನ್ ೨೦೧೧' },
    { year: '2011', month: 'May', baseName: 'Swabhimani_Sahakari_May_2011', displayNameEn: 'May 2011', displayNameKn: 'ಮೇ ೨೦೧೧' },
    { year: '2011', month: 'Apr', baseName: 'Swabhimani_Sahakari_April_2011', displayNameEn: 'April 2011', displayNameKn: 'ಏಪ್ರಿಲ್ ೨೦೧೧' },
    { year: '2011', month: 'Mar', baseName: 'Swabhimani_Sahakari_Mar_2011', displayNameEn: 'March 2011', displayNameKn: 'ಮಾರ್ಚ್ ೨೦೧೧' },
    { year: '2011', month: 'Feb', baseName: 'Swabhimani_Sahakari_Feb_2011', displayNameEn: 'February 2011', displayNameKn: 'ಫೆಬ್ರವರಿ ೨೦೧೧' },
    { year: '2011', month: 'Jan', baseName: 'Swabhimani_Sahakari_Jan_2011', displayNameEn: 'January 2011', displayNameKn: 'ಜನವರಿ ೨೦೧೧' },
  ],
};

// 3. Dynamic Asset Path Constructor (2011–2026)
const getAssetPath = (year: string, month: string, baseName: string) => {
  const yr = parseInt(year);
  if (yr >= 2026) {
    return `/images/Swabhimani_Sahakari/2026_30/2026/${month}/${baseName}`;
  } else if (yr >= 2021) {
    return `/images/Swabhimani_Sahakari/2021_25/${year}/${month}/${baseName}`;
  } else if (yr >= 2016) {
    return `/images/Swabhimani_Sahakari/2016_20/${year}/${month}/${baseName}`;
  }
  return `/images/Swabhimani_Sahakari/2011_15/${year}/${month}/${baseName}`;
};

// 4. Adaptive Image Loader with Fallback Extensions
const AdaptiveImage = ({ basePath, alt, className }: { basePath: string; alt: string; className?: string }) => {
  const extensions = ['.webp', '.jpg', '.JPG', '.png'];
  const [extIndex, setExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-xs font-bold p-2 text-center">
        No Preview
      </div>
    );
  }

  return (
    <img
      src={`${basePath}${extensions[extIndex]}`}
      alt={alt}
      className={className}
      onError={() => {
        if (extIndex + 1 < extensions.length) {
          setExtIndex((prev) => prev + 1);
        } else {
          setHasError(true);
        }
      }}
    />
  );
};

const ITEMS_PER_PAGE = 12;

export default function SwabhimaniSahakariPage() {
  const { locale } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const processedIssues = useMemo(() => {
    return magazineData.issues.map((issue) => {
      const basePath = getAssetPath(issue.year, issue.month, issue.baseName);
      return {
        ...issue,
        basePath,
        pdf: `${basePath}.pdf`,
      };
    });
  }, []);

  const latestIssue = processedIssues[0];

  const filteredIssues = useMemo(() => {
    return processedIssues.filter((item) => {
      const matchesYear = selectedYear === 'All' || item.year === selectedYear;
      const displayName = locale === 'kn' ? item.displayNameKn : item.displayNameEn;
      const matchesSearch =
        displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.year.includes(searchQuery);
      return matchesYear && matchesSearch;
    });
  }, [processedIssues, selectedYear, searchQuery, locale]);

  const totalPages = Math.max(1, Math.ceil(filteredIssues.length / ITEMS_PER_PAGE));
  const paginatedIssues = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredIssues.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredIssues, currentPage]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <EducationHero
        badgeText={locale === 'kn' ? 'ಸಹಕಾರ ಶಿಕ್ಷಣ ವಿಭಾಗ' : 'Co-operative Education Wing'}
        title={locale === 'kn' ? 'ಸ್ವಾಭಿಮಾನಿ ಸಹಕಾರಿ' : 'Swabhimani Sahakari'}
        subtitle={
          locale === 'kn'
            ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಅಧಿಕೃತ ಮಾಸಪತ್ರಿಕೆ (೨೦೧೧ - ೨೦೨೬).'
            : 'Official Monthly Journal of Karnataka State Souharda Federal Co-operative Ltd. (2011 - 2026).'
        }
        imageSrc="/souharda/AllAboutKSSFCL_Intro.webp"
      />

      {/* FEATURED SECTION */}
      <section className="relative w-full overflow-hidden bg-slate-900 border-b border-emerald-950/20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Swabhimani_Sahakari/sahakari.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Column Content */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5 text-left">
              <div>
                <span className="px-3.5 py-1 bg-[#FFBF00] text-slate-950 font-black text-[11px] uppercase tracking-wider rounded-md shadow-xs">
                  {locale === 'kn' ? 'ಇತ್ತೀಚಿನ ಆವೃತ್ತಿ' : 'LATEST EDITION'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                ಸ್ವಾಭಿಮಾನಿ <span className="text-[#FFBF00]">ಸಹಕಾರಿ</span>
              </h1>

              <div className="space-y-1.5">
                <p className="text-base sm:text-lg text-emerald-100 font-bold leading-snug drop-shadow-xs">
                  {locale === 'kn'
                    ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಚಳುವಳಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಮೀಸಲಾಗಿರುವ ಏಕೈಕ ಮಾಸಪತ್ರಿಕೆ.'
                    : 'The exclusive monthly magazine dedicated to the development of Souharda Co-operative movement.'}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={latestIssue?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs rounded-full shadow-lg transition-transform active:scale-95"
                >
                  {locale === 'kn' ? 'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಓದಿ' : 'Read Online'}
                </a>
              </div>
            </div>

            {/* Right Column Cover Preview */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
              <div className="w-48 h-64 sm:w-56 sm:h-72 bg-slate-200 rounded-lg shadow-2xl overflow-hidden border-2 border-white/30 relative transform hover:scale-105 transition-transform duration-300">
                {latestIssue ? (
                  <AdaptiveImage
                    basePath={latestIssue.basePath}
                    alt={`Swabhimani Sahakari ${latestIssue.displayNameEn}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-sm">
                    {locale === 'kn' ? 'ಇತ್ತೀಚಿನ ಸಂಚಿಕೆ' : 'Latest Issue'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE FILTER BAR */}
      <nav className="sticky top-0 z-20 bg-white border-y border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900 shrink-0">
            {locale === 'kn' ? 'ಸಂಗ್ರಹಾಲಯಗಳು' : 'Archives'}
          </h3>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Quick Recent Year Pills */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleYearChange('All')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedYear === 'All'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {locale === 'kn' ? 'ಎಲ್ಲಾ' : 'All'}
              </button>

              {['2026', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => handleYearChange(yr)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedYear === yr
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>

            {/* Dropdown for Older Years */}
            <div className="relative">
              <select
                value={['All', '2026', '2025', '2024'].includes(selectedYear) ? 'more' : selectedYear}
                onChange={(e) => {
                  if (e.target.value !== 'more') {
                    handleYearChange(e.target.value);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer outline-none ${
                  !['All', '2026', '2025', '2024'].includes(selectedYear)
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <option value="more" disabled>
                  {locale === 'kn' ? 'ಇನ್ನಷ್ಟು (2011-2023)...' : 'More Years (2011-2023)...'}
                </option>
                {AVAILABLE_YEARS.slice(3).map((yr) => (
                  <option key={yr} value={yr} className="bg-white text-slate-900">
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-xl border border-slate-200/60 text-xs font-semibold shrink-0">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="p-1 rounded-md text-slate-600 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-1 text-slate-700 font-extrabold select-none">
                  {currentPage} / {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="p-1 rounded-md text-slate-600 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={locale === 'kn' ? 'ಹುಡುಕಿ...' : 'Search archive...'}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>
      </nav>

      {/* ARCHIVE GRID SECTION */}
      <section className="bg-grid-pattern border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedIssues.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {paginatedIssues.map((issue) => (
                <div
                  key={issue.baseName}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden text-center group"
                >
                  <a
                    href={issue.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-3/4 bg-slate-100 relative overflow-hidden block"
                  >
                    <AdaptiveImage
                      basePath={issue.basePath}
                      alt={`Swabhimani Sahakari ${issue.displayNameEn}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  <div className="p-3 space-y-2 border-t border-slate-100 bg-white">
                    <h4 className="text-xs font-bold text-slate-800">
                      {locale === 'kn' ? issue.displayNameKn : issue.displayNameEn}
                    </h4>
                    <div className="flex items-center justify-center gap-4 pt-1 border-t border-slate-100 text-slate-500">
                      <a
                        href={issue.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={locale === 'kn' ? 'PDF ಓದಿ' : 'Read PDF'}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={issue.pdf}
                        download
                        title={locale === 'kn' ? 'PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download PDF'}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-500 text-sm">
              {locale === 'kn'
                ? 'ನಿಮ್ಮ ಶೋಧನೆಗೆ ಸೂಕ್ತವಾದ ನಿಯತಕಾಲಿಕ ಸಂಚಿಕೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
                : 'No publication issues found matching your query.'}
            </div>
          )}
        </div>
      </section>

      {/* Grid Pattern CSS */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-color: #f8fafc;
          background-image: 
            linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </main>
  );
}