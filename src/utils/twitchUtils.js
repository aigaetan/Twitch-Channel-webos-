export const loadTwitchEmbed = (container, channel) => {
  // Clear previous embed
  container.innerHTML = '';

  const embed = new window.Twitch.Embed(container, {
    channel,
    width: '100%',
    height: '100%',
    layout: 'video',
    autoplay: true,
    muted: false,
    // Optimized for TV viewing
    quality: 'chunked',
    controls: true
  });

  // Handle player errors
  embed.addEventListener(Twitch.Embed.VIDEO_ERROR, () => {
    container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h2>Unable to load stream</h2>
        <p>Please check the channel name and try again</p>
      </div>
    `;
  });

  return embed;
};