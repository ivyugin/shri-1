import React from 'react';
import User from '../User/User';

export default function Vote({data, voteUserID, setVoteUserID}) {
  const { users } = data;

  function onCardClick(e) {
    setVoteUserID(parseInt(e.currentTarget.id));
  }

  React.useEffect(() => {
     setVoteUserID(data.selectedUserId);
  }, [])

  return (
    <div className="Vote">
      {users.slice(0, 8).map((user) => {
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
      <button className='Vote__button Vote__button_up'></button>
      <button className='Vote__button Vote__button_down'></button>
    </div>
  )
}