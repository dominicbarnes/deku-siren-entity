
import dom from 'dekujs/virtual-element';
import * as Entity from '../entity';


export function render({ props }) {
  const { entities } = props;
  if (!entities) return <p>(no sub-entities)</p>;

  const content = entities.length
    ? <div>{entities.map(entity => <Entity entity={entity} />)}</div>
    : <em>No Sub-Entities</em>;

  return (
    <section class="SirenEntities">
      <h1>Sub-Entities</h1>
      {content}
    </section>
  );
}
