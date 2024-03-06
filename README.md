# CYJ
## ✅ 개요
- 여자친구와 함께 사용하던 앱을 직접 만들어보는 것으로 React Native를 학습 목표로 개발하였습니다.
  
## ✅ 개발 기간
- 2023-11-01~2024-1-31
## ✅ 사용 기술 및 개발 환경

### React Native
-핫 리로딩 기능과 하나의 코드로 IOS와 Android 앱을 모두 개발할 수 있어 선택하였습니다.

<img  src ="https://img.shields.io/badge/expo-000020.svg?&style=for-the-badge&logo=expo&logoColor=white"/>
- 앱 개발에 대한 지식이 전무한 상황이라 초기 설정이 간편하고 QR 코드로 실기기를 테스트할 수 있는 Expo를 선택하였습니다.
  
<img  src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

<img  src ="https://img.shields.io/badge/firebase-FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=white"/>
- 백엔드 없이 앱 개발에 집중하기위해 선택하였습니다.
  
<img  src ="https://img.shields.io/badge/reactquery-FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white"/>
- 개발한 앱은 클라이언트 데이터보다 서버 데이터에 의존적인 서비스이며 Redux에 비해 보일러플레이트가 적어 선택하였습니다.
  
<img  src ="https://img.shields.io/badge/visualstudiocode-007ACC.svg?&style=for-the-badge&logo=visualstudiocode&logoColor=white"/>


## ✅ Application UI
### HomeScreen
- 디데이 100일 ~ 6000일 표시
- 각 디데이 내용 등록 및 수정 가능
- 디데이 뷰 스크롤시 애니메이션 적용
<img src="https://github.com/parkcham/c-yj/assets/108769833/3bf58e0a-2412-4bb3-a269-3fd3c15eea24" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/043c08b7-16e0-4c08-a5e0-6f61b5a6a912" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/bc917f21-3413-4db1-9a4c-b785c7f3342a" width ="30%" height ="600"/>

### FeedScreen
- 게시물을 생성할 때 사진 최대 5개 첨부 가능
- 게시물을 수정할 때 사진은 수정할 수 없고 글만 수정 가능
- 게시물 이미지 클릭시 원본 변경
- 게시물 내용 라인 3줄 제한 ,클릭시 제한 해제
<img src="https://github.com/parkcham/c-yj/assets/108769833/4475adb5-f406-4448-903e-06f9623fd86c" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/b9d24850-0be5-47e1-920b-6f95a3353755" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/8a28d27e-ee45-479f-994f-a85bb7bf6afa" width ="30%" height ="600"/>

### Calendar
- 현재 달 기준 1년 우 스크롤 가능
- 달력 스크롤시 현재 달 일경우 Today , 아닐 경우 해당 달 1일 일정 표시
- 일정 등록 및 삭제 가능
- 일정 뷰 스크롤시 애니메이션 적용

<img src="https://github.com/parkcham/c-yj/assets/108769833/b8a1c306-e63b-4787-833d-c92cb2e8eccd" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/ece40386-c6f3-4b37-9f5a-dc530b943f96" width ="30%" height ="600"/>
<img src="https://github.com/parkcham/c-yj/assets/108769833/3a184ca2-55ea-4463-87ca-c5fdada02f96" width ="30%" height ="600"/>

## 시행 착오
- 컴포넌트가 상태 바(status bar)를 침범하는 문제를 해결하기 위해 iOS에서는 SafeAreaView를 사용하고, 안드로이드에서는 패딩 값을 이용하였습니다.
- header의 높이를 scroll Y 값에 따라 동적으로 조절하여 Animation Bottom Sheet를 개발했습니다. 그러나 이 방식은 iOS에서는 잘 작동하지만, 안드로이드에서는 성능 문제로 인해 버벅거리는 현상이 발생했습니다. 이후 많은 시간을 투자하여 header의 높이가 아닌 Bottom Sheet의 Y 값 변경을 통해 문제를 해결하였습니다.

## 결과 및 배운 점
- 앱 개발이 처음이어서 개발 실력 향상을 위해 토이프로젝트를 시작했습니다. 혼자서 진행하여 자유도가 높아서 좋았지만, 혼자서 진행하다보니 나 자신과 타협하면서 완성도가 부족하다는 것을 깨달았으며 팀 협이 중요하다는 것을 느꼈습니다.
## ✅ Application 작동 영상

<div align="center" padding=10>

<div align="center" border="0">
 <kbd>
<video border="0" src="https://github.com/parkcham/c-yj/assets/108769833/55d3c6af-11ff-4446-9df3-6362ce8b5d40"/>
</kbd>
</div>
