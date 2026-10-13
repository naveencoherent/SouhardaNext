import { NextRequest, NextResponse } from 'next/server';
import { DIRECTORS_DATA, COURT_LEGAL_DATA, SERVICES_SUMMARY } from '@/data/souhardaKnowledge';

// Helper to safely extract values from JSON objects
const getVal = (emp: any, keys: string[]): string => {
  if (!emp) return '';
  for (const key of keys) {
    if (emp[key] !== undefined && emp[key] !== null) {
      const val = String(emp[key]).replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
      if (val !== '') return val;
    }
  }
  return '';
};

export async function POST(req: NextRequest) {
  try {
    const { message, locale } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const rawMsg = message.toLowerCase().trim();
    let reply = '';

    // 1. SMALL TALK, IDENTITY & GREETINGS
    if (rawMsg.includes('how are you') || rawMsg.includes('ಹೇಗಿದ್ದೀರ')) {
      reply = locale === 'kn'
        ? 'ನಾನು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು! 😊 ಸೌಹಾರ್ದ ಸಂಸ್ಥೆಯ ಆಡಳಿತ ಮಂಡಳಿ, ಸಿಬ್ಬಂದಿ ವಿವರಗಳು, ಅಥವಾ ಸೇವೆಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?'
        : "I'm doing great, thank you for asking! 😊 How can I assist you with KSSFCL staff, directors, or services today?";
      return NextResponse.json({ reply });
    }

    if (rawMsg.includes('your name') || rawMsg.includes('who are you') || rawMsg.includes('ನಿಮ್ಮ ಹೆಸರು') || rawMsg.includes('ನೀವು ಯಾರು')) {
      reply = locale === 'kn'
        ? 'ನನ್ನ ಹೆಸರು ಸಹಜ ಸಹಕಾರಿ! 🤖 ನಾನು ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಡಿಜಿಟಲ್ ಸಹಾಯಕ್.'
        : "I am Sahaja Sahakari! 🤖 Your AI assistant for Karnataka State Souharda Federal Cooperative Ltd.";
      return NextResponse.json({ reply });
    }

    if (rawMsg.match(/^(hi|hello|hey|namaste|hi there|hello bot)$/)) {
      reply = locale === 'kn'
        ? '🙏 ನಮಸ್ಕಾರ! ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಹಾಯಕ್‌ಗೆ ಸ್ವಾಗತ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?'
        : "🙏 Namaste! Welcome to Souharda Assistant. How can I help you today?";
      return NextResponse.json({ reply });
    }

    // 2. SPECIFIC ROLES (PRESIDENT / MANAGING DIRECTOR)
    if (
      (rawMsg.includes('president') || rawMsg.includes('ಅಧ್ಯಕ್ಷ')) &&
      !rawMsg.includes('phone') && !rawMsg.includes('mobile') && !rawMsg.includes('contact') && !rawMsg.includes('number')
    ) {
      const president = DIRECTORS_DATA.find(d => (d.designationEn || '').toLowerCase() === 'president');
      const vp = DIRECTORS_DATA.find(d => (d.designationEn || '').toLowerCase().includes('vice'));
      
      reply = locale === 'kn'
        ? `ನಮ್ಮ ಸಂಸ್ಥೆಯ ಅಧ್ಯಕ್ಷರು ${president?.nameKn || president?.nameEn} (${president?.regionKn || president?.regionEn}) ಹಾಗೂ ಉಪಾಧ್ಯಕ್ಷರು ${vp?.nameKn || vp?.nameEn} (${vp?.regionKn || vp?.regionEn}).`
        : `Our President is ${president?.nameEn || president?.nameKn} (${president?.regionEn || president?.regionKn}) and Vice President is ${vp?.nameEn || vp?.nameKn} (${vp?.regionEn || vp?.regionKn}).`;
      return NextResponse.json({ reply });
    }

    if (rawMsg.includes('md') || rawMsg.includes('m d') || rawMsg.includes('managing director') || rawMsg.includes('ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕ')) {
      const md = DIRECTORS_DATA.find(d => (d.designationEn || '').toLowerCase().includes('managing director'));
      reply = locale === 'kn'
        ? `ನಮ್ಮ ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು ${md?.nameKn || md?.nameEn}. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ /souharda/directors/ ನೋಡಿ.`
        : `Our Managing Director is ${md?.nameEn || md?.nameKn}. View the full board directory at /souharda/directors/.`;
      return NextResponse.json({ reply });
    }

    // Prepare query words (normalizes dots like "g.nanjanagouda" -> "g nanjanagouda")
    const cleanMsg = rawMsg.replace(/\./g, ' ').replace(/[^a-z0-9\s\u0C80-\u0CFF]/gi, '');
    const queryWords = cleanMsg.split(/\s+/).filter(w => w.length >= 2);

    // 3. BOARD OF DIRECTORS LOOKUP
    if (queryWords.length > 0) {
      const matchedDirector = DIRECTORS_DATA.find(d => {
        const en = (d.nameEn || d.name || '').toLowerCase().replace(/\./g, ' ');
        const kn = (d.nameKn || d.bioKn || '').toLowerCase().replace(/\./g, ' ');
        // Ignores common search filler words
        const searchWords = queryWords.filter(w => !['phone', 'number', 'mobile', 'contact', 'details', 'give', 'call'].includes(w));
        return searchWords.some(word => en.includes(word) || kn.includes(word));
      });

      if (matchedDirector) {
        const phone = (matchedDirector as any).phone || (matchedDirector as any).mobile;
        const email = (matchedDirector as any).email;
        const contactInfo = phone ? `Phone: ${phone}` : 'Phone: Contact KSSFCL Office';

        reply = locale === 'kn'
          ? `${matchedDirector.nameKn || matchedDirector.nameEn} - ${matchedDirector.designationKn || matchedDirector.designationEn} (${matchedDirector.regionKn || matchedDirector.regionEn || 'KSSFCL'}). ಸಂಪರ್ಕ ಸಂಖ್ಯೆ: ${phone || 'ಕಛೇರಿ ಸಂಪರ್ಕಿಸಿ'}. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ /souharda/directors/ ನೋಡಿ.`
          : `${matchedDirector.nameEn || matchedDirector.nameKn} holds the position of ${matchedDirector.designationEn || matchedDirector.designationKn} (${matchedDirector.regionEn || matchedDirector.regionKn || 'KSSFCL'}). ${contactInfo}. Visit /souharda/directors/ for full details.`;

        return NextResponse.json({ reply });
      }
    }

    // 4. DYNAMIC WORKFORCE SEARCH
    if (queryWords.length > 0) {
      try {
        const host = req.headers.get('host') || 'localhost:3000';
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const workforceRes = await fetch(`${protocol}://${host}/souharda/workforce.json`, { cache: 'no-store' });

        if (workforceRes.ok) {
          const workforceData = await workforceRes.json();
          const list = Array.isArray(workforceData) 
            ? workforceData 
            : Object.values(workforceData).find(val => Array.isArray(val)) as any[] || [];

          const matchedStaff = list.find((emp: any) => {
            const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']).toLowerCase().replace(/\./g, ' ');
            const designation = getVal(emp, ['ಹುದ್ದೆ', 'designation']).toLowerCase();
            const department = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']).toLowerCase();

            const searchWords = queryWords.filter(w => !['phone', 'number', 'mobile', 'contact', 'details', 'give', 'call'].includes(w));
            return searchWords.some(word => name.includes(word) || designation.includes(word) || department.includes(word));
          });

          if (matchedStaff) {
            const name = getVal(matchedStaff, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
            const designation = getVal(matchedStaff, ['ಹುದ್ದೆ', 'designation']);
            const department = getVal(matchedStaff, ['ವಿಭಾಗ', 'department', 'section']);
            const cug = getVal(matchedStaff, ['ಸಿಯುಜಿ ಮೊಬೈಲ್', 'ಮೊಬೈಲ್', 'cug', 'mobile', 'phone']);
            const email = getVal(matchedStaff, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'ಕಛೇರಿ ಇ ಮೇಲ್', 'ಇ-ಮೇಲ್', 'email']);

            reply = locale === 'kn'
              ? `${name} ಅವರ ವಿವರಗಳು: ${designation} (${department}). ಮೊಬೈಲ್: ${cug || '-'}, ಇಮೇಲ್: ${email || '-'}. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ /souharda/workforce/ ನೋಡಿ.`
              : `${name} holds the position of ${designation} (${department}). CUG Mobile: ${cug || '-'} | Email: ${email || '-'}. Visit /souharda/workforce/ for full details.`;

            return NextResponse.json({ reply });
          }
        }
      } catch (err) {
        console.error('Error querying workforce.json:', err);
      }
    }

    // 5. FALLBACK
    reply = locale === 'kn'
      ? `ಕ್ಷಮಿಸಿ, ಆ ಮಾಹಿತಿಗೆ ನಿರ್ದಿಷ್ಟ ಫಲಿತಾಂಶ ಸಿಗಲಿಲ್ಲ. ನೀವು ಸಿಬ್ಬಂದಿ ಹೆಸರು, ನಿರ್ದೇಶಕರು, ಅಥವಾ ಸೇವೆಗಳ ಕುರಿತು ಕೇಳಬಹುದು.`
      : `I couldn't find a direct match. You can ask about specific staff members, Board Directors, or Court services.`;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat query' }, { status: 500 });
  }
}