'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { Search, Phone, MessageCircle, Mail, ArrowLeft, Briefcase, Building, MapPin, X } from 'lucide-react';

interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
  region?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  bio?: string;
  bioKn?: string;
}

const ALL_DIRECTORS: Director[] = [
{
  "id": 1,
  "name": "Sri. G. Nanjangouda",
  "designation": "President",
  "image": "/souharda/Director/2022/1nanjangouda.jpg",
  "region": "Vijayanagar",
  "phone": "9448112345",
  "whatsapp": "9448112345",
  "email": "president@souharda.coop",
  "bio": "Sri Gurubasava S. Bolesetti (G. Nanjangouda) was born on 01-06-1972 and holds B.Sc. and LL.B. degrees. Representing Vijayanagar/Belagavi division, he has served as President of KSSFCL since 2022. He brings over 25 years of extensive leadership experience across the cooperative movement.",
  "bioKn": "ಶ್ರೀ ಜಿ. ನಂಜನಗೌಡರು ವೃತ್ತಿಯಲ್ಲಿ ಸನ್ನದು ಲೆಕ್ಕಪರಿಶೋಧಕರು (ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್), ಪ್ರವೃತ್ತಿಯಲ್ಲಿ ಸಹಕಾರಿಗಳು ಹಾಗೂ ಕೃಷಿಕರು. ಸಮಾಜದ ಹಿಂದುಳಿದ ವರ್ಗದ ಹಾಗೂ ದೀನದಲಿತರ ಬಗ್ಗೆ ಅಪಾರ ಕಾಳಜಿ ಇರುವ ಶ್ರೀಯುತರು ಸಹಕಾರ ಕ್ಷೇತ್ರ ಸಾಮಾನ್ಯ ಜನರನ್ನು ತಲುಪುವ ಏಕೈಕ ಮಾರ್ಗ, ಯಾವುದೇ ಬೇಧಭಾವ ಹಾಗೂ ತಾರತಮ್ಯವಿಲ್ಲದೇ ಸಮಾಜದ ಕನಿಷ್ಠ ವರ್ಗದ ಜನರಿಗೆ ಸೇವೆ ಮಾಡಲು ಅವಕಾಶವಿರುವ ಕ್ಷೇತ್ರ ಇದಾಗಿದೆ.<br><br>ದಾವಣಗೆರೆ ಜಿಲ್ಲೆಯ ಹರಪನಹಳ್ಳಿ ತಾಲ್ಲೂಕಿನ ತೀರನಹಳ್ಳಿಯಲ್ಲಿ ದಿನಾಂಕ 01-06-1960ರಲ್ಲಿ ಜನಿಸಿದ ಶ್ರೀ ಜಿ. ನಂಜನಗೌಡ ಅವರು ಶೀರನಹಳ್ಳಿಯಲ್ಲಿ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ, ನಾಗರತಟ್ಟೆಯಲ್ಲಿ ಪ್ರೌಢ ಶಿಕ್ಷಣ, ಸಿರಿಗೆರೆಯ ಕಾಲೇಜು ಶಿಕ್ಷಣ ಮುಗಿಸಿದರು.<br><br>ಶಿವಮೊಗ್ಗದ ಜಿ.ಕೆ. ಶೆಟ್ಟರ್ & ಸಿ.ಎ. ಇವರಲ್ಲಿ 1990ರಲ್ಲಿ ಸಿ.ಎ. ಆಗಿ ಪದವಿಯನ್ನು ಪೂರೈಸಿದ್ದಾರೆ. ಹರಪನಹಳ್ಳಿಯಲ್ಲಿಯೇ ತಮ್ಮ ವೃತ್ತಿಯನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಸನ್ನದು ಲೆಕ್ಕಪರಿಶೋಧಕರ ವೃತ್ತಿಯ ಜೊತೆಗೆ ಜನಸಾಮಾನ್ಯರಿಗೆ ಸಹಾಯವಾಗುವಂತಹ ಕಾರ್ಯಕ್ಷೇತ್ರವನ್ನು ಅರಸುತ್ತಾ ಸಹಕಾರ ಕ್ಷೇತ್ರದ ಬಗ್ಗೆ ಅಭಿಮಾನ ಮೂಡಿ ಸಹಕಾರ ತತ್ವಗಳ ಮೂಲಕ ಈ ಕಾರ್ಯ ಸಾಧ್ಯ ಎಂದು ಮನಗಂಡು 1997ರಲ್ಲಿ ಹರಪನಹಳ್ಳಿಯಲ್ಲಿ ಆದರ್ಶ ಪಟ್ಟಣ ಸಹಕಾರ ಬ್ಯಾಂಕ್ ಸ್ಥಾಪಿಸಿ ಸಂಸ್ಥಾಪಕ ಅಧ್ಯಕ್ಷರಾದರು.<br><br>ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ ಜಾರಿಗೆ ಬಂದ ನಂತರ ಹೊಸ ಕಾಯ್ದೆಗೆ ಬ್ಯಾಂಕ್‌ನ್ನು ಪರಿವರ್ತನೆಗೊಳಿಸಿದರು. ಉತ್ತಮವಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ.<br><br>ಸಹಕಾರ ಕ್ಷೇತ್ರದ ಹಾಗೂ ಬೇರೆ ಕ್ಷೇತ್ರದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಶ್ರೀಯುತರು ಹರಪನಹಳ್ಳಿ ರೋಟರಿ ಕ್ಲಬ್‌ನ ಅಧ್ಯಕ್ಷರಾಗಿ, ಬಿಜೆಪಿ ಯುವಮೋರ್ಚಾ ಅಧ್ಯಕ್ಷರಾಗಿ, ದಾವಣಗೆರೆಯಲ್ಲಿ ಬಿಜೆಪಿ ಪಕ್ಷದ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ, ರಾಜ್ಯ ಪರಿಷತ್ ಸದಸ್ಯರಾಗಿ ಹಾಗೂ ರಾಜ್ಯ ಬಿಜೆಪಿ ಕಾರ್ಯಕಾರಿಣಿ ಸದಸ್ಯರಾಗಿ ಮತ್ತು ಹರಪನಹಳ್ಳಿ ತಾಲ್ಲೂಕು ಬಿಜೆಪಿ ಅಧ್ಯಕ್ಷರಾಗಿ 3 ಅವಧಿಗೆ ಕಾರ್ಯ ನಿರ್ವಹಿಸಿದ್ದಾರೆ. ಸಹಕಾರ ಪ್ರಕೋಷ್ಠ ರಾಜ್ಯ ಸಹಸಂಚಾಲಕರಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ.<br><br>ಪ್ರಸ್ತುತ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಆಡಳಿತ ಮಂಡಲಿಯ ನಿರ್ದೇಶಕರಾಗಿ 3ನೇ ಬಾರಿಗೆ ಸತತವಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದಾರೆ."
},
  { 
    id: 2, 
    name: "Sri A R Prasannakumar", 
    designation: "Vice - President", 
    image: "/souharda/Director/2022/2prasanna.jpg", 
    region: "Shivamogga", 
    phone: "9448223456", 
    whatsapp: "9448223456", 
    email: "vp@souharda.coop",
    bio: "Sri A R Prasannakumar hails from Tirthahalli, born on 19-06-1963. After completing his Engineering education, he started his professional journey in 1985 as a technical consultant in Tirthahalli and Shivamogga. Alongside his technical expertise, he has been actively involved in agriculture and public service, contributing to the cooperative sector since 1994.",
    bioKn: "ಶ್ರೀ ಎ. ಆರ್. ಪ್ರಸನ್ನ ಕುಮಾರ್ ಅವರು ತೀರ್ಥಹಳ್ಳಿಯವರಾಗಿದ್ದು, ದಿನಾಂಕ 19-06-1963ರಂದು ಜನಿಸಿದರು. ಇಂಜಿನಿಯರಿಂಗ್ ಶಿಕ್ಷಣದ ನಂತರ, 1985ರಲ್ಲಿ ತೀರ್ಥಹಳ್ಳಿ ಮತ್ತು ಶಿವಮೊಗ್ಗದಲ್ಲಿ ತಾಂತ್ರಿಕ ಸಲಹೆಗಾರರಾಗಿ ತಮ್ಮ ವೃತ್ತಿಪರ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಕೃಷಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಯಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ತೊಡಗಿಸಿಕೊಂಡಿರುವ ಇವರು, 1994 ರಿಂದ ಸಹಕಾರ ಕ್ಷೇತ್ರಕ್ಕೆ ಕೊಡುಗೆ ನೀಡುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 3, 
    name: "Sri. B. H. Krishna Reddy", 
    designation: "Director", 
    image: "/souharda/Director/2022/3krishna_Reddy.jpg", 
    region: "Kolar",
    bio: "Sri B. H. Krishna Reddy was born on 10-04-1960 and holds a Commerce degree. Representing Kolar region, he has served as a Director of KSSFCL for multiple terms and held senior leadership positions in various cooperative credit societies across South Karnataka.",
    bioKn: "ಶ್ರೀ ಬಿ. ಎಚ್. ಕೃಷ್ಣರೆಡ್ಡಿ ಅವರು ದಿನಾಂಕ 10-04-1960ರಂದು ಜನಿಸಿದರು. ವಾಣಿಜ್ಯ ಪದವೀಧರರಾದ ಇವರು, ಕೋಲಾರ ಪ್ರದೇಶದಿಂದ ಹಲವು ಅವಧಿಗಳಿಗೆ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ನಿರ್ದೇಶಕರಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದು, ದಕ್ಷಿಣ ಕರ್ನಾಟಕದ ವಿವಿಧ ಪತ್ತಿನ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಹಿರಿಯ ನಾಯಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದ್ದಾರೆ."
  },
  { 
    id: 4, 
    name: "Sri. Gurunath Janthikar", 
    designation: "Director", 
    image: "/souharda/Director/2022/4Gurunath_Janthikar.jpg", 
    region: "Bidar",
    bio: "Sri Gurunath Janthikar represents Bidar region on the KSSFCL board. With over 20 years of experience in cooperative administration, he focuses on digital transformation and training programs for member cooperatives.",
    bioKn: "ಶ್ರೀ ಗುರುನಾಥ್ ಜಂತಿಕರ್ ಅವರು ಬೀದರ್ ಪ್ರದೇಶದಿಂದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ನಿರ್ದೇಶಕರಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತಿದ್ದಾರೆ. ಸಹಕಾರ ಆಡಳಿತದಲ್ಲಿ 20ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿರುವ ಇವರು, ಸಹಕಾರಿ ತರಬೇತಿ ಹಾಗೂ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದಾರೆ."
  },
  { 
    id: 5, 
    name: "Sri Jagadish Kavatagimat", 
    designation: "Director", 
    image: "/souharda/Director/2022/5SriJagadish_Kavatagimat.jpg", 
    region: "Belagavi",
    bio: "Sri Jagdish K. Kavatagimath was born on 14-01-1967 and holds a B.E. degree. Representing Belagavi division, he has served on multiple state-level cooperative committees and focuses on technology adoption in cooperative banking.",
    bioKn: "ಶ್ರೀ ಜಗದೀಶ್ ಕೆ. ಕವಟಗಿಮಠ ಅವರು ದಿನಾಂಕ 14-01-1967ರಂದು ಜನಿಸಿದರು. ಬಿ.ಇ. ಇಂಜಿನಿಯರಿಂಗ್ ಪದವೀಧರರಾದ ಇವರು ಬೆಳಗಾವಿ ವಿಭಾಗವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಿದ್ದು, ಸಹಕಾರಿ ಬ್ಯಾಂಕಿಂಗ್‌ನಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ ಅಳವಡಿಕೆಗೆ ಪ್ರಮುಖ ಕೊಡುಗೆ ನೀಡಿದ್ದಾರೆ."
  },
  { 
    id: 6, 
    name: "Sri Guranagowda Patil", 
    designation: "Director", 
    image: "/souharda/Director/2022/6Sri_Guranagowda_Patil.jpg", 
    region: "Belagavi",
    bio: "Sri Guranagowda Patil represents Bagalkot / Belagavi region on the board. He actively works towards credit access for small entrepreneurs and organizing state-level cooperative leadership summits.",
    bioKn: "ಶ್ರೀ ಗುರುನಗೌಡ ಪಾಟೀಲ ಅವರು ಬೆಳಗಾವಿ/ಬಾಗಲಕೋಟೆ ವಿಭಾಗದಿಂದ ನಿರ್ದೇಶಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳಿಗೆ ಸಾಲ ಸೌಲಭ್ಯ ದೊರಕಿಸಲು ಹಾಗೂ ಸಹಕಾರಿ ನಾಯಕತ್ವ ಸಮಾವೇಶಗಳನ್ನು ಸಂಘಟಿಸಲು ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 7, 
    name: "Sri Thimmayya Shetty", 
    designation: "Director", 
    image: "/souharda/Director/2022/7Si_Thimmayya_Shetty.jpg", 
    region: "Raichur",
    bio: "Sri Thimmayya Shetty represents Raichur / Mysuru region. He brings extensive experience in thrift society credit management and strengthening Souharda institutions in Kalyana Karnataka.",
    bioKn: "ಶ್ರೀ ತಿಮ್ಮಯ್ಯ ಶೆಟ್ಟಿ ಅವರು ರಾಯಚೂರು/ಮೈಸೂರು ವಿಭಾಗವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಿದ್ದು, ಪತ್ತಿನ ಸಹಕಾರಿ ಸಂಘಗಳ ಬಲವರ್ಧನೆಗಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 8, 
    name: "Sri Gundurao", 
    designation: "Director", 
    image: "/souharda/Director/2022/8Sri_Gundurao.jpg", 
    region: "Kalaburagi",
    bio: "Sri B. S. Gundurao represents Kalaburagi / Bengaluru division on the KSSFCL board, driving member awareness programs and capacity-building workshops for member cooperatives.",
    bioKn: "ಶ್ರೀ ಬಿ. ಎಸ್. ಗುಂಡೂರಾವ್ ಅವರು ಕಲಬುರಗಿ/ಬೆಂಗಳೂರು ವಿಭಾಗದಿಂದ ಆಯ್ಕೆಯಾಗಿದ್ದು, ಸದಸ್ಯ ಸಹಕಾರಿಗಳಿಗೆ ಜಾಗೃತಿ ಹಾಗೂ ತರಬೇತಿ ಶಿಬಿರಗಳನ್ನು ನಡೆಸುವಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದಾರೆ."
  },
  { 
    id: 9, 
    name: "Sri Manjunath", 
    designation: "Director", 
    image: "/souharda/Director/2022/9Sri_Manjunath.jpg", 
    region: "Udupi",
    bio: "Sri Manjunath represents Udupi / Bengaluru region and works closely with urban cooperative credit societies to maintain strict auditing standards and regulatory compliance.",
    bioKn: "ಶ್ರೀ ಮಂಜುನಾಥ್ ಅವರು ಉಡುಪಿ/ಬೆಂಗಳೂರು ಭಾಗದಿಂದ ನಿರ್ದೇಶಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದು, ಪತ್ತಿನ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸುಸೂತ್ರ ಆಡಳಿತ ತರಲು ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 10, 
    name: "Sri Sridhar", 
    designation: "Director", 
    image: "/souharda/Director/2022/10Sri_Sridhar.jpg", 
    region: "Koppal",
    bio: "Sri Sridhar represents Koppal / Mysuru region on the board, advocating for agricultural credit initiatives and cooperative education.",
    bioKn: "ಶ್ರೀ ಶ್ರೀಧರ್ ಅವರು ಕೊಪ್ಪಳ/ಮೈಸೂರು ವಿಭಾಗದಿಂದ ನಿರ್ದೇಶಕರಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದು, ಕೃಷಿ ಪತ್ತಿನ ಯೋಜನೆಗಳು ಮತ್ತು ಸಹಕಾರ ಶಿಕ್ಷಣ ಪ್ರಸಾರದಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದಾರೆ."
  },
  { 
    id: 11, 
    name: "Sri Nagaraj Deshapande", 
    designation: "Director", 
    image: "/souharda/Director/2022/11Sri_Nagaraj_Deshapande.jpg", 
    region: "Gadag",
    bio: "Sri Nagaraj R. Deshapande represents Gadag / Belagavi region and brings 20+ years of dedicated service to credit societies in North Karnataka.",
    bioKn: "ಶ್ರೀ ನಾಗರಾಜ್ ಆರ್. ದೇಶಪಾಂಡೆ ಅವರು ಗದಗ/ಬೆಳಗಾವಿ ವಿಭಾಗದ ನಿರ್ದೇಶಕರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದು, ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಹಕಾರಿ ರಂಗಕ್ಕೆ ಗಮನಾರ್ಹ ಕೊಡುಗೆ ನೀಡಿದ್ದಾರೆ."
  },
  { 
    id: 12, 
    name: "Sri K. Shivalingappa", 
    designation: "Director", 
    image: "/souharda/Director/2022/12Sri_K_Shivalingappa.jpg", 
    region: "Haveri",
    bio: "Sri K. Shivalingappa was born on 01.05.1952 and holds B.A. and LL.B. degrees. Serving as KSSFCL Board Director, he brings 19 years of service as Vice President of Karnataka State Credit Societies Association. He has served as President of Sri Channesha Pattina Souharda Sahakari, member of Karnataka State Bar Council for 5 years, BJP District President, and Davanagere District In-charge.",
    bioKn: "ಶ್ರೀ ಕೆ. ಶಿವಲಿಂಗಪ್ಪನವರು ದಿನಾಂಕ 01.05.1952ರಂದು ಜನಿಸಿದರು. ಬಿ.ಎ. ಹಾಗೂ ಎಲ್.ಎಲ್.ಬಿ. ಪದವೀಧರರಾದ ಇವರು, ಪ್ರಥಮ ಬಾರಿಗೆ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ನಿರ್ದೇಶಕರಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದಾರೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿ ಅಸೋಸಿಯೇಷನ್ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ 19 ವರ್ಷ ಸೇವೆ ಸಲ್ಲಿಸಿರುವ ಇವರು, 'ಶ್ರೀ ಚನ್ನೇಶ ಪತ್ತಿನ ಸೌಹಾರ್ದ ಸಹಕಾರಿ'ಯ ಅಧ್ಯಕ್ಷರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 13, 
    name: "Smt. Bharathi G. Bhat", 
    designation: "Director", 
    image: "/souharda/Director/2022/13Smt_Bharathi_G_Bhat.jpg", 
    region: "Dakshina Kannada",
    bio: "Smt. Bharathi G. Bhat brings over 25 years of experience in the cooperative sector. She has served as Sahakar Bharati's National Secretary, State/District Women's Chief, and is currently a National Organizing Committee member and Convener for the National Consumer Cell. She served 10 years as Director and Vice President of Dakshina Kannada District Consumer Co-op Society (Janata Bazaar). Currently, she is President of Mahila Abhyudaya Souharda Sahakari and President of DK Udupi Mahila Sahakari Bank.",
    bioKn: "ಶ್ರೀಮತಿ ಭಾರತಿ ಜಿ. ಭಟ್ ಸಹಕಾರಿ ಕ್ಷೇತ್ರದಲ್ಲಿ 25 ವರ್ಷಗಳ ಸುದೀರ್ಘ ಅನುಭವ ಹೊಂದಿದ್ದಾರೆ. ಸಹಕಾರ ಭಾರತಿಯ ರಾಷ್ಟ್ರೀಯ ಕಾರ್ಯದರ್ಶಿಯಾಗಿ, ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲಾ ಮಹಿಳಾ ಪ್ರಮುಖರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿರುವ ಇವರು, ಜಿಪಂ ಜನತಾ ಬಜಾರ್‌ ಹಾಗೂ ದಕ್ಷಿಣ ಕನ್ನಡ-ಉಡುಪಿ ಮಹಿಳಾ ಸಹಕಾರಿ ಬ್ಯಾಂಕಿನ ಅಧ್ಯಕ್ಷರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 14, 
    name: "Smt. Shailaja Tapali", 
    designation: "Director", 
    image: "/souharda/Director/2022/14Smt_Shailaja_Tapali.jpg", 
    region: "Kalaburagi",
    bio: "Smt. Shailaja V. Tapali was born on 16-07-1965 in Shikaripura Taluk, Shivamogga district, to Smt. Sushila and late Sri Devendrappa. In 2008, she established 'Gulbarga Mahila Souharda Sahakari Ltd.' with 400 women members and ₹4 Lakh share capital to empower poor and middle-class women. Her cooperative engages hundreds of women in stitching cooperative shawls and flags, earning her the 'Uttama Mahila Sahakari' award.",
    bioKn: "ಶ್ರೀಮತಿ ಶೈಲಜಾ ವಿ. ತಪಲಿ ಅವರು ದಿನಾಂಕ 16-07-1965ರಂದು ಜನಿಸಿದರು. 2008ರಲ್ಲಿ 400 ಮಹಿಳಾ ಸದಸ್ಯರು ಹಾಗೂ ₹4 ಲಕ್ಷ ಷೇರು ಮೊತ್ತದೊಂದಿಗೆ 'ಗುಲಬರ್ಗಾ ಮಹಿಳಾ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿ.' ಸ್ಥಾಪಿಸಿದರು. ನೂರಾರು ಮಹಿಳೆಯರಿಗೆ ಸ್ವಾವಲಂಬನೆ ಕಲ್ಪಿಸಿರುವ ಇವರಿಗೆ 'ಉತ್ತಮ ಮಹಿಳಾ ಸಹಕಾರಿ' ಪ್ರಶಸ್ತಿ ಲಭಿಸಿದೆ."
  },
  { 
    id: 15, 
    name: "Sri Mallikarjuna Ajjappa Horakere", 
    designation: "Director", 
    image: "/souharda/Director/2022/15Sri_Mallikarjuna_Ajjappa_Horakere.jpg", 
    region: "Dharwad",
    bio: "Sri Mallikarjuna Ajjappa Horakeri was born on 22.07.1969 and holds an M.A. degree. Serving his first term as KSSFCL Board Director, he served as President of Dharwad DCC Bank and Agriculture Credit Cooperative Society, and Director of Mallikarjuna Souharda Sahakari. Under his leadership at DCC Bank, top educational programs and women SHGs were developed, earning him recognition from NAFED Institute, Mumbai.",
    bioKn: "ಶ್ರೀ ಮಲ್ಲಿಕಾರ್ಜುನ ಅಜ್ಜಪ್ಪ ಹೊರಕೇರಿ ಅವರು ದಿನಾಂಕ 22.07.1969ರಂದು ಜನಿಸಿದರು. ಎಂ.ಎ. ಪದವೀಧರರಾದ ಇವರು, ಧಾರವಾಡ ಜಿಲ್ಲಾ ಸಹಕಾರ ಕೇಂದ್ರ ಬ್ಯಾಂಕ್ (DCC Bank) ಅಧ್ಯಕ್ಷರಾಗಿ, ಕೃಷಿ ಪತ್ತಿನ ಸಹಕಾರಿ ಸಂಘದ ಅಧ್ಯಕ್ಷರಾಗಿ ಹಾಗೂ ಮಹಾನಗರ ಪಾಲಿಕೆ ಮಾಜಿ ಸದಸ್ಯರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದ್ದಾರೆ."
  },
  { 
    id: 16, 
    name: "Sri M. R. Prabhudev", 
    designation: "Director", 
    image: "/souharda/Director/2022/16Sri_Prabhudev.jpg", 
    region: "Davangere",
    bio: "Sri M. R. Prabhudev was born on 06.05.1969 to Sri Maganuru Rajashekar and Smt. Sulochana M. R. Holding a B.E. in Industrial Production, he has served as Vice-President of G.M. Souharda Sahakari Davanagere since 2009. He serves as Director of G.M. Sugar and Energy Ltd., Director of G.E.M. Foodpark, and advisory committee member of G.M. Halamma P.U. College.",
    bioKn: "ಶ್ರೀ ಎಂ. ಆರ್. ಪ್ರಭುದೇವ್ ಅವರು ದಿನಾಂಕ 06.05.1969ರಂದು ಜನಿಸಿದರು. ಬಿ.ಇ. (ಇಂಡಸ್ಟ್ರಿಯಲ್ ಪ್ರೊಡಕ್ಷನ್) ಪದವೀಧರರಾದ ಇವರು, 2009 ರಿಂದ 'ಜಿ.ಎಂ. ಸೌಹಾರ್ದ ಸಹಕಾರಿ ದಾವಣಗೆರೆ'ಯ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 17, 
    name: "Sri H. J. Hanumanthaiah", 
    designation: "Director", 
    image: "/souharda/Director/2022/17ri_H_J_Hanumanthaiah.jpg", 
    region: "Ballari",
    bio: "Sri H. J. Hanumanthashetty completed PUC and D.Pharm from V.K.J. College. He served as Joint Secretary of Arya Vysya Mandali (1998) and later as President (2008 & 2016-19), Secretary of Jnana Bharathi Educational Institution (2005), Director of Karnataka Arya Vysya Mahasabha (2009), and Chairman for State Level Pratibha Puraskar (2011-2021). In 2019, he was appointed Director of Karnataka Arya Vysya Community Development Corporation.",
    bioKn: "ಶ್ರೀ ಹೆಚ್. ಜೆ. ಹನುಮಂತಶೆಟ್ಟಿಯವರು Hatcholli ಯಲ್ಲಿ ಶಾಲಾ ಶಿಕ್ಷಣ ಪೂರೈಸಿ, D.Pharm ಮುಗಿಸಿ, 1998ರಲ್ಲಿ ಆರ್ಯ ವೈಶ್ಯ ಮಂಡಳಿಯ ಸಹಕಾರ್ಯದರ್ಶಿಯಾಗಿ, 2008 ಹಾಗೂ 2016-19ರವರೆಗೆ ಅಧ್ಯಕ್ಷರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದರು."
  },
  { 
    id: 18, 
    name: "Sri Raghurama Reddy", 
    designation: "Director", 
    image: "/souharda/Director/2022/18Sri_Raghurama_Reddy.jpg", 
    region: "Chitradurga",
    bio: "Sri Raghurama Reddy was born on 18.02.1972 to Sri S. R. Lakshmikantha Reddy. Representing Chitradurga district, he serves as Director of Merchants Souharda Sahakari and Director of Chitradurga District Central Cooperative (DCC) Bank.",
    bioKn: "ಶ್ರೀ ರಘುರಾಮ ರೆಡ್ಡಿ ಅವರು ದಿನಾಂಕ 18.02.1972ರಂದು ಜನಿಸಿದರು. ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆಯ ಪ್ರತಿನಿಧಿಯಾಗಿ 'ಮರ್ಚೆಂಟ್ಸ್ ಸೌಹಾರ್ದ ಸಹಕಾರಿ'ಯ ನಿರ್ದೇಶಕರಾಗಿ ಹಾಗೂ ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲಾ ಕೇಂದ್ರ ಸಹಕಾರ ಬ್ಯಾಂಕಿನ (DCC Bank) ನಿರ್ದೇಶಕರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 19, 
    name: "Sri C. P. Vijay", 
    designation: "Director", 
    image: "/souharda/Director/2022/19Sri_C_P_Vijay.jpg", 
    region: "Tumakuru",
    bio: "Sri C. P. Vijay was born on 29.08.1974 in Kyatsandra near Siddaganga Hills. Holding a Diploma in Pharmacy from Sri Siddaganga Pharmacy College, he founded 'Sunrise Souharda Pattina Sahakari Sangha Ltd.' in 2009. Starting with a capital of ₹3 Lakh, Sunrise Souharda expanded over 13 years into a highly successful enterprise generating ₹24 Lakh profit.",
    bioKn: "ಶ್ರೀ ಸಿ. ಪಿ. ವಿಜಯ್ ಅವರು ಸಿದ್ಧಗಂಗಾ ಬೆಟ್ಟದ ತಪ್ಪಲಿನ ಕ್ಯಾತಸಂದ್ರದಲ್ಲಿ ದಿನಾಂಕ 29.08.1974ರಂದು ಜನಿಸಿದರು. 2009ರಲ್ಲಿ ₹3 ಲಕ್ಷ ಬಂಡವಾಳದೊಂದಿಗೆ 'ಸನ್‌ರೈಸ್ ಸೌಹಾರ್ದ ಪತ್ತಿನ ಸಹಕಾರಿ ಸಂಘ ನಿ.' ಸ್ಥಾಪಿಸಿ, 13 ವರ್ಷಗಳ ಯಶಸ್ವಿ ಪಯಣದೊಂದಿಗೆ ₹24 ಲಕ್ಷ ಲಾಭ ಗಳಿಸುವ ಹಂತಕ್ಕೆ ಬೆಳೆಸಿದ್ದಾರೆ."
  },
  { 
    id: 20, 
    name: "Sri Mohandas J. Naik", 
    designation: "Director", 
    image: "/souharda/Director/2022/20Sri_Mohandas_J_Naik.jpg", 
    region: "Uttara Kannada",
    bio: "Sri Mohandas J. Nayak was born on 01.03.1975 in Ankola. Holding a Diploma in Electrical and Electronics along with a B.A. degree, he is serving his 2nd consecutive term as Vice-President of Kanara District Central Cooperative (KDCC) Bank Ltd., Sirsi (since 20.11.2020).",
    bioKn: "ಶ್ರೀ ಮೋಹನದಾಸ ಜೆ. ನಾಯಕ ಅವರು ದಿನಾಂಕ 01.03.1975ರಂದು ಅಂಕೋಲಾದಲ್ಲಿ ಜನಿಸಿದರು. ಕೆ.ಡಿ.ಸಿ.ಸಿ. ಬ್ಯಾಂಕ್ ಲಿ., ಶಿರಸಿ ಇದರ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ (20.11.2020 ರಿಂದ) ಸತತವಾಗಿ 2ನೇ ಬಾರಿಗೆ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 21, 
    name: "Sri Sanjay B. Patil", 
    designation: "Director", 
    image: "/souharda/Director/2022/21Sri_Sanjay_B_Patil.jpg", 
    region: "Vijayapura",
    bio: "Sri Sanjay B. Patil was born in 1972 and holds an Engineering degree. He serves as President of Varasiddhi Vinayaka Souharda Sahakari in Vijayapura and President of Vijayapura District Souharda Cooperatives Union. Having held leadership roles across primary to state-level cooperative institutions, he was co-opted as a Board Director of KSSFCL during the Board meeting on 24.02.2026.",
    bioKn: "ಶ್ರೀ ಸಂಜಯ್ ಬಿ. ಪಾಟೀಲ ಅವರು 1972ರಲ್ಲಿ ಜನಿಸಿದರು. ಇಂಜಿನಿಯರಿಂಗ್ ಪದವೀಧರರಾದ ಇವರು, ವಿಜಯಪುರದ 'ವರಸಿದ್ಧಿ ವಿನಾಯಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ'ಯ ಅಧ್ಯಕ್ಷರಾಗಿ ಹಾಗೂ ವಿಜಯಪುರ ಜಿಲ್ಲಾ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಒಕ್ಕೂಟದ ಅಧ್ಯಕ್ಷರಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 22, 
    name: "Sri Sanjeev Mahajan", 
    designation: "Director", 
    image: "/souharda/Director/2022/22Sri_Sanjeev_Mahajan.jpg", 
    region: "Kalaburagi",
    bio: "Sri Sanjeev Mahajan is a dedicated cooperative leader serving as a Board Director of Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL). He actively contributes to the strengthening and expansion of the Souharda cooperative movement across the state.",
    bioKn: "ಶ್ರೀ ಸಂಜೀವ್ ಮಹಾಜನ್ ಅವರು ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಆಡಳಿತ ಮಂಡಳಿಯ ನಿರ್ದೇಶಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 23, 
    name: "Sri Mahadevaswamy", 
    designation: "Director", 
    image: "/souharda/Director/2022/23Sri_Mahadevaswamy.jpg", 
    region: "Mysuru",
    bio: "Sri Mahadev Swamy is a dedicated cooperative leader serving as a Board Director of Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL). Representing the Mysuru region, he actively works towards empowering member cooperatives and strengthening the Souharda movement.",
    bioKn: "ಶ್ರೀ ಮಹದೇವ್ ಸ್ವಾಮಿ ಅವರು ಮೈಸೂರು ವಿಭಾಗವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಾ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಆಡಳಿತ ಮಂಡಳಿಯ ನಿರ್ದೇಶಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ."
  },
  { 
    id: 24, 
    name: "Sri Sharangowda G. Patil", 
    designation: "Managing Director", 
    image: "/souharda/Director/2022/24Sri_sharan_patil.jpg", 
    region: "Kalaburagi",
    bio: "Sri Sharangowda G. Patil serves as the Managing Director of Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL). He oversees statewide cooperative administration, digital infrastructure, and institutional training programs across Karnataka.",
    bioKn: "ಶ್ರೀ ಶರಣಗೌಡ ಜಿ. ಪಾಟೀಲ ಅವರು ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರಾಗಿ (Managing Director) ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ."
  }
];

