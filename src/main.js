import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, View, Image} from 'react-native';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState();
    const [address, setAddress] = useState();

    useEffect(() => {
        getList();
    }, []);

    useEffect(() => {
        console.log(data)
    }, [address]);

    // 'https://soso2266.pythonanywhere.com/post'
	const getList = async () => {
		axios.get('https://soso2266.pythonanywhere.com/post')
		.then(function (response) {
			setData(response.data.images);
			setAddress(response.data.addresses);
		})
		.catch(function (error) {
			console.log(error);
		});
	};

	return (
        <View>
            {
                data ? address ?
                <>
                    <Text>{address[address.length - 1].address ? address[address.length - 1].address  : '인식실패'}</Text>
                    <Image
                        style={{height: 200, width: 200}}
                        source={{uri:'https://soso2266.pythonanywhere.com/media/'+data[data.length - 1].document}}/>
                </>
                : null : null

            }
        </View>
	)
}

export default Main