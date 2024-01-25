// api/redirect.js

const { send } = require('micro');

module.exports = (req, res) => {
  const { query } = req;
  const subdomain = query.subdomain;
  
  if (subdomain) {
    const linkedinProfile = 'https://www.linkedin.com/in/yourlinkedinprofile';
    const redirectUrl = `${linkedinProfile}/${subdomain}`;
    return send(res, 302, null, { Location: redirectUrl });
  }

  return send(res, 400, 'Bad Request');
};
