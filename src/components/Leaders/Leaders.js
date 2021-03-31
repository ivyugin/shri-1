import React from 'react';
import User from '../User/User';

export default function Leaders({ data }) {
  const { emoji, users, selectedUserId } = data;
  let selectedUserIndex = undefined;
  let selectedUserNotLeader = undefined;
  let selectedUserTotalNotLeader = undefined;

  if (selectedUserId) {
    selectedUserIndex = users.findIndex(user => user.id == selectedUserId);
    selectedUserNotLeader = selectedUserIndex > 2;
    selectedUserTotalNotLeader = selectedUserIndex > 4;
  }

  return(
    <div className='Leaders'>
      <div className='Leaders__container'>
        <User
          user={users[selectedUserTotalNotLeader ? selectedUserIndex : 4]}
          emoji={users[selectedUserTotalNotLeader ? selectedUserIndex : 4].id == selectedUserId && '👍' }
          isTwoLines
        />
        <div className="Leaders__podium Leaders__podium_5">
          <p className="Leaders__place_left Leaders__place">
            5
          </p>
        </div>
      </div>
      <div className='Leaders__container'>
        <User
          user={users[2]}
          emoji={users[2].id == selectedUserId && '👍' }
          isTwoLines
        />
        <div className="Leaders__podium Leaders__podium_3">
          <p className="Leaders__place_left Leaders__place">
            3
          </p>
        </div>
      </div>
      <div className='Leaders__container'>
        <User
          user={users[0]}
          emoji={emoji}
          isTwoLines
        />
        { selectedUserNotLeader && <User user={users[selectedUserIndex]} emoji={'👍'} selectedUserIndex={selectedUserIndex + 1} isTwoLines /> }
        <div className="Leaders__podium Leaders__podium_1 Leaders__place">
          1
        </div>

      </div>
      <div className='Leaders__container'>
        <User
          user={users[1]}
          emoji={users[1].id == selectedUserId && '👍' }
          isTwoLines
        />
        <div className="Leaders__podium Leaders__podium_2">
          <p className="Leaders__place_right Leaders__place">
            2
          </p>
        </div>
      </div>
      <div className='Leaders__container'>
        <User
          user={users[3]}
          emoji={users[3].id == selectedUserId && '👍' }
          isTwoLines
        />
        <div className="Leaders__podium Leaders__podium_4">
          <p className="Leaders__place_right Leaders__place">
            4
          </p>
        </div>
      </div>
    </div>
  )
}