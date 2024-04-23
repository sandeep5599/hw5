import React, { useState, useEffect } from 'react';
import { fetchActivity } from '../BoredApi';
import ActivityView from './ActivityView';

const ActivityController = () => {
  const [activity, setActivity] = useState('');

  const getActivity = async () => {
    const newActivity = await fetchActivity();
    setActivity(newActivity);
  };

  useEffect(() => {
    getActivity();
  }, []);

  const handleButtonClick = () => {
    getActivity();
  };

  return <ActivityView activity={activity} onButtonClick={handleButtonClick} />;
};

export default ActivityController;