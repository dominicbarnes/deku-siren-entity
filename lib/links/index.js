
import dom from 'dekujs/virtual-element';
import isUrl from 'segmentio/is-url';
import { className } from '../utils';


export var propTypes = {
  navigate: { source: 'siren:navigate' }
};

export function render({ props }) {
  const { navigate, links } = props;

  var content = links.length
    ? <ul>{children(links)}</ul>
    : <em>No Links</em>;

  return (
    <section>
      <h1>Links</h1>
      {content}
    </section>
  );

  function children(list) {
    return list.map(link => {
      const rels = link.rel.map(rel => {
        return isUrl(rel)
          ? <a href={rel} target="_blank">{rel}</a>
          : <span>{rel}</span>;
      });

      return (
        <li>
          <a class={className(link.class)} href={link.href} onClick={follow}>Navigate</a>
          {' '}
          {rels}
        </li>
      );
    });
  }

  function follow(e) {
    e.preventDefault();
    navigate(e.target.href);
  }
}
