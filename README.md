# deku-siren-entity

> A component for rendering a [siren](https://github.com/kevinswiber/siren) entity.
> Primarily used during development, while still discovering the API you are
> working with.

## Usage

During development, this component is meant to be a fallback that can display
a working browser for the siren API. As you flesh out your own interface, this
component will be used less.

**NOTE:** this assumes the [deku-siren-source](https://github.com/dominicbarnes/deku-siren-source)
plugin is being used. It also relies on ES6 code via [babel](https://babeljs.io/).

```js
import dom from 'dekujs/virtual-element';
import Entity from 'dominicbarnes/deku-siren-entity';


export let propTypes = {
  entity: 'siren:entity'
};

export function render({ props }) {
  let { entity } = props;
  return <Entity entity={entity} />;
}
```

Building your own interface on the given API is as simple as adding a
conditional. For example:

```js
if (entity.class.indexOf('home') > -1) {
  return <Home entity={entity} />;
} else {
  return <Entity entity={entity} />;
}
```

The nuances of this approach will probably be changed heavily as I actually
use this module in practice.
