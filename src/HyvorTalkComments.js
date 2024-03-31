import React, { useEffect } from 'react';

const HyvorTalkComments = ({ websiteId, pageId }) => {
  useEffect(() => {
    // Define the script URL
    const scriptUrl = 'https://talk.hyvor.com/embed/embed.js';

    // Check if the script is already added
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (!existingScript) {
      // Create script element and set attributes
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.type = 'module';
      script.async = true;

      // Append script to body
      document.body.appendChild(script);

      // Cleanup function to remove script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    // Function to load Hyvor Talk
    const loadHyvorTalk = () => {
      // Ensure the Hyvor Talk window object exists
      if (window.HyvorTalk && window.HyvorTalk.load) {
        window.HyvorTalk.load(websiteId, pageId);
      }
    };

    // Wait for the Hyvor Talk script to be defined
    customElements.whenDefined('hyvor-talk-comments').then(() => {
      // Create the Hyvor Talk comments element
      const commentsElement = document.createElement('hyvor-talk-comments');
      commentsElement.setAttribute('website-id', websiteId.toString());
      if (pageId) {
        commentsElement.setAttribute('page-id', pageId.toString());
      }

      // Find the container and append the comments element
      const container = document.getElementById('hyvor-talk-container');
      if (container) {
        container.appendChild(commentsElement);
      }

      // Load or reload Hyvor Talk
      loadHyvorTalk();
    });

    return () => {
      // Optional: Clean up when the component unmounts
      const container = document.getElementById('hyvor-talk-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [websiteId, pageId]);

  return <div id="hyvor-talk-container" />;
};

export default HyvorTalkComments;
