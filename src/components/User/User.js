import React from 'react';

export default function User({ user, isChartAlias, emoji, withoutValueText, selectedUserIndex, isTwoLines }) {

  const currentUser = {
      ...user,
      avatar_1x: require('../../images/1x/' + user.avatar),
      avatar_2x: require('../../images/2x/' + user.avatar),
      avatar_3x: require('../../images/3x/' + user.avatar),
      avatar_4x: require('../../images/4x/' + user.avatar)
    };

  return (
    <div className={`User ${isChartAlias && 'User_s'} ${selectedUserIndex && 'User_selected'}`}>
      {emoji && <p className="User__emoji">{emoji}</p>}
      <img 
        className="User__avatar"
        alt='user avatar'
        srcSet={`${currentUser.avatar_1x} 1x, ${currentUser.avatar_2x} 2x, ${currentUser.avatar_3x} 3x, ${currentUser.avatar_4x} 4x`}
      />
      <div className="User__description">
        {isTwoLines ? <h3 className="User__name">{currentUser.name.split(' ')[0]}<br/>{currentUser.name.split(' ')[1]}</h3> : <h3 className="User__name">{currentUser.name}</h3>}
        {!withoutValueText && <p className="User__valueText">{currentUser.valueText}</p>}
      </div>
      {selectedUserIndex && <hr className="User__separator" />}
      {selectedUserIndex && <p className="User__place">{selectedUserIndex}</p>}
    </div>
  );
}
 