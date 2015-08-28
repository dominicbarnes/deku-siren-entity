
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import { render, tree } from 'dekujs/deku';
import * as Entity from '..';
import siren from 'dominicbarnes/deku-siren-source';
import resource from './resource.json';

let app = tree(<Entity entity={resource} />);
app.use(siren('http://example.com')); // not important
render(app, document.body);
