import React from 'react';
import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import axios from 'axios';

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 10px solid lightgrey
  background-color: pink;
  margin: 30px;
`;

const Touchable = styled.TouchableOpacity``;
const TakePhoto = ({navigation}) => {
	const cameraRef = React.useRef(null);

	const takePhoto = async () => {
		dataC = ''
		console.log('cameraRef', cameraRef);
		if (cameraRef) {
			const data = await cameraRef.current.takePictureAsync({
				quality: 1,
				exif: true,
			});
			console.log('😻 data', data);
			if (data) {
				const result = await CameraRoll.saveToCameraRoll(data.uri);
				dataC = result
				console.log('🐤result', result);
			}
			let formData = new FormData();
      		// formData.append('document', data);
			formData.append('image', {
				uri: data.uri,
				type: 'image/jpg',
				name: 'image.jpg',
			  });
			// console.log('erwerw', data.)
			axios.post('https://soso2266.pythonanywhere.com/post', formData
			// , {
			// 	headers : {
			// 		'Content-Type' :'media-type'
			// 	}}
				)
			.then(function (response) {
				console.log(response);
				navigation.navigate('Main');
			})
			.catch(function (error) {
				console.log(error);
			});

		}
	};

	return (
		<>
			<RNCamera
				ref={cameraRef}
				style={{
					width: '100%',
					height: '80%',
				}}
				captureAudio={false} />
			<View>
				<Touchable onPress={takePhoto}>
					<Button />
				</Touchable>
			</View>
		</>
	)
}
export default TakePhoto