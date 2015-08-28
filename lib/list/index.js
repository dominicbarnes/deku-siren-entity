
/** @jsx dom */

import dom from 'dekujs/virtual-element';


export function render({ props }) {
  let { items } = props;

  return <div class="SirenList">{children(items)}</div>;

  function children(list) {
    if (!list) return null;

    return list.map(item => {
      return typeof item === 'string'
        ? <span class="SirenList-item">{item}</span>
        : <a href={item.href}>{item.label}</a>;
    });
  }
}
