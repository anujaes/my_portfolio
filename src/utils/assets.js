// Resolves asset paths used in the JSON data (e.g. "images/companies/antino.png")
// to the URLs Vite produces at build time.
const files = import.meta.glob('../{images,docs}/**/*', { eager: true, import: 'default' });

const byPath = Object.fromEntries(
    Object.entries(files).map(([key, url]) => [key.replace('../', ''), url])
);

export function asset(path) {
    if (!path) return undefined;
    const url = byPath[path];
    if (!url && import.meta.env.DEV) {
        throw new Error(`Asset not found: "${path}". Check the path in src/data/*.json`);
    }
    return url;
}
