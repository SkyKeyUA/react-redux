/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllUsers, addUser, removeCustomer, removeUser, selectUsers } from './redux/users/slice';
import { addCash, getCash, selectCash } from './redux/cash/slice';
import './scss/app.scss';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function App() {
  const isMounted = React.useRef(false);
  const { cash } = useSelector(selectCash);
  const { user } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const onClickAddCash = () => {
    dispatch(addCash(Number(prompt())));
  };
  const onClickGetCash = () => {
    dispatch(getCash(Number(prompt())));
  };
  const onClickAddUser = () => {
    if (user) {
      const newUser: UserProps = {
        id: user.length + 1,
        name: '',
        username: prompt() as string,
        email: '',
      };
      dispatch(addUser(newUser));
    }
  };
  const onClickRemoveUser = () => {
    dispatch(removeUser(prompt() as string));
  };
  const onClickRemoveCustomer = React.useCallback((index: number) => {
    dispatch(removeCustomer(index));
  }, []);
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
                <button onClick={() => dispatch(addAllUsers(user))} className="content__btn">
                  AddFetchUsers
                </button>
              </div>
              <div className="content__block">
                <button onClick={() => onClickAddUser()} className="content__btn">
                  AddUser
                </button>
                <button onClick={() => onClickRemoveUser()} className="content__btn">
                  RemoveUser
                </button>
                <div className="content__number">{user.length}</div>
              </div>
              {user.length > 0 ? (
                user.map((obj: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => onClickRemoveCustomer(index)}
                    className="content__user">
                    {obj.username}
                  </div>
                ))
              ) : (
                <div className="content__nouser">No Users</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
