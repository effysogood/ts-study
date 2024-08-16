"use strict";
{
    function createCourseGoal(title, description, completeUntil) {
        let courseGoal = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = completeUntil;
        return courseGoal;
    }
    /**
     * Readonly 읽기 전용, 타입 제한
     */
    const names = ['effy', 'chang'];
    // names.push('bob'); !!ERROR!!
    // names.pop('bob');
}
