import { useState, useEffect } from 'react';

/**
 * Accepts a media query string then uses the
 * [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
 * matches with the current document.<br />
 * It also monitor the document changes to detect when it matches or stops matching the media query.<br />
 * Returns the validity state of the given media query.
 *
 */
export function useMediaQuery(mediaQuery) {
	const [isVerified, setIsVerified] = useState(!!window.matchMedia(mediaQuery).matches);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQuery);
		const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

		mediaQueryList.addListener(documentChangeHandler);

		documentChangeHandler();
		return () => {
			mediaQueryList.removeListener(documentChangeHandler);
		};
	}, [mediaQuery]);

	return isVerified;
}

export default useMediaQuery;