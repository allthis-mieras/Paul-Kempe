import { useCallback } from 'react'
import { Stack, Text, TextInput } from '@sanity/ui'
import { set, unset } from 'sanity'

export const CustomStringInput = (props) => {
    const { elementProps, onChange, value = '', options } = props
    const docId = String(useFormValue(["_id"]));

    const maxLength = options?.maxLength || 165

    const handleChange = useCallback(
        (event) =>
            onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
        [onChange]
    )

    // Determine text color based on length
    const textColor = value.length > maxLength ? 'red' : 'inherit'

    return (
        <Stack space={3}>
            <TextInput

                {...elementProps}
                onChange={handleChange}
                value={value}
                // placeholder={docId}
                id={docId}
            />
            <Text size={1} style={{ color: textColor, opacity: 0.5 }}>
                Characters: {value?.length || 0}
                {/* Characters: {value?.length || 0} / {maxLength} */}
            </Text>
        </Stack>
    )
}
