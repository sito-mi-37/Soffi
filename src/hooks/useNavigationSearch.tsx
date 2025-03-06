import { colors } from '@/constants/tokens'
import { SearchBarProps } from 'react-native-screens'
import { useState, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Platform } from 'react-native'

const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false,
}

export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('')

	const navigation = useNavigation()

	const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearch(text)
	}

	useLayoutEffect(() => {
		if (Platform.OS === 'ios') {
			navigation.setOptions({
				headerSearchBarOptions: {
					...defaultSearchOptions,
					...searchBarOptions,
					onChangeText: handleOnChangeText,
				},
			})
		}
	}, [navigation, searchBarOptions])

	return search
}
