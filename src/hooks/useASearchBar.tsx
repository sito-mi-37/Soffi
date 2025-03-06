import { colors } from '@/constants/tokens'
import React, { useCallback, useState } from 'react'
import { Platform, TextInput, View, TextInputProps } from 'react-native'

// 🔹 Define Props Type
export type ASearchBarProps = Partial<TextInputProps>

// 🔹 Custom Hook: Returns search state & SearchBar Component
export const useASearchBar = ({ placeholder }: ASearchBarProps) => {
	const [search, setSearch] = useState('')

	const handleOnChangeText: TextInputProps['onChangeText'] = (text) => {
		setSearch(text)
	}

	const SearchBar = useCallback(
		() => (
			<View>
				{Platform.OS === 'android' && (
					<TextInput
						style={[
							{
								margin: 10,
								padding: 10,
								borderRadius: 8,
								borderWidth: 0.8,
								color: colors.text,
								borderColor: colors.primary,
								backgroundColor: colors.background,
								marginTop: 80,
							},
						]}
						autoFocus={true}
						placeholder={placeholder || 'Search...'}
						placeholderTextColor={colors.textMuted}
						value={search}
						onChangeText={handleOnChangeText}
					/>
				)}
			</View>
		),
		[search],
	)

	return { search, SearchBar }
}
