import React from 'react';
import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

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

const TakePhoto = () => {
	const cameraRef = React.useRef(null);

	const takePhoto = async () => {
		console.log('cameraRef', cameraRef);
		if (cameraRef) {
			const data = await cameraRef.current.takePictureAsync({
				quality: 1,
				exif: true,
			});
			console.log('😻 data', data);

			if (data) {
				const result = await CameraRoll.save(data.uri);
				console.log('🐤result', result);
			}
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