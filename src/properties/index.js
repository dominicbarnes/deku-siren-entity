
import element from 'virtual-element';
import empty from 'is-empty';


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
    return Object.keys(data).map(key => {
      let value = data[key];
      return (
        <tr>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      );
    });
  }
}
