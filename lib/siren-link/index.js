
/** @jsx dom */

import dom from 'dekujs/virtual-element';


export var propTypes = {
  navigate: { source: 'siren:navigate' }
};

export function render({ props }) {
  let { children, href, navigate } = props;

  return <a href={href} onClick={handle}>{children}</a>;

  function handle(e) {
    e.preventDefault();
    navigate(e.target.href);
  }
}
