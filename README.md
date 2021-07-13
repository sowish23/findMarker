# findMarker
마커인식용 React Native 앱

## Description
openCV 를 이용해 도형인식과 OCR을 도입한 애플리케이션 입니다.
앱을 통해 마커 사진을 찍게 되면 도형과 글씨를 인식하여 해당 도형과 글씨에 따른 주소 값을 리턴합니다.

![image](https://user-images.githubusercontent.com/39997876/125391151-eccc7800-e3de-11eb-8df0-a7076a12ca32.png)
![image](https://user-images.githubusercontent.com/39997876/125391592-b93e1d80-e3df-11eb-9454-e7eafc36ea6f.png)

## Environment
개발환경 : macOS

패키지 관리자 : npm

## Prerequisite

@react-navigation

```npm install @react-navigation```

@react-native-community

```npm install @react-native-community```

react-native-camera

```npm install react-native-camera```

styled-components

```npm install styled-components```

axios

```npm install axios```


## Usage

```
npm install
react-native run-ios //ios 시뮬레이터
react-native run-ios --device '{device_name}' --configuration Release //ios 기기에서 실행
react-native run-android //android 실행
```
