
import dom from 'dekujs/virtual-element';
import { className } from '../utils';


export var propTypes = {
  action: { source: 'siren:action' }
};

export function render({ props }) {
  const { action, actions } = props;

  const content = actions.length
    ? <div>{actions.map(meta => renderAction(meta, handle))}</div>
    : <em>No Actions</em>;

  return (
    <section>
      <h1>Actions</h1>
      {content}
    </section>
  );

  function handle(e) {
    e.preventDefault();
    action(e.target);
  }
}


function renderAction(meta, handle) {
  const children = meta.fields.map(renderField);
  const cls = className(meta.class);

  return (
    <section class="SirenAction">
      <h1>{meta.title || <em>Untitled Action</em>}</h1>
      <form action={meta.href} class={cls} method={meta.method} onSubmit={handle}>
        <div>{children}</div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function renderField(meta) {
  const { name, title, type, value } = meta;
  const cls = className(meta.class);

  return (
    <div class={cls}>
      <label>{title || name}</label>
      <input name={name} type={type} value={value} />
    </div>
  );
}
