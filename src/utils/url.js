export const isMailLink = (url) => url.startsWith('mailto:');

// Props for opening external links in a new tab (mail links open in place)
export const linkTargetProps = (url) =>
    isMailLink(url) ? {} : { target: '_blank', rel: 'noreferrer' };
