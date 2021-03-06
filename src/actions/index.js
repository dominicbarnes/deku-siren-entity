
import empty from 'is-empty';
import element from 'virtual-element';
import * as Action from '../action';

export function render({ props }) {
  let { actions, onAction } = props;

  let content = !empty(actions)
    ? <div>{actions.map(a => <Action action={a} onAction={onAction} />)}</div>
    : <em>No Actions</em>;

  return (
    <section class="SirenActions">
      <h1>Actions</h1>
      {content}
    </section>
  );
}
