import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, View, Image} from 'react-native';
import axios from 'axios';

const Main = () => {
    const [image, setImage] = useState();
    const [address, setAddress] = useState();

    useEffect(() => {
        getImage();
    }, []);

    useEffect(() => {
        console.log(image)
        console.log(address)
    }, [image, address]);

    // 'https://soso2266.pythonanywhere.com/post'

    const findmk = async (path) => {
        axios.post('https://soso2266.pythonanywhere.com/api/address/', {'path' : 'https://soso2266.pythonanywhere.com/media/'+path})
        .then(function (response) {
            console.log(response);
            getAddress();
        })
        .catch(function (error) {
            console.log(error);
        });
	};

	const getImage = async () => {
		axios.get('https://soso2266.pythonanywhere.com/api/image/')
		.then(function (response) {
			setImage(response.data.images.document);
            findmk(response.data.images.document)
		})
		.catch(function (error) {
			console.log(error);
		});
	};

	const getAddress = async () => {
		axios.get('https://soso2266.pythonanywhere.com/api/address/')
		.then(function (response) {
            console.log(response.data.address)
			setAddress(response.data.address);
		})
		.catch(function (error) {
			console.log(error);
		});
	};

	return (
        <View>
            {
                image ? address ?
                <>
                    <Text>{address.address ? address.address : '인식실패'}</Text>
                    <Image
                        style={{height: 200, width: 200}}
                        source={{uri:address.document}}/>
                </>
                : null : null

            }
        </View>
	)
}

export default Main