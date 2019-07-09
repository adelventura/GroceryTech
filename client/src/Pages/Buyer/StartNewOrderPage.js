import React from 'react'
import FetchStores from '../../Components/FetchStores'
import Loading from '../../Components/Loading'
import { Redirect } from 'react-router-dom'

export default class StartNewOrderPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '',
      selectedId: ''
    }
  }

  selectHandler = id => {
    return event => {
      this.setState({
        selected: event.target.value,
        selectedId: id
      })
    }
  }

  handleChoose = event => {
    if (this.state.selected == '') {
      alert('Must select store to continue')
    } else {
      const { selectedId } = this.state
      this.props.history.push(`store/${selectedId}`)
    }
  }

  render() {
    const selectedId = this.state.selectedId

    return (
      <React.Fragment>
        <FetchStores
          placeholder={() => {
            return <Loading />
          }}
          content={stores => {
            return (
              <div>
                <br />
                <span className="pageHeader">List of Stores</span>
                <div className="tbl-card">
                  <table className="tbl">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">Store Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Hours today</th>
                      </tr>
                    </thead>
                    {stores.map(store => {
                      return (
                        <tbody key={store.id}>
                          <tr>
                            <th scope="row">
                              <form
                                style={{
                                  display: 'inline'
                                }}
                              >
                                <input
                                  type="radio"
                                  name="store"
                                  value={store.name}
                                  checked={selectedId == store.id}
                                  onChange={this.selectHandler(store.id)}
                                  onClick={this.selectHandler(store.id)}
                                  style={{ marginRight: '10px' }}
                                />
                              </form>
                              {store.name}
                            </th>
                            <td>{store.address}</td>
                            <td>{store.phone}</td>
                            <td>{store.hours}</td>
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
                    />
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
                        onClick={this.handleChoose}
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
