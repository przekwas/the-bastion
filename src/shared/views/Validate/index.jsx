import { useLocation } from 'react-router';
import { BasePage, PageTitle } from '../../components';

function Validate() {

    const { state } = useLocation();

	return (
		<BasePage>
			<PageTitle text="The Bastion Wikipedia" />
            <div>{state}</div>
		</BasePage>
	);
}

export default Validate;
