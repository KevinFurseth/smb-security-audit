const MAX_POINTS = 26;

const map = {
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

function scoreAnswers(answers) {
  let total = 0;
  const byCat = { IA: 0, DP: 0, DN: 0, PT: 0 };

  for (const [qid, ans] of Object.entries(answers || {})) {
    const val = (map[qid] && map[qid][ans]) ?? 0;
    total += val;
    const cat = qid.split('-')[0];
    if (byCat[cat] !== undefined) byCat[cat] += val;
  }

  const score = Math.round((total / MAX_POINTS) * 100);
  const risk = score >= 80 ? 'low' : score >= 50 ? 'medium' : 'high';

  const catMax = { IA: 8, DP: 7, DN: 8, PT: 7 };
  const categoryBreakdown = Object.fromEntries(
    Object.entries(byCat).map(([k, v]) => [k, Math.round((v / catMax[k]) * 100)])
  );

  return { score, risk, categoryBreakdown };
}

module.exports = { scoreAnswers, MAX_POINTS };
