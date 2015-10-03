
/** @jsx dom */

import dom from 'dekujs/virtual-element';


export function render({ props }) {
  let { children, link, onLink } = props;
  let { href } = link;

  return <a href={href} onClick={handle}>{children}</a>;

  function handle(e) {
    e.preventDefault();
    onLink(link);
  }
}
