import { FlatList } from 'react-native'
import { library } from '@/assets/data/library'
import React from 'react'
import { TrackListItem } from './TracksListItem'
import { FlatListProps, View } from 'react-native'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

export const TracksList = ({ ...flatListProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			ListFooterComponent={ItemDivider}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => <TrackListItem track={{ ...track, image: track.artwork }} />}
			{...flatListProps}
		/>
	)
}
