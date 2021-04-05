import React from 'react';
import User from '../User/User';

export default function Vote({ data }) {
  const countUsersOnDisplay = window.innerWidth >= 660 ? 6 : 8;
  const offset = data.offset || 0;
  const users =  data.users.slice(offset, offset + 8);

  const disableDownScroll = offset + countUsersOnDisplay >= data.users.length
  const disableUpScroll = offset == 0;

  return (
    <div className="Vote">
      {users.map((user) => {
        return (
          <div
            className={`Vote__user ${data.selectedUserId === user.id && 'Vote__user_checked'}`}
            id={user.id}
            key={user.id}
            data-action='update'
            data-params={JSON.stringify({alias: 'leaders', data: {selectedUserId: user.id}})}
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
      <button
        className="Vote__button Vote__button_up"
        disabled={disableUpScroll}
        data-action='update'
        data-params={JSON.stringify({alias: 'vote', data: {offset: offset - countUsersOnDisplay > 0 ? offset - countUsersOnDisplay : 0}})}
      ></button>
      <button
        className="Vote__button
        Vote__button_down"
        disabled={disableDownScroll}
        data-action='update'
        data-params={JSON.stringify({alias: 'vote', data: {offset: offset + countUsersOnDisplay}})}
      ></button>
    </div>
  )
}