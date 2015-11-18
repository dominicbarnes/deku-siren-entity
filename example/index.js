
/** @jsx dom */

import dom from 'virtual-element';
import { render, tree } from 'deku';
import Entity from '..';
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
