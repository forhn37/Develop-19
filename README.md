# Develop-19
가루약은 먹기 어려우니, 캡슐로. 
우리가 매우 자주 사용하고 있는 객체는 그 쓰임과 확장서잉 매우 뛰어나, 여러방면에서 없는 곳을 찾기 어려울 정도로 매우 사용빈도가 높습니다. 그러다보니 '메서드'와 '함수' 처럼 같은 것임에도 코드출처에 따라 완전히 이름을 구분하는 것처럼 객체의 또다른 이름들이 많습니다.

열이 나거나 아플때 복용하곤 하는 '캡슐'이 대표적인 사례 입니다. 흩어져있는 가루약은 복용하기 어렵기 때문에 캡슐형태로 담아놓은 것처럼, 객체의 구성을 마치 캡슐처럼 다루는 특별한 '개념'론이 존재합니다. 이것을 '캡슐화(encapsulation)' 라고 하며, 별다른 작성법은 존재하지 않지만, 매우 자주 기용되는 객체 구조 패턴 입니다.

팀단위나, 프로젝트단위, 어떤 일정 부분별로 '캡슐화'에 대한 정의를 따로 하는 등 활발한 약속과 규칙(컨벤션)들이 존재하고, 이것은 문법이나 작성법 '위에' 있는 또다른 방식입니다.

이렇게 작성하면 얻을 수 있는 이점은 본 예제에서 상징하는 '하나의 이름'으로 설명할 수 있다는 강력한 기능으로 javascript 언어 자체도 이러한 캡슐화가 진행되어 제작되었습니다. 같은 객체이지만, 약간씩 억양과 단어가 다른 것이 초심자에게는 혼동이 오기 좋지만, 반대로 '명백히' 구분하기 때문에 익숙해질수록 매우 편리해지는 개념이자 용어가 되겠습니다.

"인스턴스 capsule 이라는 이름으로 캡슐화 해놓았으니까 메서드 확인해주세요" 라고 한다면, '무엇으로 부터, 무엇을 위해' 했다는 이야기가 함축됩니다.

해당 구조와 데이터는 일반적으로 '리터럴(literal)'로 작성하지는 않고, 생성자 함수로 인스턴스를 생성해낼때 나오는 결과물로서 자주 확인하게될 것이므로, 구조와 역할을 파악해본 뒤, 생성자 함수 방식으로 제작해보시기 바랍니다.
