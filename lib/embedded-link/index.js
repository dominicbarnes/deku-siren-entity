
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as Link from '../link';

export function render({ props }) {
  let { entity, onLink } = props;

  return (
    <article class="SirenEntity">
      <Link link={entity} onLink={onLink} />
    </article>
  );
}
