import {coursesArray} from "../../data/CoursesArray.ts";
import type {ICourses} from "../../models/ICourses.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";


export const CoursesComponent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-8">
            {
                coursesArray.map((course: ICourses, index: number) => (
                    <CourseComponent course={course} key={index}/>
                ))
            }
        </div>
    );
};

export default CoursesComponent;