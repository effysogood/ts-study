/**
 * Optional Chaining Operater ?
 * 옵셔널 체이닝 연산자는 중첩된 속성이랑 중첩된 객체의 정보를 안전하게 가져올 수 있다
 * 존재 유무를 파악하기 어려운 경우, 유용하게 사용 가능! (i.e DOM API)
 */

{
  const fetchedData = {
    id: 'user1',
    name: 'effy',
    job: { title: 'front-end', description: 'junior' },
  };

  console.log(fetchedData?.job?.description); // junior
}

/**
 * Nullish Collapsing
 * Null 병합 연산자 ??
 */

{
  const userInput = ''; // null, undefined 과 같은 falsy 값
  const storedData = userInput || 'Default'; // userInput이 falsy하기에 풀백 값을 가져오게 됨.
  console.log(storedData); // Default

  // 그렇다면 '' 값을 유지하고 싶다면?
  const nullInput = null;
  const storedNullData = userInput ?? 'Default';
  console.log(nullInput); // null
  console.log(storedNullData); // '' empty string (undefined나 null이 아닌 이상)
}
