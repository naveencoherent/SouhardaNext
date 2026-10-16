import { findStaffMember, workforceIntents } from './workforce';
import { courtIntents } from './court';
import { directorsIntents } from './directors';
import { educationIntents } from './education';
import { galleryIntents } from './gallery';
import { greetingsIntents } from './greetings';
import { magazineIntents } from './magazine';
import { membersIntents } from './members';
import { regulatoryIntents } from './regulatory';
import { servicesIntents } from './services';
import { souhardaIntents } from './souharda';

export function getSouhardaBotResponse(userQuery: string): string {
  if (!userQuery || !userQuery.trim()) return '';

  const q = userQuery.trim();

  // 1. Direct Staff Match (English, Kannada, & Phonetic)
  const staffMatch = findStaffMember(q);
  if (staffMatch) {
    const nameDisplay = staffMatch.name_kn ? `${staffMatch.name_kn} (${staffMatch.name})` : staffMatch.name;
    const dept = staffMatch.department ? ` (${staffMatch.department})` : '';
    const mobileNum = staffMatch.cug_mobile || staffMatch.mobile;
    const mobile = mobileNum ? ` CUG Mobile: ${mobileNum} |` : '';
    const email = staffMatch.email ? ` Email: ${staffMatch.email}.` : '';

    return `${nameDisplay} holds the position of ${staffMatch.designation}${dept}.${mobile}${email} Visit /souharda/workforce/ for full details.`;
  }

  // 2. Keyword/Intent Matching across all modules
  const allIntentGroups = [
    greetingsIntents,
    workforceIntents,
    courtIntents,
    directorsIntents,
    educationIntents,
    galleryIntents,
    magazineIntents,
    membersIntents,
    regulatoryIntents,
    servicesIntents,
    souhardaIntents,
  ];

  const lowerQuery = q.toLowerCase();

  for (const group of allIntentGroups) {
    if (!group) continue;
    const match = group.find((item) =>
      item.keywords.some((kw) => lowerQuery.includes(kw.toLowerCase()))
    );
    if (match) {
      return match.response;
    }
  }

  // 3. Fallback Response
  return "I couldn't find a direct match. You can ask about specific staff members, Board Directors, or Court services.";
}