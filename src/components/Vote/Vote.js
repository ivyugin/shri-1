import React from 'react';
import User from '../User/User';

export default function Vote({data, voteUserID, setVoteUserID}) {

  const [horisontalWindow, setHorisontalWindow] = React.useState();
  const [users, setUsers] = React.useState(data.users);
  const [offset, setOffset] = React.useState(data.offset || 0);

  const [disableDownScroll, setDisableDownScroll] = React.useState(false);
  const [disableUpScroll, setDisableUpScroll] = React.useState(false);

  function onCardClick(e) {
    setVoteUserID(parseInt(e.currentTarget.id));
    e.currentTarget.dataset.action = 'update';
    e.currentTarget.dataset.params = {
      alias: 'leaders',
      data: {
        selectedUserId: e.currentTarget.id
      }
    }
  } 

  function onButtonUpClick(e) {
    let newOffset
    e.currentTarget.dataset.action = 'update';
    if (horisontalWindow) {
      newOffset = offset - 6 > 0 ? offset - 6 : 0;
      setOffset(newOffset);
      e.currentTarget.dataset.params = {
        alias: 'vote',
        data: {
          selectedUserId: newOffset
        }
      }
    } else {
      newOffset = offset - 8 > 0 ? offset - 8 : 0;
      setOffset(newOffset);
      e.currentTarget.dataset.params = {
        alias: 'vote',
        data: {
          selectedUserId: newOffset
        }
      }
    }
  }

  function onButtonDownClick(e) {
    e.currentTarget.dataset.action = 'update';
    if (horisontalWindow) {
      setOffset(offset + 6);
      e.currentTarget.dataset.params = {
        alias: 'vote',
        data: {
          selectedUserId: offset + 6
        }
      }
    } else {
      setOffset(offset + 8);
      e.currentTarget.dataset.params = {
        alias: 'vote',
        data: {
          selectedUserId: offset + 8
        }
      }
    }
  }

  React.useEffect(() => {
     setVoteUserID(data.selectedUserId);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setHorisontalWindow(window.innerWidth >= 660);
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (horisontalWindow) {
      setUsers(data.users.slice(offset, offset + 6));
      setDisableDownScroll(offset + 6 >= data.users.length);
      setDisableUpScroll(offset == 0);
    } else {
      setUsers(data.users.slice(offset, offset + 8));
      setDisableDownScroll(offset + 8 >= data.users.length);
      setDisableUpScroll(offset == 0);
    }
  }, [horisontalWindow, offset])

  return (
    <div className="Vote">
      {users.map((user) => {
        return (
          <div
            className={`Vote__user ${voteUserID === user.id && 'Vote__user_checked'}`}
            id={user.id}
            key={user.id}
            onClick={onCardClick}
          >
            <User
              user={user}
              withoutValueText
              emoji={voteUserID === user.id && '👍'}
            />
          </div>
        )
      })}
      <button className='Vote__button Vote__button_up' disabled={disableUpScroll} onClick={onButtonUpClick}></button>
      <button className='Vote__button Vote__button_down' disabled={disableDownScroll} onClick={onButtonDownClick}></button>
    </div>
  )
}