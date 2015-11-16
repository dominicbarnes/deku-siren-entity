
import empty from 'is-empty';
import element from 'virtual-element';
import * as List from '../list';

export function render({ props }) {
  let { classes } = props;

  if (empty(classes)) return <noscript />;

  return (
    <section class="SirenClass">
      <h1>Class</h1>
      <List items={classes} />
    </section>
  );
}
