import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, selectAllPeople } from "./PeopleSlice";
import  asyncStatus  from '../AsyncStatus';

const PersonEcxerpt = ({person}) => {
  return (          
  <div>
    <h3>Name: {person.name}</h3>
  </div>);
}

export const People = () => {

  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople);
  const status = useSelector(state => state.people.status);
  
  useEffect(() => {
    if (status === asyncStatus.IDLE)
      dispatch(fetchPeople());
  }, [status, dispatch]);

  let content;

  if (status === asyncStatus.LOADING)
    content = <div>Loading...</div>;
  else if (status === asyncStatus.SUCCEEDED)
    content = people.map(p => <PersonEcxerpt key={p.id} person={p}/>);

  return (
    <div>
       { content }
    </div>
  );
}
