import React from 'react';
import User from '../User/User';

export default function Vote({ data }) {
  const countUsersOnDisplay = window.innerWidth >= 660 ? 6 : 8;
  const offset = data.offset || 0;
  const users =  data.users.slice(offset, offset + 8);

  const disableDownScroll = offset + countUsersOnDisplay >= data.users.length
  const disableUpScroll = offset == 0;
  
  function onCardClick(e) {
    console.log('e.currentTarget')
    e.currentTarget.dataset.action = 'update';
    e.currentTarget.dataset.params = {
      alias: 'leaders',
      data: {
        selectedUserId: e.currentTarget.id
      }
    }
  } 

  function onButtonUpClick(e) {
    e.currentTarget.dataset.action = 'update';
    e.currentTarget.dataset.params = {
      alias: 'vote',
      data: {
        selectedUserId: offset - countUsersOnDisplay > 0 ? offset - countUsersOnDisplay : 0
      }
    }
  }

  const onButtonDownClick = (e) => {
    console.log('e.currentTarget')
    e.currentTarget.dataset.action = 'update';
    e.currentTarget.dataset.params = {
      alias: 'vote',
      data: {
        selectedUserId: offset + countUsersOnDisplay
      }
    }
  }

  React.useEffect(() => {
     console.log(onButtonUpClick);
  }, []);

  

  return (
    <div className="Vote">
      {users.map((user) => {
        return (
          <div
            className={`Vote__user ${data.selectedUserId === user.id && 'Vote__user_checked'}`}
            id={user.id}
            key={user.id}
            onClick={onCardClick}
          >
            <User
              user={user}
              withoutValueText
              emoji={data.selectedUserId === user.id && '👍'}
              isTwoLines
            />
          </div>
        )
      })}
      <button className="Vote__button Vote__button_up" disabled={disableUpScroll} onClick={onButtonUpClick}></button>
      <button className="Vote__button Vote__button_down" onClick={onButtonDownClick} disabled={disableDownScroll} ></button>
    </div>
  )
}