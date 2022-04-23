import LRUCache from 'lru-cache';

declare global {
	var __cache: LRUCache<string, any>;
}

const cache = global.__cache ||= new LRUCache({ max: 10000, ttl: 1000 * 60 * 60 * 12 });

export async function get<T>(url: string): Promise<T | undefined> {
	let data = cache.get<T>(url);
	if (!data && url) {
		console.log('cache miss')
		data = await fetch(url).then(res => res.json());
		cache.set(url, data)
	} else console.log('cache hit')
	return data;
}