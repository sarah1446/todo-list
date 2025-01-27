# 👉 [실제 사용해보기](https://optimistic-bohr-d94ba9.netlify.app/) 🗒

![todo-list](https://user-images.githubusercontent.com/35885674/97123670-381af980-1770-11eb-9ec6-0a61005dae95.gif)


# 요구사항

**헤더**
- [x] 전체선택 체크박스를 누르면 리스트의 모든 체크박스가 체크된다.
- [x] input에 todo내용 입력하고 엔터를 누르면 todo가 생성된다.

**리스트**
- [x] 리스트에 마우스 오버시 삭제버튼이 노출된다.
- [x] 삭제버튼 클릭하면 리스트가 삭제된다.
- [x] 체크박스를 클릭하면 completed true로 바뀐다.
- [x] 리스트를 더블클릭하면 수정가능하게끔 input이 생성된다
    - [x] 기존 todo내용이 input에 담긴채 유지된다
    - [x] input에 엔터치거나 다른 부분을 클릭하면 input창이 닫힌다.
- [x] 리스트가 존재하지 않을 땐 리스트와 하단부분이 노출되지 않는다. 

**하단**
- [x] 완료되지 않은 리스트의 개수가 노출된다.
- [x] todo완료 여부에 따라 all, active, completed버튼이 작동되어 리스트가 보여진다.
- [x] 체크된 리스트가 하나라도 존재할때만 clear completed버튼이 보여진다.
    - [x] clear completed버튼을 클릭하면 완료된 리스트가 삭제된다.


# 남은 구현사항
- [x] styled-component 스타일(feature/style브랜치에서 작업 후 master브랜치로 merge완료)
- [ ] 함수형으로 리팩토링(작업예정)
- [ ] 리덕스(작업예정)

