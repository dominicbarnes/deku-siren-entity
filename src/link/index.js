
import element from 'magic-virtual-element';
import isAbsoluteUrl from 'is-absolute-url';
import * as Link from '../siren-link';
import * as List from '../list';


export function render({ props }) {
  let { link, onLink } = props;
  let { title } = link;

  let rel = link.rel.map(rel => {
    if (!isAbsoluteUrl(rel)) return rel;
    return { href: rel, label: rel };
  });

  return (
    <table class="SirenLink">
      <thead>
        <tr>
          <th colspan="2">
            <Link link={link} onLink={onLink}>{title || 'Untitled Link'}</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Relations</th>
          <td><List items={rel} /></td>
        </tr>
        {cls(link.class)}
        {type(link.type)}
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
