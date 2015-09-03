
/** @jsx dom */

import dom from 'dekujs/virtual-element';
import * as Action from '../action';


export function render({ props }) {
  let { actions, onAction } = props;

  let content = actions && actions.length
    ? <div>{actions.map(meta => <Action {...meta} onAction={onAction} />)}</div>
    : <em>No Actions</em>;

  return (
    <section class="SirenActions">
      <h1>Actions</h1>
      {content}
    </section>
  );
}
