import React from "react";
import { Link } from "react-router-dom";

function HomeDemo() {
  return (
    <>
      <h1 className="mb-3">React Home Demo Sandbox</h1>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/useref-demo-1"
        >
          useRef Demo 1
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/useref-demo-2"
        >
          useRef Demo 2
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/useref-demo-3"
        >
          useRef Demo 3
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/usememo-demo"
        >
          useMemo Demo
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/usecallback-demo"
        >
          useCallback Demo
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/customHook-demo"
        >
          customHook Demo
        </Link>
      </ul>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="/localStorageHook-demo"
        >
          localStorageHook Demo
        </Link>
      </ul>
    </>
  );
}

export default HomeDemo;
