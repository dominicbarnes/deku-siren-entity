
import element from 'magic-virtual-element';
import { Grid, Cell } from 'deku-grid';
import * as Actions from '../actions';
import * as Class from '../class';
import * as Links from '../links';
import * as Properties from '../properties';

export function render({ props }) {
  let { entity, onAction, onLink } = props;
  if (!entity) return <p>(loading...)</p>;

  return (
    <article class="SirenEntity">
      <h1>{entity.title || <em>Untitled Entity</em>}</h1>
      <Grid gutter>
        <Cell size="1of2">
          <Class classes={entity.class} />
          <Properties properties={entity.properties} />
        </Cell>
        <Cell size="1of2">
          <Links links={entity.links} onLink={onLink} />
          <Actions actions={entity.actions} onAction={onAction} />
        </Cell>
      </Grid>
    </article>
  );
}
