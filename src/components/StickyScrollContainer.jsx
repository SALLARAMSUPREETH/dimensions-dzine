import React from 'react';

// CSS-only sticky structure; no JS. Uses styles in App.css (dd-sticky-*)
const StickyScrollContainer = ({ stickyChild, triggerChild }) => {
  return (
    <section className="dd-sticky-section">
      <div className="dd-sticky-media">
        {stickyChild}
      </div>
      <div className="dd-sticky-overlay">
        {triggerChild}
      </div>
    </section>
  );
};

export default StickyScrollContainer;
