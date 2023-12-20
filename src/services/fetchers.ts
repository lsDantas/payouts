export const fetcher = async (url: string | URL | Request) => fetch(url).then(async (res) => res.json());
