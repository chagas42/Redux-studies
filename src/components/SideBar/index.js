import React from "react";

import { connect } from "react-redux";

import * as CourseActions from '../../store/actions/course';


const SideBar = ({ modules, dispatch }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lessons) => (
            <li key={lessons.id}>
              {lessons.title}
              <button onClick={() => dispatch(CourseActions.toggleLesson(module, lessons))}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect(state => ({ modules: state.course.modules }))(SideBar);
