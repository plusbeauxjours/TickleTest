# Tickle Coding Test (5월 28일 ~ 5월 31일)



<p align="center" >
  <img src="https://i.ibb.co/L5yLJ4B/tickle.gif" >
  <br>
</p>



### Technical Sheet

> React-Native, Apollo, TypeScript, Styled-Components, 


### Daily Report

> **1일차**
>> 1. 5월 28일 오후 6시 코딩테스트 시작 (6월 1일 오후 6시 마감)
>> 2. restAPI는 잘 작동하였으나, GraphQL에 401 unauthrized 발생
>> 3. 서비스중인 Tickle도 GraphQL을 사용하고, 우대사항에도 포함되어 이메일 발송 후 GraphQL을 위한 apollo 셋팅
>> 4. 만약을 대비하여 axios사용하였던 코드 복기
>> 5. 제공받은 Zeplin으로 screen 설계
>> 6. lint와 prettier 셋팅하는데 생각못한 시간이 소요됨 (스터디 리스트에 추가)
>>> - react-native의 alert를 어디까지 customize 할 수 있는가?
>>> - react-native의 switch를 어디까지 customize 할 수 있는가?

> **2일차**
>> 1. sharedColor, sharedStyles, values
>> 2. alert는 접수한 Zeplin의 디자인을 따르기 위해서, switch는 우대사항 animation과 Mutation가 날라가는 타이밍을 위해서 직접 만들기로 결정
>> 3. alert가 뜰 자리를 잡고, text 입력
>> 4. 정기티클이 아닐 경우 '직접입력 확인'을 탭하지 못하도록 수정
>> 5. 정기티클 가격을 설정할 경우 alert가 두번 뜨게 되는데, alert를 react-native modal을 이용하여 직접 만들기 때문에 주의해야하였음, 결국, modal을 두번 띄우지 않고, boolean state를 이용하여 alert의 내용만 switch하도록 수정
>> 6. animation을 위해 state는 value가 아닌 index를 넣기로 결정 (아주 좋은 결정은 아니었음, 더 좋은 방법이 있을것 같음)

> **3일차**
>> 1. 1일차에 발송하였던 메일에대한 회신을 받았고, 수정된 GraphQL API을 접수
>> 2. componentDidMount에 Query를 날리고 리턴 받은 값을 Screen에 state 적용
>> 3. animation을 위해서 index를 state로 관리 하였더니, Mutation을 날릴때와 Query를 받을때 모두 value로 치환시켜 코드가 복잡해짐
>> 4. Mutation을 날리는 타이밍과 variables를 state가 변할 때마다 useEffect를 이용해서 날리려 하였지만, '직접입력 확인'에서 막힘, 결국 alert에서 확인을 탭하였을 때 날릴 Mutation을 위한 Function을 만듬
>> 5. 3자리수에 ,
>> 6. index를 0으로 받을 때 !index 분기에서 걸리는 이슈가 있었음
>> 7. 사용하지 않는 props 정리와 import 순서 정리
>> 8. memo로 불필요한 렌더 통제
>> 9. animation 적용
>> 10. 주석과 문서 작성


### Finish

> 1. lint에 소모된 시간이 길었음, 사용하던 셋팅만 쓰게되니, 새로 만들 경우 애를 먹게된. 학습 필요
> 2. component 설계, 데이터 흐름 설계에 시간 투자 필요
