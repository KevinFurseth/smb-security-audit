const fixes = {
  'IA-1': 'Enable MFA on email, admin portals, and finance tools.',
  'IA-2': 'Adopt a company password manager and enforce usage.',
  'IA-3': 'Stop shared logins; provision unique accounts with least privilege.',
  'IA-4': 'Create an off-boarding checklist to disable access immediately.',
  'DP-1': 'Institute daily backups; test restore monthly.',
  'DP-2': 'Maintain an offline/off-site copy following 3-2-1 rule.',
  'DP-3': 'Encrypt disks (BitLocker/FileVault) and enable DB encryption.',
  'DN-1': 'Automate OS/app updates via MDM/RMM or strict schedule.',
  'DN-2': 'Deploy EDR/AV on all endpoints and monitor alerts.',
  'DN-3': 'Use WPA2/3 and separate guest Wi-Fi from internal.',
  'DN-4': 'Enable/verify basic firewall rules and disable UPnP.',
  'PT-1': 'Run phishing awareness training; repeat annually.',
  'PT-2': 'Publish acceptable use & password policy; enforce SSO + MFA.',
  'PT-3': 'Document incident response runbook; test with a tabletop.',
  'PT-4': 'Quarterly access reviews; remove unused accounts/roles.'
};

const thresholds = {
  'IA-1': 1.5, 'IA-2': 1, 'IA-3': 1, 'IA-4': 0.5,
  'DP-1': 1.5, 'DP-2': 1, 'DP-3': 1,
  'DN-1': 1.5, 'DN-2': 1, 'DN-3': 1, 'DN-4': 0.5,
  'PT-1': 1.5, 'PT-2': 1, 'PT-3': 1, 'PT-4': 0.5
};

const points = {
  'IA-1': { 'yes': 3, 'no': 0 },
  'IA-2': { 'yes': 2, 'no': 0 },
  'IA-3': { 'yes': 2, 'mostly': 1, 'no': 0 },
  'IA-4': { 'formal': 1, 'ad-hoc': 0.5, 'none': 0 },
  'DP-1': { 'daily/continuous': 3, 'weekly': 1, 'rarely/never': 0 },
  'DP-2': { 'yes': 2, 'no/unsure': 0 },
  'DP-3': { 'yes': 2, 'partly': 1, 'no/unsure': 0 },
  'DN-1': { 'auto/managed': 3, 'manual/irregular': 1, 'rarely/never': 0 },
  'DN-2': { 'yes': 2, 'partly': 1, 'no': 0 },
  'DN-3': { 'WPA2/3 + guest VLAN': 2, 'WPA2/3 only': 1, 'weak/open': 0 },
  'DN-4': { 'yes': 1, 'unsure/no': 0 },
  'PT-1': { 'yes': 3, '>12 months ago': 1, 'never': 0 },
  'PT-2': { 'formal + enforced': 2, 'exists but lax': 1, 'none': 0 },
  'PT-3': { 'documented + tested': 2, 'documented only': 1, 'none': 0 },
  'PT-4': { 'yes': 1, 'sometimes': 0.5, 'no': 0 },
};

function pickRecommendations(answers) {
  const weak = [];
  for (const [qid, ans] of Object.entries(answers || {})) {
    const earned = (points[qid] && points[qid][ans]) ?? 0;
    if (earned < thresholds[qid]) weak.push(qid);
  }
  return weak.slice(0, 4).map(id => ({ id, text: fixes[id] }));
}

module.exports = { fixes, pickRecommendations };
