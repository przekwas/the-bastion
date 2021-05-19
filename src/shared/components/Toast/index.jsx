import { GiSwordBreak, GiSpellBook } from 'react-icons/gi';
import { toast } from 'react-toastify';

const ToastCard = ({ message, icon }) => {
	return (
		<div className="flex items-center">
			{icon}
			<span className="ml-6">{message}</span>
		</div>
	);
};

const error = message =>
	toast.error(<ToastCard message={message} icon={<GiSwordBreak className="text-6xl" />} />, {
		className: 'toast-error',
		progressClassName: 'toast-error-progress'
	});

const success = message =>
	toast.success(<ToastCard message={message} icon={<GiSpellBook className="text-6xl" />} />, {
		className: 'toast-success',
		progressClassName: 'toast-success-progress'
	});

const Toast = {
	error,
	success
};

export default Toast;
