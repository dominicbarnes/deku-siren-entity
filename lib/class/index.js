
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as List from '../list';


export function render({ props }) {
  let { classes } = props;

  return (
    <section class="SirenClass">
      <h1>Class</h1>
      <List items={classes} />
    </section>
  );
}
