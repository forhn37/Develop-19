/**
 * 객체 리터럴인 capsule은 세개의 key, 정보를 가지고 있습니다. 
 * 실용적인 측면에서는 전혀 사용하지 않는 방식이지만,
 * 직관적인 코드 가해를 위해 작성 한 예입니다. 
 * 
 * 객체 capsule은 세개의 key와
 * 하나의 메서드 getTotalDataString을 가지고 있는 것을 활용하면
 * 마치 '하나의 묶음'뿐만이 아니라, 기능도 포함되어 있는 객체를 만들어 낼 수 있습니다. 
 * 
 * 이러한 Wrapping 기법, 혹은 개념을 '캡슐화(encapsulation)'라고 합니다. 
 *  마치 캡슐처럼 다루겠다는의미로, 여러 유형이 존재하지만
 * 상징인 capsule이라는 전체하에 모든 의미가 함축, 추상(abstract) 되어 있습니다. 
 * 
 */

const capsule = {
  id: "kongukjae",
  password: "305",
  email: "kongukjae@example.come",
  getTotalDataString: function () {
    return `ID: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
  }
}

console.log(capsule.getTotalDataString());