export default function DirectorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const filteredDirectors = useMemo(() => {
    return ALL_DIRECTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.region && d.region.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const handleSelectDirector = (director: Director) => {
    setSelectedDirector(director);
  };

  const handleCloseDetail = () => {
    setSelectedDirector(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 pb-16">
      
      {/* FULL-SCREEN MODAL LAYER WHEN DIRECTOR IS CLICKED */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Dark Grey Overlay Backdrop */}
          <div 
            onClick={handleCloseDetail}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          />

          {/* Clean Light Card Modal */}
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 my-auto">
            
            {/* Top Close Bar */}
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
              <button
                onClick={handleCloseDetail}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-700 transition"
              >
                <ArrowLeft size={15} /> ← Back to Directors
              </button>
              <button 
                onClick={handleCloseDetail}
                className="text-slate-400 hover:text-slate-700 transition p-1.5 rounded-full hover:bg-slate-200"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dark Blue Header Banner */}
            <div className="bg-[#102A45] text-white pt-8 pb-6 px-6 text-center flex flex-col items-center">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                {selectedDirector.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 mb-6">
                {selectedDirector.designation} {selectedDirector.region ? `| ${selectedDirector.region}` : ''}
              </p>

              {/* Profile Image */}
              <div className="relative w-36 h-40 sm:w-44 sm:h-48 rounded-2xl border-4 border-white bg-slate-200 shadow-xl overflow-hidden shrink-0">
                <Image
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Modal Body */}
            <div className="pt-8 pb-10 px-6 sm:px-12 max-w-3xl mx-auto space-y-6">
              
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
                {selectedDirector.region && (
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                    <MapPin size={14} className="text-amber-600" />
                    <span>{selectedDirector.region} Region</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                  <Briefcase size={14} className="text-amber-600" />
                  <span>Board Member (KSSFCL)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                  <Building size={14} className="text-amber-600" />
                  <span>Karnataka State Souharda Federal Cooperative Ltd.</span>
                </div>
              </div>

              {/* Dynamic Professional Journey Section */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
                <h3 className="font-extrabold text-slate-900 text-base">Professional Journey:</h3>
                
                {selectedDirector.bioKn && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-800 text-sm leading-relaxed">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">ಕನ್ನಡ ವಿವರ</h4>
                    {selectedDirector.bioKn}
                  </div>
                )}

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-700 text-sm leading-relaxed">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">English Biography</h4>
                  {selectedDirector.bio || 
                    `${selectedDirector.name} serves as ${
                      selectedDirector.designation === 'President' || selectedDirector.designation === 'Vice - President' 
                        ? 'the' 
                        : 'a'
                    } ${selectedDirector.designation} representing the ${
                      selectedDirector.region || 'Karnataka'
                    } region at Karnataka State Souharda Federal Cooperative Ltd. With dedicated leadership in cooperative governance, ${
                      selectedDirector.name.replace(/^(Sri\.|Sri|Smt\.)\s*/, '').split(' ')[0]
                    } plays a vital role in strengthening local cooperative institutions and driving socio-economic growth.`
                  }
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-100">
                {selectedDirector.phone && (
                  <a
                    href={`tel:${selectedDirector.phone}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition shadow-sm"
                  >
                    <Phone size={14} /> Call Director
                  </a>
                )}
                {selectedDirector.whatsapp && (
                  <a
                    href={`https://wa.me/${selectedDirector.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition shadow-sm"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                )}
                {selectedDirector.email && (
                  <a
                    href={`mailto:${selectedDirector.email}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-900 transition shadow-sm"
                  >
                    <Mail size={14} /> Send Email
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* BASE PAGE CONTENT */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40h40M40 0v40' fill='none' stroke='%23e2e8f0' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10">
        <PageHero 
          themeColor="blue"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Souharda', href: '/souharda' },
            { label: 'Board of Directors' },
          ]}
          title="BOARD OF DIRECTORS" 
          subtitle="Meet the elected leadership body of Karnataka State Souharda Federal Cooperative Ltd." 
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
          
          {/* Search Input Bar */}
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3 max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 ml-2" />
            <input
              type="text"
              placeholder="Search director by name, title, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-1 bg-transparent text-sm text-slate-800 focus:outline-none"
            />
          </div>

          {/* Directors Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {filteredDirectors.map((director) => {
              return (
                <div
                  key={director.id}
                  onClick={() => handleSelectDirector(director)}
                  className="group cursor-pointer w-full max-w-[280px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden flex flex-col font-sans transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-sky-300"
                >
                  <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      unoptimized
                      className="object-cover object-top transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-115"
                      sizes="280px"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#112A46] via-[#112A46]/80 to-transparent pt-8 pb-2 px-3 flex items-end justify-between transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-2 group-hover:translate-y-0 z-10">
                      {director.region && (
                        <span className="text-[#C5A028] font-extrabold text-[12px] uppercase tracking-wider">
                          {director.region}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="h-[3px] bg-amber-400 w-full shrink-0 z-10" />

                  <div className="p-4 text-center flex-1 flex flex-col justify-between bg-white relative z-10">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm leading-tight transition-colors duration-300 group-hover:text-sky-700">
                        {director.name}
                      </h3>
                      <p className="text-sky-600 text-xs font-semibold mt-1">
                        {director.designation}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-sky-600 uppercase tracking-wide">
                      View Full Profile
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
}