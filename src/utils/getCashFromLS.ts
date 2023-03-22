/** @format */

import React from 'react';

export const getCashFromLS = () => {
  const data = localStorage.getItem('cash');
  return data ? JSON.parse(data) : 0;
};
