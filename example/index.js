
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import { render, tree } from 'dekujs/deku';
import * as Entity from '..';
import resource from './resource.json';

let app = tree(
  <Entity entity={resource} onAction={onAction} onLink={onLink} />
);
render(app, document.body);

function onAction(form) {
  console.info('siren action submitted', form);
}

function onLink(href) {
  console.info('siren link requested', href);
}
