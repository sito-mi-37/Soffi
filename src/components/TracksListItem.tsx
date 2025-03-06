import { unknownTrackImageUri } from '@/constants/images'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import { defaultStyles } from '@/styles'
import { colors, fontSize } from '@/constants/tokens'

export type TrackListItemProps = {
	track: { title: string; image?: string; artist?: string }
}

export const TrackListItem = ({ track }: TrackListItemProps) => {
	const isActiveTrack = false

	return (
		<TouchableHighlight>
			<View>
				<View style={styles.trackItemContainer}>
					<View>
						<Image
							source={track.image ?? unknownTrackImageUri}
							style={{ ...styles.trackArtworkImage, opacity: isActiveTrack ? 0.5 : 1 }}
						/>
					</View>
					<View>
						<Text
							numberOfLines={1}
							style={{
								...styles.trackTitleText,
								color: isActiveTrack ? colors.primary : colors.text,
							}}
						>
							{track.title}
						</Text>
						<Text numberOfLines={1} style={{ ...styles.trackArtistText }}>
							{track.artist}
						</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
