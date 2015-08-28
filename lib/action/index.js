
/** @jsx dom */

import dom from 'dekujs/magic-virtual-element';
import { Form, InputField } from 'dominicbarnes/deku-forms';


export var propTypes = {
  action: { source: 'siren:action' }
};

export function render({ props }) {
  let { action, href, fields, method, title } = props;

  let children = fields.map(field => {
    let { name, title, type, value } = field;
    if (!title) title = name;
    return <InputField label={title} name={name} type={type} value={value} />;
  });

  return (
    <section class="SirenAction">
      <h1>{title || <em>Untitled Action</em>}</h1>
      <Form action={href} class={props.class} method={method} onSubmit={handle}>
        <div class="SirenAction-fields">{children}</div>
        <div class="SirenAction-submit">
          <button class="Button" type="submit">Submit</button>
        </div>
      </Form>
    </section>
  );

  function handle(e) {
    e.preventDefault();
    action(e.target);
  }
}