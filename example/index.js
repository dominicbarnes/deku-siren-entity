
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import { render, tree } from 'dekujs/deku';
import * as Entity from '..';
import resource from './resource.json';

let app = tree(
  <Entity entity={resource} onAction={onAction} onLink={onLink} />
);
render(app, document.body);

function onAction(action, data, form) {
  console.info('siren action submitted', action, data, form);
}

function onLink(link) {
  console.info('siren link requested', link);
}
