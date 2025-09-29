const categories = [
  { key: 'IA', title: 'Identity & Access' },
  { key: 'DP', title: 'Data Protection & Backup' },
  { key: 'DN', title: 'Device & Network' },
  { key: 'PT', title: 'Policies & Training' },
];

const questions = [
  { id: 'IA-1', category: 'IA', text: 'Do all critical accounts use MFA?', type: 'select', options: ['yes','no'], weight: 3 },
  { id: 'IA-2', category: 'IA', text: 'Do you use a password manager?', type: 'select', options: ['yes','no'], weight: 2 },
  { id: 'IA-3', category: 'IA', text: 'Do you enforce unique accounts per user?', type: 'select', options: ['yes','mostly','no'], weight: 2 },
  { id: 'IA-4', category: 'IA', text: 'Do you have an off-boarding process?', type: 'select', options: ['formal','ad-hoc','none'], weight: 1 },

  { id: 'DP-1', category: 'DP', text: 'Are backups performed at least daily for critical data?', type: 'select', options: ['daily/continuous','weekly','rarely/never'], weight: 3 },
  { id: 'DP-2', category: 'DP', text: 'Do you keep offline/off-site backups?', type: 'select', options: ['yes','no/unsure'], weight: 2 },
  { id: 'DP-3', category: 'DP', text: 'Is sensitive data encrypted at rest?', type: 'select', options: ['yes','partly','no/unsure'], weight: 2 },

  { id: 'DN-1', category: 'DN', text: 'Are systems regularly updated/patch-managed?', type: 'select', options: ['auto/managed','manual/irregular','rarely/never'], weight: 3 },
  { id: 'DN-2', category: 'DN', text: 'Do you use Endpoint Protection/EDR across devices?', type: 'select', options: ['yes','partly','no'], weight: 2 },
  { id: 'DN-3', category: 'DN', text: 'Is Wi-Fi secured with guest network separation?', type: 'select', options: ['WPA2/3 + guest VLAN','WPA2/3 only','weak/open'], weight: 2 },
  { id: 'DN-4', category: 'DN', text: 'Do you have a firewall/router with rules enabled?', type: 'select', options: ['yes','unsure/no'], weight: 1 },

  { id: 'PT-1', category: 'PT', text: 'Have employees had phishing training in last 12 months?', type: 'select', options: ['yes','>12 months ago','never'], weight: 3 },
  { id: 'PT-2', category: 'PT', text: 'Do you maintain acceptable use/password policies?', type: 'select', options: ['formal + enforced','exists but lax','none'], weight: 2 },
  { id: 'PT-3', category: 'PT', text: 'Do you have an incident response runbook?', type: 'select', options: ['documented + tested','documented only','none'], weight: 2 },
  { id: 'PT-4', category: 'PT', text: 'Do you review access at least quarterly?', type: 'select', options: ['yes','sometimes','no'], weight: 1 },
];

module.exports = { categories, questions };
