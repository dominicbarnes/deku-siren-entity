
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
      return (
        <tr>
          <th>{key}</th>
          <td>{value(data[key])}</td>
        </tr>
      );
    });
  }

  function value(input) {
    if (empty(input) || typeof input === 'object') {
      return <pre>{JSON.stringify(input, null, 2)}</pre>;
    }
    return input;
  }
}
