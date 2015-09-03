
/** @jsx dom */

import dom from 'dekujs/virtual-element';


export function render({ props }) {
  let { children, href, onLink } = props;

  return <a href={href} onClick={handle}>{children}</a>;

  function handle(e) {
    e.preventDefault();
    onLink(e.target.href);
  }
}
