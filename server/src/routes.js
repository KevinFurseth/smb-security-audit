const { Router } = require('express');
const { categories, questions } = require('./questions');
const { scoreAnswers } = require('./scoring');
const { pickRecommendations } = require('./recommendations');

const r = Router();

r.get('/questions', (_req, res) => {
  res.json({ categories, questions });
});

r.post('/score', (req, res) => {
  const answers = (req.body && req.body.answers) || {};
  const base = scoreAnswers(answers);
  const recommendations = pickRecommendations(answers);
  res.json({ ...base, recommendations });
});

module.exports = r;
