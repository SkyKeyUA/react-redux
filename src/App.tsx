/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCash, getCash, selectCounter } from './redux/slices/counter';
import './scss/app.scss';

function App() {
  const isMounted = React.useRef(false);
  const { cash } = useSelector(selectCounter);
  const dispatch = useDispatch();
  const onClickAddCash = () => {
    dispatch(addCash(Number(prompt())));
  };
  const onClickGetCash = () => {
    dispatch(getCash(Number(prompt())));
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
        </div>
      </div>
    </div>
  );
}

export default App;
