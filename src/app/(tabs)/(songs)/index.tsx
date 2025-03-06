import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import React, { useMemo } from 'react'
import { View, ScrollView, Platform } from 'react-native'
import { useASearchBar } from '@/hooks/useASearchBar'
import { library } from '@/assets/data/library'
import { trackTitleFilter } from '@/helpers/filter'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const { search: aSearch, SearchBar } = useASearchBar({
		placeholder: 'Find in songs',
	})

	const filteredTracks = useMemo(() => {
		return library.filter(trackTitleFilter(Platform.OS === 'ios' ? search : aSearch))
	}, [search, aSearch])

	return (
		<View style={defaultStyles.container}>
			<SearchBar />
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TracksList tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
