import { useState, useCallback, memo } from 'react';
import SingleInput from './SingleInput';

function OTPInputComponent({
	length,
	isNumberInput,
	autoFocus,
	disabled,
	onChangeOTP,
	inputClassName,
	inputStyle,
	...rest
}) {
	const [activeInput, setActiveInput] = useState(0);
	const [otpValues, setOTPValues] = useState(Array(length).fill(''));

	// focus `inputIndex` input
	const focusInput = useCallback(
		inputIndex => {
			const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
			setActiveInput(selectedIndex);
		},
		[length]
	);

	// handle onFocus input
	const handleOnFocus = useCallback(
		index => () => {
			focusInput(index);
		},
		[focusInput]
	);

	const focusNextInput = useCallback(() => {
		focusInput(activeInput + 1);
	}, [activeInput, focusInput]);

	// helper to return value with the right type: 'text' or 'number'
	const getRightValue = useCallback(
		str => {
			let changedValue = str;
			if (!isNumberInput) {
				return changedValue;
			}
			return !changedValue || /\d/.test(changedValue) ? changedValue : '';
		},
		[isNumberInput]
	);

	// helper to return OTP from inputs
	const handleOtpChange = useCallback(
		otp => {
			const otpValue = otp.join('');
			onChangeOTP(otpValue);
		},
		[onChangeOTP]
	);

	// change OTP value at focussing input
	const changeCodeAtFocus = useCallback(
		str => {
			const updatedOTPValues = [...otpValues];
			updatedOTPValues[activeInput] = str[0] || '';
			setOTPValues(updatedOTPValues);
			handleOtpChange(updatedOTPValues);
		},
		[activeInput, handleOtpChange, otpValues]
	);

	// handle onChange value for each input
	const handleOnChange = useCallback(
		e => {
			const val = getRightValue(e.currentTarget.value);
			if (!val) {
				e.preventDefault();
				return;
			}
			changeCodeAtFocus(val);
			focusNextInput();
		},
		[changeCodeAtFocus, focusNextInput, getRightValue]
	);

	// hanlde onBlur input
	const handleOnBlur = useCallback(() => {
		setActiveInput(-1);
	}, []);

	const focusPrevInput = useCallback(() => {
		focusInput(activeInput - 1);
	}, [activeInput, focusInput]);

	// handle onKeyDown input
	const handleOnKeyDown = useCallback(
		e => {
			switch (e.key) {
				case 'Backspace':
				case 'Delete': {
					e.preventDefault();
					if (otpValues[activeInput]) {
						changeCodeAtFocus('');
					} else {
						focusPrevInput();
					}
					break;
				}
				case 'ArrowLeft': {
					e.preventDefault();
					focusPrevInput();
					break;
				}
				case 'ArrowRight': {
					e.preventDefault();
					focusNextInput();
					break;
				}
				case ' ': {
					e.preventDefault();
					break;
				}
				default:
					break;
			}
		},
		[activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
	);

	const handleOnPaste = useCallback(
		e => {
			e.preventDefault();
			const pastedData = e.clipboardData
				.getData('text/plain')
				.trim()
				.slice(0, length - activeInput)
				.split('');
			if (pastedData) {
				let nextFocusIndex = 0;
				const updatedOTPValues = [...otpValues];
				updatedOTPValues.forEach((val, index) => {
					if (index >= activeInput) {
						const changedValue = getRightValue(pastedData.shift() || val);
						if (changedValue) {
							updatedOTPValues[index] = changedValue;
							nextFocusIndex = index;
						}
					}
				});
				setOTPValues(updatedOTPValues);
				setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
				const otpValue = updatedOTPValues.join('');
				onChangeOTP(otpValue);
			}
		},
		[activeInput, getRightValue, length, otpValues, onChangeOTP]
	);

	return (
		<div {...rest}>
			{Array(length)
				.fill('')
				.map((_, index) => (
					<SingleInput
						key={`SingleInput-${index}`}
						focus={activeInput === index}
						value={otpValues && otpValues[index]}
						autoFocus={autoFocus}
						onFocus={handleOnFocus(index)}
						onChange={handleOnChange}
						onKeyDown={handleOnKeyDown}
						onBlur={handleOnBlur}
						onPaste={handleOnPaste}
						style={inputStyle}
						className={inputClassName}
						disabled={disabled}
					/>
				))}
		</div>
	);
}

const OTPInput = memo(OTPInputComponent);

export default OTPInput;
