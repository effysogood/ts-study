/**
 * Indexed Type
 * 객체에서 사용되는 key/value를 동적으로 사용 가능
 */

{
  interface ErrorContainer {
    // id: string;
    [prop: string]: string;
  }

  const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character',
  };
}
