
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as EmbeddedLink from '../embedded-link';
import * as EmbeddedResource from '../embedded-resource';


export function render({ props }) {
  return (
    <section class="SirenEntities">
      <h1>Sub-Entities</h1>
      {children(props.entities)}
    </section>
  );

  function children(entities) {
    if (!entities.length) return <em>No Sub-Entities</em>;

    return entities.map(entity => {
      return entity.href
        ? <EmbeddedLink entity={entity} />
        : <EmbeddedResource entity={entity} />;
    });
  }
}
