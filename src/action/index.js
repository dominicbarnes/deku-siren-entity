
import element from 'magic-virtual-element';
import { Form, FormField, InputField } from 'deku-forms';
import * as List from '../list';


export function render({ props }) {
  let { action, onAction } = props;
  let { href, fields, method, title } = action;

  let children = fields.map(field => {
    let { name, title, type, value } = field;
    if (!title) title = name;
    return <InputField label={title} name={name} type={type} value={value} />;
  });

  let cls = action.class;
  if (cls && cls.length) {
    children.unshift(
      <FormField class="SirenAction-class" label="Class">
        <List items={cls} />
      </FormField>
    );
  }

  return (
    <section class="SirenAction">
      <h1>{title || <em>Untitled Action</em>}</h1>
      <Form action={href} class={cls} method={method} onSubmit={handle}>
        <div class="SirenAction-fields">{children}</div>
        <div class="SirenAction-submit">
          <button class="Button" type="submit">Submit</button>
        </div>
      </Form>
    </section>
  );

  function handle(data, form) {
    onAction(action, data, form);
  }
}
