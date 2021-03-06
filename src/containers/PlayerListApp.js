import React, { Component } from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  setSF,
  setPG,
  sortStar
} from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById }
    } = this.props;
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      setSF: this.props.setSF,
      setPG: this.props.setPG,
      sortStar: this.props.sortStar
    };

    return (
      <>
        <div className={styles.playerListApp}>
          <h1>NBA Players</h1>
          <AddPlayerInput addPlayer={actions.addPlayer} />
          <PlayerList players={playersById} actions={actions} />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addPlayer,
  deletePlayer,
  starPlayer,
  setSF,
  setPG,
  sortStar
})(PlayerListApp);
