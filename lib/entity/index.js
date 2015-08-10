
import dom from 'dekujs/virtual-element';
import * as Actions from '../actions';
import * as Entities from '../entities';
import * as Links from '../links';
import * as Properties from '../properties';
import { className } from '../utils';

export function render({ props }) {
  const { entity } = props;
  if (!entity) return <p>(loading...)</p>;

  return (
    <article class={'SirenEntity ' + className(entity.class)}>
      <h1>{entity.title || <em>Untitled Entity</em>}</h1>
      <Properties properties={entity.properties} />
      <Links links={entity.links} />
      <Actions actions={entity.actions} />
      <Entities entities={entity.entities} />
    </article>
  );
}
