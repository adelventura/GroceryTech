import React from 'react'
import FetchInventory from '../../Components/FetchInventory'
import Loading from '../../Components/Loading'

class ItemListingPage extends React.Component {
  render() {
    const { id } = this.props.match.params
    return (
      <React.Fragment>
        <FetchInventory
          placeholder={() => {
            return <Loading />
          }}
          content={inventory => {
            return (
              <div>
                <br />
                <span className="pageHeader">{inventory.type} Inventory</span>
                <div
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '30px',
                    borderStyle: 'solid',
                    borderWidth: '.5px',
                    borderColor: '#D6D6D6',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    width: '80%',
                    boxShadow: '0 0 5px -1px rgba(0,0,0,0.2)'
                  }}
                >
                  <table
                    style={{
                      tableLayout: 'fixed',
                      borderCollapse: 'collapse',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  >
                    <thead>
                      <tr className="table-header">
                        <th scope="col">Item Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Expiration Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">In Stock</th>
                      </tr>
                    </thead>
                    {inventory.map(inventory => {
                      return (
                        <tbody>
                          <tr>
                            <td>{inventory.name}</td>
                            <td>{inventory.description}</td>
                            <td>{inventory.expiration}</td>
                            <td>{inventory.price}</td>
                            <td>{inventory.in_stock}</td>
                          </tr>
                        </tbody>
                      )
                    })}
                  </table>
                  <br />
                  <div
                    style={{
                      width: '90%',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        width: '15%'
                      }}
                    >
                      <button className="btn">Back</button>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                        width: '70%'
                      }}
                    >
                      <button className="btn">Previous</button>
                      <button className="btn">Next</button>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignContent: 'end',
                        justifyContent: 'end',
                        width: '15%'
                      }}
                    >
                      <button
                        className="btn"
                        style={{
                          display: 'inline-block',
                          marginLeft: 'auto',
                          marginRight: '0'
                        }}
                      >
                        Choose
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
        />
      </React.Fragment>
    )
  }
}

export default ItemListingPage
