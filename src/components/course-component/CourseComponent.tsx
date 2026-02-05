import type {ICourses} from "../../models/ICourses.ts";

type CourseType = {
    course: ICourses
}

export const CourseComponent = ({course}: CourseType) => {
    return (
        <div className="text-white bg-sky-600 border border-pink-700 p-6 rounded-2xl flex flex-col justify-between">
            <h1 className="text-3xl mb-4 text-center ">{course.title}</h1>
            <div className="flex flex-row gap-y-2 justify-between text-2xl mb-4">
                <div>Course hour duration: {course.hourDuration}</div>
                <div>Course month duration: {course.monthDuration}</div>
            </div>
            <h3 className="text-2xl text-center">Course modules:</h3>
            <ul>
                {
                    course.modules.map((module: string, index: number) => (
                        <li key={index} className="list-disc ml-4">{module}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CourseComponent;