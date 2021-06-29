import React from 'react';
import styled from 'styled-components';
import {
  Text,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import axios from 'axios';

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 10px solid lightgrey
  background-color: pink;
  margin: 30px;
`;


const Main = () => {
	const getList = async () => {
		axios.get('https://soso2266.pythonanywhere.com/post')
		.then(function (response) {
			console.log(response.data.images);
		})
		.catch(function (error) {
			console.log(error);
		});
	};

	return (
        <View>
            <Text>main</Text>
        </View>
	)
}

export default Main