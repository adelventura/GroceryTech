import React from 'react'
import FetchStores from '../../Components/FetchStores'
import Loading from '../../Components/Loading'
import { Redirect } from 'react-router-dom'

class NewOrder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }

    this.handleChoose = this.handleChoose.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChoose(event) {
    if (this.state.selected === '') {
      alert('Must select store to continue')
    } else {
      this.props.history.push('/find_item')
    }
  }

  handleChange(event) {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
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
                    width: '86%',
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
                        <th scope="col">Store Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Hours today</th>
                      </tr>
                    </thead>
                    {stores.map(store => {
                      return (
                        <tbody>
                          <tr>
                            <th scope="row">
                              <input
                                type="radio"
                                name="store"
                                value={store.name}
                                onClick={this.handleChange}
                                style={{ marginRight: '10px' }}
                              />
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

export default NewOrder
