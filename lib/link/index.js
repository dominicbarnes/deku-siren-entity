
/** @jsx dom */

import dom from 'dekujs/magic-virtual-element';
import url from 'component/url';
import * as Link from '../siren-link';
import * as List from '../list';


export let propTypes = {
  relative: { source: 'siren:relative' }
};

export function render({ props }) {
  let { href, relative, title } = props;

  let rel = props.rel.map(rel => {
    if (!url.isAbsolute(rel)) return rel;
    return { href: rel, label: relative(rel) };
  });

  return (
    <table class="SirenLink">
      <thead>
        <tr>
          <th colspan="2">
            <Link href={href}>{title || 'Untitled Link'}</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Relations</th>
          <td><List items={rel} /></td>
        </tr>
        {cls(props.class)}
        {type(props.type)}
      </tbody>
    </table>
  );

  function cls(list) {
    if (!list || !list.length) return null;
    return (
      <tr>
        <th>Class</th>
        <td><List items={list} /></td>
      </tr>
    );
  }

  function type(type) {
    if (!type) return null;
    return (
      <tr>
        <th>Type</th>
        <td>{type}</td>
      </tr>
    );
  }
}
