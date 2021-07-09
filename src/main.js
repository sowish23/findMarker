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
        axios.post('https://soso2266.pythonanywhere.com/api/address/', {'path' : './findMarkerAPI/media/'+path})
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
        <View style={{margin: 0}}>
            {
                image ? address ?
                <>
                    <Image
                        style={{width:400, height:400}}
                        source={{uri:'https://soso2266.pythonanywhere.com/media/'+image}}/>
                    <Text 
                        style={{textAlign: 'center', margin: 12, fontSize: 20}}>
                        {address.address ? address.address : '인식실패'}
                    </Text>
                </>
                : null : null

            }
        </View>
	)
}

export default Main