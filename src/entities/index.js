
import element from 'virtual-element';
import empty from 'is-empty';
import * as Resource from '../embedded-resource';
import * as Link from '../embedded-link';


export function render({ props }) {
  let { entities, onAction, onLink } = props;

  return (
    <section class="SirenEntities">
      <h1>Sub-Entities</h1>
      {children(entities)}
    </section>
  );

  function children(entities) {
    if (empty(entities)) return <em>No Sub-Entities</em>;

    return entities.map(entity => {
      return entity.href
        ? <Link entity={entity} onLink={onLink} />
        : <Resource entity={entity} onAction={onAction} onLink={onLink} />;
    });
  }
}
