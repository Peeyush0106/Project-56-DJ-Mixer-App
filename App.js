import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
	async playSound(url) {
		Audio.setIsEnabledAsync(false);
		try {
			if (url === "random") {
				url = ['https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3',
				'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
				'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3',
				'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3'][Math.floor(Math.random() * 4)];
			}
			await Audio.setIsEnabledAsync(true);
			await Audio.Sound.createAsync(
				{ uri: url },
				{ shouldPlay: true }
			);
			// Your sound is playing!
		} catch (error) {
			console.log();
		}
	}

	render() {
		return (
			<View style={{ backgroundColor: 'orange', paddingBottom: 270, paddingTop: 50 }}>
				<View>
					<Text style={{ fontSize: 30, backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>
						DJ Peeyush - WhiteHat
					</Text>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
					<TouchableOpacity
						style={{
							width: 200,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 100,
							backgroundColor: 'purple',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 20,
						}}
						onPress={() => {
							var url =
								'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
							this.playSound(url);
						}}>
						<Text style={{ color: "white" }}> Sound 1</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 200,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 100,
							backgroundColor: 'blue',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 20,
						}}
						onPress={() => {
							var url =
								'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3';
							this.playSound(url);
						}}>
						<Text style={{ color: "white" }}> Sound 2</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 200,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 100,
							backgroundColor: 'yellow',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 20,
						}}
						onPress={() => {
							var url =
								'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3';
							this.playSound(url);
						}}>
						<Text> Sound 3</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 200,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 100,
							backgroundColor: 'green',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 20,
						}}
						onPress={() => {
							var url =
								'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3';
							this.playSound(url);
						}}>
						<Text style={{ color: "white" }}> Sound 4</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 200,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 100,
							backgroundColor: 'black',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 20,
						}}
						onPress={() => {
							var url =
								'random';
							this.playSound(url);
						}}>
						<Text style={{ color: "yellow" }}> Play Random </Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 200,
							height: 50,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 30,
							backgroundColor: 'red',
							borderWidth: 2,
							borderColor: 'white',
							marginTop: 40,
						}}
						onPress={() => {
							Audio.setIsEnabledAsync(false);
						}}>
						<Text style={{ color: "white" }}> Stop Sound </Text>
					</TouchableOpacity>

				</View>
			</View>
		);
	}
}
