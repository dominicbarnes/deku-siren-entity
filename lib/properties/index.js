
/** @jsx dom */

import empty from 'ianstormtaylor/is-empty';
import dom from 'dekujs/virtual-element';
import map from 'ianstormtaylor/map';


export function render({ props }) {
  let { properties } = props;

  let content = !empty(properties)
    ? <table>{rows(properties)}</table>
    : <em>No properties</em>;

  return (
    <section class="SirenProperties">
      <h1>Properties</h1>
      {content}
    </section>
  );

  function rows(data) {
    return map(data, (key, value) => {
      return (
        <tr>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      );
    });
  }
}
