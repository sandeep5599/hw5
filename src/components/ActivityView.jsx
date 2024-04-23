import React from 'react';

const ActivityView = ({ activity, onButtonClick }) => {
  return (
    <div>
      <h1>Feeling Bored?</h1>
      <p>{activity}</p>
      <button onClick={onButtonClick}>Get Another Activity</button>
    </div>
  );
};
export default ActivityView;
