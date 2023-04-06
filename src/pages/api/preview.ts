import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const previousPage = req.headers.referer;
  if (req.preview) {
    res.clearPreviewData();
    res.writeHead(307, { location: previousPage });
    return res.end();
  }

  const pass = '9214984e8f485ds4f8ds4f8438r4w98f4s6d541c';

  if (req.query.pass !== pass) {
    return res.status(401).json({ message: 'Invalid pass' });
  }

  res.setPreviewData({});
  res.redirect(previousPage || '/');
  res.end();
}
