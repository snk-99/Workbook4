"use strict"
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    },
];


function getCourse(courses, courseId) {
    let fee = [];
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i]
        if (course.CourseId == courseId) {
            return course;
        }
    }
}

function getCheapCourse() {
    let cheapCourses = [];
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (course.Fee <= 50) {
            cheapCourses.push(course)
        }
    }
    console.log(cheapCourses);
}



let course1 = getCourse(courses, "PROG200");
console.log(course1);
console.log(course1.StartDate);

let course2 = getCourse(courses, "PROJ500");
console.log(course2);
console.log(course2.CourseId);

getCheapCourse()