import clientPromise from '@/lib/mongodb';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const slug = req.query.id;

  if (req.method !== 'GET')
    return res.status(401).json({ message: 'unauthorized' });

  try {
    if (!slug) return res.json('Page not Found');

    const client = await clientPromise;
    const collection = client.db().collection('posts');

    const pageViewBySlug = await collection.findOne({ slug });

    let total = 0;

    if (pageViewBySlug) {
      total = pageViewBySlug.total + 1;
      await collection.updateOne({ slug }, { $set: { total } });
    } else {
      total = 1;
      await collection.insertOne({ slug, total });
    }
    return res.status(200).json({ total });
  } catch (e) {
    return res.status(500).json({ error: 'client DB is not connected' });
  }
};

export default handler;
