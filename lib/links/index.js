
/** @jsx dom */

import dom from 'dekujs/magic-virtual-element';
import * as Link from '../link';


export function render({ props }) {
  let { links } = props;

  var content = links.length
    ? <div>{links.map(link => <Link {...link} />)}</div>
    : <em>No Links</em>;

  return (
    <section class="SirenLinks">
      <h1>Links</h1>
      {content}
    </section>
  );
}
