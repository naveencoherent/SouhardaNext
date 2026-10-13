import { greetingsIntents } from './greetings';
import { magazineIntents } from './magazine';
import { membersIntents } from './members';
import { directorsIntents, DIRECTORS_DATA, DirectorMember } from './directors';
import { workforceIntents, WORKFORCE_DATA, StaffMember } from './workforce';
import { regulatoryIntents } from './regulatory';
import { servicesIntents } from './services';
import { souhardaIntents } from './souharda';
import { educationIntents } from './education';
import { courtIntents } from './court';
import { galleryIntents } from './gallery';
import { IntentItem } from './types';

const ALL_SECTION_INTENTS: IntentItem[] = [
  ...directorsIntents,
  ...workforceIntents,
  ...greetingsIntents,
  ...magazineIntents,
  ...membersIntents,
  ...regulatoryIntents,
  ...servicesIntents,
  ...souhardaIntents,
  ...educationIntents,
  ...courtIntents,
  ...galleryIntents,
];

function formatDirectorResponse(director: DirectorMember): string {
  const phoneStr = director.phone && director.phone !== '-' ? ` Phone: ${director.phone}.` : '';
  return `👨‍💼 ${director.name} holds the position of ${director.designation}.${phoneStr} Visit /souharda/directors/ for full details.`;
}

function formatStaffResponse(staff: StaffMember): string {
  // If the record has no valid name, skip formatting and hit fallback
  if (!staff.name || staff.name.trim() === '-' || staff.name.includes('ಆಡಳಿತ')) {
    return "";
  }

  const dept = staff.department ? ` (${staff.department})` : '';
  const mobile = staff.mobile && staff.mobile !== '-' ? ` 📱 Mobile: ${staff.mobile}` : '';
  const email = staff.email && staff.email !== '-' ? ` ✉️ Email: ${staff.email}` : '';

  return `👔 ${staff.name} holds the position of ${staff.designation}${dept} at KSSFCL.${mobile}${email} Visit /souharda/workforce/ for full details.`;
}

export function getSouhardaBotResponse(userQuery: string): string {
  // 1. Clean Query
  const rawClean = userQuery
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!rawClean) {
    return "🙏 Namaste! Welcome to KSSFCL Souharda Assistant. How can I help you today?";
  }

  // 2. CHECK DIRECTORS DATASET FIRST (Districts & Specific Names)
  const matchedDirector = DIRECTORS_DATA.find((dir) =>
    dir.districts.some((district) => rawClean.includes(district)) ||
    dir.aliases.some((alias) => rawClean.includes(alias))
  );

  if (matchedDirector) {
    return formatDirectorResponse(matchedDirector);
  }

  // 3. CHECK WORKFORCE DATASET (Staff Names)
  const matchedStaff = WORKFORCE_DATA.find((member) =>
    member.aliases.some((alias) => rawClean.includes(alias))
  );

  if (matchedStaff) {
    const formatted = formatStaffResponse(matchedStaff);
    if (formatted) return formatted;
  }

  // 4. GENERAL SECTION INTENT MODULES
  for (const item of ALL_SECTION_INTENTS) {
    const isMatch = item.keywords.some((key) => {
      const cleanKey = key
        .toLowerCase()
        .replace(/\./g, '')
        .replace(/[^a-z0-9\s]/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return rawClean.includes(cleanKey);
    });

    if (isMatch) {
      return item.response;
    }
  }

  // 5. CUSTOM FALLBACK MESSAGE
  return "At this moment, I am unable to get the information. Please contact our office or mail us at souharda@souharda.coop.";
}

export * from './types';