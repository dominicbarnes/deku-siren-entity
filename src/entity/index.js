
import element from 'virtual-element';
import { Grid, Cell } from 'deku-grid';
import * as Actions from '../actions';
import * as Class from '../class';
import * as Entities from '../entities';
import * as Links from '../links';
import * as Properties from '../properties';

export function render({ props }) {
  let { entity, onAction, onLink } = props;

  return (
    <article class="SirenEntity">
      <h1>{entity.title || <em>Untitled Entity</em>}</h1>
      <Grid gutter>
        <Cell size="1of3">
          <Class classes={entity.class} />
          <Properties properties={entity.properties} />
          <Links links={entity.links} onLink={onLink} />
          <Actions actions={entity.actions} onAction={onAction} />
        </Cell>
        <Cell size="2of3">
          <Entities entities={entity.entities}
            onAction={onAction} onLink={onLink} />
        </Cell>
      </Grid>
    </article>
  );
}
