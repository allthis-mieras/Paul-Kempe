// const CustomStringInput = (props) => {
//     const { elementProps, onChange, value = '', options } = props;
//     const docId = String(useFormValue(["_id"]));

//     const maxLength = options?.maxLength || 165;

//     const handleChange = (event) => {
//         onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset());
//     };

//     const textColor = value.length > maxLength ? 'red' : 'inherit';

//     return (
//         <Stack space={3}>
//             <TextInput
//                 {...elementProps}
//                 onChange={handleChange}
//                 value={value}
//                 id={docId}
//             />
//             <Text size={1} style={{ color: textColor, opacity: 0.5 }}>
//                 Characters: {value?.length || 0}
//             </Text>
//         </Stack>
//     );
// };

// export default CustomStringInput;