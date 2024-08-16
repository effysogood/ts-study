{
  /**
   * Partial 부분적인 타입 제어
   */
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  function createCourseGoal(
    title: string,
    description: string,
    completeUntil: Date
  ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;
  }

  /**
   * Readonly 읽기 전용, 타입 제한
   */

  const names: Readonly<string[]> = ['effy', 'chang'];
  // names.push('bob'); !!ERROR!!
  // names.pop('bob');
}
