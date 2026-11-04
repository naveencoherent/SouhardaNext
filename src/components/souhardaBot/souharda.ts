export interface IntentItem {
  keywords: string[];
  response: string;
}

export const souhardaIntents: IntentItem[] = [
  {
    keywords: ['gb', 'general body', 'gb meeting', 'gb details', 'annual general body'],
    response: "🏛️ General Body (GB) details, annual meeting schedules, and resolutions can be accessed under the Regulatory & Governance section at /souharda/governance/."
  }
];