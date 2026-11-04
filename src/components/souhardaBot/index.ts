import { findStaffMember, workforceIntents } from './workforce';
import { courtIntents } from './court';
import directorsIntents from './directors';
import { educationIntents } from './education';
import { galleryIntents } from './gallery';
import { greetingsIntents } from './greetings';
import { magazineIntents } from './magazine';
import { membersIntents } from './members';
import { regulatoryIntents } from './regulatory';
import { servicesIntents } from './services';
import { souhardaIntents } from './souharda';
import { IntentItem } from './types';

export { directorsIntents };
export type { IntentItem };

export function getSouhardaBotResponse(userQuery: string): string {
  if (!userQuery || !userQuery.trim()) return '';

  const q = userQuery.trim();

  // 1. Direct Staff Match (English, Kannada, & Phonetic)
  if (typeof findStaffMember === 'function') {
    const staffMatch = findStaffMember(q);
    if (staffMatch) {
      const nameDisplay = staffMatch.name_kn ? `${staffMatch.name_kn} (${staffMatch.name})` : staffMatch.name;
      const dept = staffMatch.department ? ` (${staffMatch.department})` : '';
      const mobileNum = staffMatch.cug_mobile || staffMatch.mobile;
      const mobile = mobileNum ? ` CUG Mobile: ${mobileNum} |` : '';
      const email = staffMatch.email ? ` Email: ${staffMatch.email}.` : '';

      return `${nameDisplay} holds the position of ${staffMatch.designation}${dept}.${mobile}${email} Visit /souharda/workforce/ for full details.`;
    }
  }

  // 2. Keyword/Intent Matching across all modules
  const allIntentGroups: any[][] = [
    greetingsIntents || [],
    workforceIntents || [],
    courtIntents || [],
    directorsIntents || [],
    educationIntents || [],
    galleryIntents || [],
    magazineIntents || [],
    membersIntents || [],
    regulatoryIntents || [],
    servicesIntents || [],
    souhardaIntents || [],
  ];

  const lowerQuery = q.toLowerCase();

  for (const group of allIntentGroups) {
    if (!Array.isArray(group)) continue;
    const match = group.find((item: any) =>
      item.keywords && Array.isArray(item.keywords)
        ? item.keywords.some((kw: string) => lowerQuery.includes(kw.toLowerCase()))
        : false
    );
    if (match && match.response) {
      return match.response;
    }
  }

  // 3. Fallback Response
  return "I couldn't find a direct match. You can ask about specific staff members, Board Directors, or Court services.";
}

export default getSouhardaBotResponse;