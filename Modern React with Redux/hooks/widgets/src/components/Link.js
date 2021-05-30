import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metakey || event.ctrlKey) return;

    //PREVENT PAGE RELOAD
    event.preventDefault();

    //CHANGES URL
    window.history.pushState({}, "", href);

    //INFORM THAT URL HAS CHANGED
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
