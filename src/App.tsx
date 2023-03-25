/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCash, addUser, getCash, removeUser, selectCounter } from './redux/slices/counter';
import './scss/app.scss';

function App() {
  const isMounted = React.useRef(false);
  const { cash, user } = useSelector(selectCounter);
  const dispatch = useDispatch();
  const onClickAddCash = () => {
    dispatch(addCash(Number(prompt())));
  };
  const onClickGetCash = () => {
    dispatch(getCash(Number(prompt())));
  };
  const onClickAddUser = () => {
    if (user) {
      dispatch(addUser(prompt() as string));
    }
  };
  const onClickRemoveUser = () => {
    dispatch(removeUser(prompt() as string));
  };
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cash);
      localStorage.setItem('cash', json);
    }
    isMounted.current = true;
  }, [cash]);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="content__container">
            <div className="content__info">
              <button onClick={() => onClickAddCash()} className="content__btn">
                AddCash
              </button>
              <button onClick={() => onClickGetCash()} className="content__btn">
                GetCash
              </button>
              <div className="content__number">{cash}</div>
            </div>
          </div>
          <div className="content__container">
            <div className="content__users">
              <div className="content__block">
                <button onClick={() => onClickAddUser()} className="content__btn">
                  AddUser
                </button>
                <button onClick={() => onClickRemoveUser()} className="content__btn">
                  RemoveUser
                </button>
              </div>
              {user.length > 0 ? (
                user.map((obj: any, index: number) => (
                  <div key={index} className="content__user">
                    {obj}
                  </div>
                ))
              ) : (
                <div className="content__user">No Users</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
