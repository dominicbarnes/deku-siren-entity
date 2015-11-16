# deku-siren-entity

> A component for rendering a [siren](https://github.com/kevinswiber/siren) entity.
> Primarily used during development, while still discovering the API you are
> working with.

## Usage

During development, this component is meant to be a fallback that can display
a working browser for a siren API. As you flesh out your own interface, this
component will be used less. (or remove it entirely, but it makes a good debugging
tool)

```js
import dom from 'virtual-element';
import Entity from 'deku-siren-entity';


export function render({ props }) {
  let { entity } = props;

  return <Entity entity={entity} onLink={follow} onAction={submit} />;

  function follow(link, a) {
    // use your client to follow the link to a new entity
  }

  function submit(action, data, form) {
    // use your client to submit the action and get the next entity
  }
}
```

Building your own interface on the given API is as simple as adding a
conditional. For example:

```js
if (entity.class.indexOf('home') > -1) {
  return <Home entity={entity} />;
} else {
  return <Entity entity={entity} onLink={follow} onAction={submit} />;
}
```

The nuances of this approach will probably be changed heavily as I actually
use this module in practice.
