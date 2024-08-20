/\*\*

## Splitting Code Into Multiple Files

1.  Namespaces & File Bundling

- Use 'namespace' code syntax to group code
- Per-file or bundled compilation is possible (less imports to manage)

2.  ES6 Imports/Exports

- Use ES6 import/export syntax
- Pre-file compilation but single <script> import
- Bundling via third-party tools(e.g. Webpack) is possible!

## 1. 💩 TS namespaces

TypeScript의 namespaces는 함께 관련 있는 코드를 그룹화하는 오래된 타입스크립트 기능
이는 ES6 모듈 시스템이 등장하기 전, 코드의 조직화 및 네임스페이스 충돌을 방지하기 위해 사용되었다고 한다.
비록 최근 ES6 모듈 체계로 많은 대체가 되었지만, 기존의 코드베이스나 특정 상황에서는 여전히 사용되는 중

### 원리

Namespaces를 사용하면 여러 관련 요소를 하나의 컨테이너로 묶어 네임스페이스 충돌을 방지할 수 있다.
이는 JavaScript에서는 전역 변수나 함수를 줄이는 데 유용하며, 코드의 가독성과 유지보수성을 개선한다.

#### 동작 방식

- 정의: namespace 키워드를 사용하여 네임스페이스를 정의한다.
- 모듈화: 네임스페이스 내에 인터페이스, 클래스, 함수 등을 정의하여 파일 간에 계층 구조로 코드를 나눈다.
- 사용: 네임스페이스에 정의된 요소를 접근할 때는 NamespaceName.ClassName 형태로 접근한다.

```
namespace Shapes {
  export class Rectangle {
    constructor(public width: number, public height: number) {}

    getArea(): number {
      return this.width * this.height;
    }
  }

  export class Circle {
    constructor(public radius: number) {}

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}

// 네임스페이스 내의 클래스를 사용할 때는 네임스페이스 이름을 통해 접근
const myRectangle = new Shapes.Rectangle(10, 20);
console.log(`Rectangle Area: ${myRectangle.getArea()}`);
```

#### 주의점 및 모듈과의 비교

- 파일 분할: 네임스페이스를 여러 파일로 분할할 수 있다. reference 태그를 사용하여 다른 파일의 네임스페이스를 참조할 수 있지만,
  이는 ES6 모듈에서 import/export 문을 사용하는 것에 비해 직관적이지 않다!

- Global vs Local: 네임스페이스는 전역 스코프에 하나의 객체로 존재하며,
  이는 동일한 네임스페이스 이름을 사용하는 다양한 코드베이스에서 충돌의 가능성을 높인다.

- ✅ Modules 추천: 현재 TypeScript 프로젝트에서는 ES6 모듈 시스템(파일 단위의 모듈)을 사용하는 것이 일반적이고 추천되는 방법.
  이는 더 나은 모듈화를 제공하고 네임스페이스와 관련된 문제를 최소화한다.

## 2. 파일 및 폴더 구조 분리

├─ src
│ ├─ components
│ │ ├─ input.ts
│ │ ├─ item.ts
│ │ └─ list.ts
│ ├─ decorators
│ │ ├─ autobind.ts
│ │ └─ project.ts
│ ├─ state
│ │ └─ project-state.ts
│ ├─ util
│ │ └─ validation
│ └─ app.ts
└─ tsconfig.json

## 3. ES6 Module

ES6 모듈, 또는 ECMAScript 2015 모듈 시스템은 JavaScript에 표준 모듈 시스템을 제공하여 코드의 구조화와 재사용을 개선!
이전에는 JavaScript에서 모듈화 기능이 표준화되지 않아 CommonJS나 AMD 등의 비표준 방법을 사용하는 경우가 많았다.
ES6 모듈은 이를 표준화하여 더 간단하고 직관적인 방법으로 모듈을 작성하고 사용할 수 있게 했다.

### ES6 모듈의 특징

#### 1. 파일 단위 모듈화

각 JavaScript 파일이 하나의 모듈로 취급된다.
모듈은 독립적인 스코프를 가지며, 변수나 함수가 다른 모듈과 충돌하지 않도록 보호된다.

#### 2. import와 export 키워드

- export
  모듈 내부의 변수를 외부로 노출할 때 사용합니다. export 키워드를 사용하여 함수, 클래스, 변수 등을 내보낼 수 있습니다.

- import
  다른 모듈에서 export된 기능을 가져올 때 사용한다.

#### 3. Dynamic Import

ES6 모듈은 기본적으로 정적 구조이지만, import() 함수를 통해 동적으로 모듈을 로드할 수 있다.
이는 비동기적으로 작동하여 성능 최적화에 유리! 성능 향상과 필요한 경우에 맞춰 사용 가능

```
import('./module.js')
  .then((module) => console.log(module))
  .catch((err) => console.log(err));
```

```
if (user.admin) {
  import('./admin.js').then({ setupAdminUser }) => {
    setupAdminUser();
  }
}
```

#### 4. 엄격 모드

ES6 모듈은 기본적으로 엄격 모드(strict mode)를 따른다. 이는 더 안전한 코딩 관행을 제공한다.

#### 5. 호환성과 최적화

모듈 번들러(webpack 등)와 함께 사용할 경우,
트리 쉐이킹(tree shaking)과 같은 방법으로 사용하지 않는 코드를 제거하여 최적화할 수 있습니다.
