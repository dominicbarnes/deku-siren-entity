
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as Link from '../link';

export function render({ props }) {
  let { entity } = props;
  let { href, rel, title } = entity;

  return (
    <article class="SirenEntity">
      <Link class={entity.class} href={href} rel={rel} title={title} />
    </article>
  );
}
