import React, { ReactElement, useCallback } from "react";

import {
  IProgram,
  IProgramLecture,
  IProgramMenu,
} from "../../../interfaces/course/program";

import Accordion from "../../Accordion";

import MenuElement from "./listItem";

import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

const Menu: React.FC<IProgramMenu> = ({
  courseId,
  data,
  selectedSection,
  selectedLecture,
  allCompleted,
}): ReactElement => {
  const checkIfComplete = useCallback(
    (lectureId: number) => {
      return (
        (allCompleted?.length > 0 && allCompleted?.includes(lectureId)) || false
      );
    },
    [allCompleted]
  );

  const checkIfActive = useCallback(
    (lectureId: number) => {
      return (selectedLecture && lectureId === selectedLecture) || false;
    },
    [selectedLecture]
  );

  return (
    <div className="course-menu">
      <h4>Course content</h4>
      <ul>
        {data?.list?.map((section: IProgram) => {
          return (
            <li key={section.section_id}>
              <Accordion
                defaultActive={
                  (selectedSection && section.section_id === selectedSection) ||
                  false
                }
                title={section.title}
              >
                <ul>
                  {section?.lectures
                    ?.filter(
                      (lecture: IProgramLecture) => lecture?.lecture_quiz_id
                    )
                    .map((lecture: IProgramLecture, index: number) => {
                      return (
                        <MenuElement
                          key={index}
                          active={checkIfActive(lecture.lecture_quiz_id)}
                          completed={checkIfComplete(lecture.lecture_quiz_id)}
                          link={`/course/${courseId}/program/${section.section_id}/${lecture?.lecture_quiz_id}`}
                          title={lecture?.title}
                        />
                      );
                    })}
                </ul>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;