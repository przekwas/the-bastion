import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BasePage } from '../../components';
import { GiScrollQuill } from 'react-icons/gi';

function Errors() {
	const { state } = useLocation();
	const messageRef = useRef(null);

	const copyToClipboard = e => {
		messageRef.current.select();
		document.execCommand('copy');
	};

	return (
		<BasePage>
			<div className="flex flex-col items-center justify-center w-full">
				<div className="p-4 mb-5 text-yellow-900 bg-yellow-200 border-l-4 border-yellow-400">
					If you're seeing this, then Luke's code is straight garbage! Copy the below
					error message and let him know at{' '}
					<span className="font-semibold">luke@covalence.io</span>
				</div>
				{state && (
					<>
						<input
							autoComplete="off"
							autoCorrect="off"
							autoCapitalize="off"
							spellCheck="false"
							className="flex w-full p-4 mb-5 font-mono text-sm text-gray-100 bg-gray-600 rounded"
							ref={messageRef}
							defaultValue={state}
						/>
						<button
							onClick={copyToClipboard}
							className="flex items-center self-start justify-between w-full px-2 py-4 btn btn-green">
							<span>copy to clipboard</span>
							<GiScrollQuill size="2rem" />
						</button>
					</>
				)}
			</div>
		</BasePage>
	);
}

export default Errors;
