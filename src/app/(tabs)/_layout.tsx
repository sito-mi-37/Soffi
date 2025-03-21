import { colors, fontSize } from '@/constants/tokens'
import { Tabs } from 'expo-router'
import { BlurView } from 'expo-blur'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
					paddingBottom: 20,
					height: 65,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={100}
						tint="dark"
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							backgroundColor: 'rgba(0, 0, 0, 0.8)',
						}}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="playlist-play" size={30} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => (
						<Ionicons name="musical-notes-sharp" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={25} color={color} />,
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
