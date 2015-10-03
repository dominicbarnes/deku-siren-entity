
/** @jsx dom */

import dom from 'dekujs/magic-virtual-element';
import * as Link from '../link';


export function render({ props }) {
  let { links, onLink } = props;

  var content = links.length
    ? <div>{links.map(l => <Link link={l} onLink={onLink} />)}</div>
    : <em>No Links</em>;

  return (
    <section class="SirenLinks">
      <h1>Links</h1>
      {content}
    </section>
  );
}
