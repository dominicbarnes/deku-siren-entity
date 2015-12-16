
import element from 'virtual-element';
import url from 'component-url';


export function render({ props }) {
  let { children, link, onLink } = props;
  let { href } = link;

  return <a href={href} onClick={handle}>{children}</a>;

  function handle(e) {
    if (url.isCrossDomain(href)) return;
    e.preventDefault();
    onLink(link, e.target);
  }
}
