import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Footer ()  {
  return (
    <div>
  <h1>footer</h1>
    <Outlet></Outlet>
            </div>
  );
}