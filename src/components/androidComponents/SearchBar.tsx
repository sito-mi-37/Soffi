import { colors } from '@/constants/tokens'
import React, { useState } from 'react'
import { Platform, TextInput, View } from 'react-native'
import { TextInputProps } from 'react-native'

export type ASearchBarProps = Partial<TextInputProps>

const ASearchBar = (props: ASearchBarProps) => {
	const [search, setSearch] = useState('')

	const handleOnChangeText: TextInputProps['onChangeText'] = (text) => {
		setSearch(text)
	}

	return (
		<View>
			{Platform.OS === 'android' && (
				<TextInput
					style={[
						{
							margin: 10,
							padding: 10,
							borderRadius: 8,
							borderWidth: 0.8,
							borderColor: colors.primary,
							backgroundColor: colors.background,
							marginTop: 80,
						},
						props.style,
					]}
					placeholder={props.placeholder}
					placeholderTextColor={colors.textMuted}
					value={search}
					onChangeText={handleOnChangeText}
				/>
			)}
		</View>
	)
}

export default ASearchBar
