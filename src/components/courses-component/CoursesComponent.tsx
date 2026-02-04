import {coursesAndDurationArray} from "../../Array.ts";
import type {CourseModel} from "../../models/CourseModel.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";
import "./CoursesComponentStyle.css"

export const CoursesComponent = () => {


    return (
        <ul>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return<CourseComponent course={course} key={index} />
                })
            }
        </ul>
    );
};

