import React from 'react'

class Stores extends React.Component {
  render() {
    <FetchStores
      placeholder={() => {
        return <div>Loading</div>
      }}
      content={stores => {
        ;<ol>
          <li>stores</li>
        </ol>
      }}
    />
  }
}

export default Stores
