import React, { Component } from "react";
import { Pagination, Button } from "antd";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";

class PlayerList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      curPage: 1,
      curSize: 5,
      total: this.props.players.length
    };
  }

  static getDerivedStateFromProps(props, state) {
    let nextState = null;
    const { players } = props;
    const { curSize } = state;
    let { curPage, total } = state;
    if (props.players.length !== total) {
      total = players.length;
      if (players.length <= curSize) {
        curPage = 1;
      }
      if (curPage > 1 && players.length <= curSize * (curPage - 1)) {
        --curPage;
      }
      nextState = { ...(nextState || {}), curPage, total };
    }
    return nextState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    }
    if (nextProps !== this.props) {
      return true;
    }
    return false;
  }

  setPagination = (total: number) => ({
    showSizeChanger: false,
    showQuickJumper: false,
    total: total,
    current: this.state.curPage,
    pageSize: this.state.curSize,
    showTotal: (total: number) => `Total ${total}`,
    onChange: (nextPage: number) => {
      this.setState({
        curPage: nextPage,
        total
      });
    }
  });

  render() {
    const { players, actions } = this.props;
    const { curPage, curSize } = this.state;
    const start = 5 * (curPage - 1);
    const end = 5 * (curPage - 1) + 5;
    return (
      <>
        <hr />
        <Button onClick={() => actions.setSF()}>SF在前</Button>
        <Button onClick={() => actions.setPG()}>PG在前</Button>
        <Button onClick={() => actions.sortStar()}>sort star</Button>
        <hr />
        {this.props.players.length === 0 ? (
          <p>暂无数据</p>
        ) : this.props.players.length >= 5 ? (
          <>
            <ul className={styles.playerList}>
              {players.slice(start, end).map((player, index) => {
                return (
                  <PlayerListItem
                    key={index}
                    id={index + (curPage - 1) * curSize}
                    name={player.name}
                    team={player.team}
                    position={player.position}
                    starred={player.starred}
                    {...actions}
                  />
                );
              })}
            </ul>
            <div className={styles.m_top}>
              <Pagination
                style={{ float: "right" }}
                {...this.setPagination(players.length)}
              />
            </div>
          </>
        ) : (
          <ul className={styles.playerList}>
            {players.map((player, index) => {
              return (
                <PlayerListItem
                  key={index}
                  id={index}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  starred={player.starred}
                  {...actions}
                />
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PlayerList;
