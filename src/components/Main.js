import React from 'react'

const Product = () => (
  <div className="parent box4 v-end">
    asdasdf asdsad asdasdf<br />
    asdasdf asdsad asdasdfasdasdf asdsad asdasdf
  </div>
)

const Checkbox = ({ label, checked, disabled }) => (
  <label className="control control--checkbox">
    {label}
    <input type="checkbox" checked={checked} disabled={disabled} />
    <div className="control__indicator" />
  </label>
)

const Checkboxes = () => (
  <div className="control-group">
    <h1>Checkbox</h1>

    <Checkbox label="First" checked />
    <Checkbox label="Second" />
    <Checkbox label="Disabled" disabled />
    <Checkbox label="Disabled & Checked" disabled checked />
  </div>
)

const List = () => (
  <ul>{[1, 2, 3, 4, 5].map(() => <li>asdfa asdfasdf asdfasdf</li>)}</ul>
)

const Main = () => (
  <main>
    <div className="parent header">
      <div className="container noborder products">
        {[1, 2, 3, 4].map(() => <Product />)}
      </div>
    </div>

    <div className="container buttonbar noborder col">
      <span>
        The good old Search Bar!sadasdasdsa
        dasdasdasdadasd.asdasdasdasdasdasdassssssssssssssdadasdasd
      </span>

      <form>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>

    <div className="container noborder">
      {[1, 2, 3, 4].map(() => <Checkboxes />)}
    </div>

    <div className="container noborder">
      <table>
        <tr>{[1, 2, 3].map(() => <th>asdf asdasdf</th>)}</tr>
        <tr>{[1, 2, 3].map(() => <td>asdf asdfasdaasdf asdfsdf</td>)}</tr>
        <tr>{[1, 2, 3].map(() => <td>asdf asdfasdaasdf asdfsdf</td>)}</tr>
      </table>
    </div>

    <div className="container noborder">
      <List />
      <List />
      <List />
    </div>
  </main>
)

export default Main
