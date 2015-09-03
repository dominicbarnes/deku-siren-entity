
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as Link from '../link';

export function render({ props }) {
  let { entity, onLink } = props;
  let { href, rel, title } = entity;
  let cls = entity.class;

  return (
    <article class="SirenEntity">
      <Link class={cls} href={href} onLink={onLink} rel={rel} title={title} />
    </article>
  );
}
