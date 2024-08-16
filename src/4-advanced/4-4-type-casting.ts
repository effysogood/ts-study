{
  /**
   * Type Casting
   * 명시한 타입을 반환하도록.
   */

  // const userInputElem = <HTMLInputElement>(
  //   document.getElementById('user-input')!
  // );
  const userInputElem = document.getElementById(
    'user-input'
  )! as HTMLInputElement;

  if (userInputElem) {
    (userInputElem as HTMLInputElement).value = 'Hi there!';
  }

  // userInputElem.value = 'Hi there!';
}
