import { useEffect } from 'react';

// open all external links in another tab
export default function ExternalLinks() {
  useEffect(() => {
    const { links } = document;
    for (let i = 0, linksLength = links.length; i < linksLength; i += 1) {
      if (links[i].hostname !== window.location.hostname) {
        // these 2 add errors. Can't find a fix
        links[i].setAttribute('target', '_blank');
        links[i].rel = 'noopener noreferrer';
      }
    }
  });
}
