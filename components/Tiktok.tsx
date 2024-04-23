import { useEffect } from 'react';

const TikTokEmbed = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@mr_heelariouz_/video/7311403511172877573"
      data-video-id="7311403511172877573"
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section>
        <a target="_blank" title="@mr_heelariouz_" href="https://www.tiktok.com/@mr_heelariouz_?refer=embed">
          @mr_heelariouz_
        </a>
        Inky pinky ponky 😭🤣{' '}
        <a title="mrheelariouz" target="_blank" href="https://www.tiktok.com/tag/mrheelariouz?refer=embed">
          #mrheelariouz
        </a>{' '}
        <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">
          #fyp
        </a>{' '}
        <a title="foru" target="_blank" href="https://www.tiktok.com/tag/foru?refer=embed">
          #foru
        </a>{' '}
        <a
          target="_blank"
          title="♬ original sound - Jillani 🦋 AESTHETICS"
          href="https://www.tiktok.com/music/original-sound-7309383129645878022?refer=embed"
        >
          ♬ original sound - Jillani 🦋 AESTHETICS
        </a>
      </section>
    </blockquote>
  );
};

export default TikTokEmbed;
