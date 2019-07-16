import React from "react";
import NavCard from "../../../Components/NavCard.js";
import FetchStore from "../../../Model/FetchStore.js";
import Loading from "../../../Components/Loading.js";
import { RouteComponentProps } from "react-router";
import { FaShoppingCart, FaCarrot, FaTimesCircle } from "react-icons/fa";
import RequiresAuthentication from "../../../Components/RequiresAuthentication.js";

interface StoreRouteProps {
  id: string;
}

export default class StoreHomePage extends React.Component<
  RouteComponentProps<StoreRouteProps>
> {
  constructor(props: RouteComponentProps<StoreRouteProps>) {
    super(props);

    this.state = {
      id: ""
    };
  }

  cancel = () => {
    // TODO: clear cart
    this.props.history.push(`/home`);
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <RequiresAuthentication>
        <div>
          <FetchStore
            id={id}
            content={(store: any) => {
              return (
                <div>
                  <p className="pageHeader">
                    Welcome to {store.name} {store.id} {id} <br />
                  </p>

                  <div className="grid-container-row">
                    <NavCard
                      link={`/store/${id}/search`}
                      icon={
                        <FaCarrot color="#a9eec2" size={140} className="icon" />
                      }
                      label="Find Item"
                    />
                    <NavCard
                      link={`/store/${id}/cart`}
                      icon={
                        <FaShoppingCart
                          color="#705772 "
                          size={140}
                          className="icon"
                        />
                      }
                      label="View Cart"
                    />
                  </div>

                  <div className="grid-container-row">
                    <NavCard
                      onClick={this.cancel}
                      icon={
                        <FaTimesCircle
                          color="#f38181"
                          size={140}
                          className="icon"
                        />
                      }
                      label="Cancel order"
                    />
                  </div>
                </div>
              );
            }}
          />
        </div>
      </RequiresAuthentication>
    );
  }
}
