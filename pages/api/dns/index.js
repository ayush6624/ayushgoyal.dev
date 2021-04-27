import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma';
// POST /api/dns
// Required fields in body: title
// Optional fields in body: content
const options = {
  headers: { Authorization: `Bearer ${process.env.CF_API_KEY}` },
};
const url = `https://api.cloudflare.com/client/v4/zones/${process.env.CF_DNS_ZONE}/dns_records`;

export default async function handle(req, res) {
  const { method, body } = req;
  if (method === 'GET') {
    const data = await prisma.dnsRecord.findMany();
    res.json(data);
  } else if (method === 'PATCH') {
    const { id, type, name, content, ttl, proxied } = JSON.parse(body);
    console.log(id, type, name, content, ttl, proxied);
    const resp = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ type, name, content, ttl, proxied }),
      headers: options.headers,
    });
    const message = await resp.json();
    console.log(message);
    res.json(resp);
  } else {
    res.status(400).json({ error: 'does not match any request' });
  }
}
