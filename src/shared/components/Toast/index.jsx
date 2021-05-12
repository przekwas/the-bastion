import { GiMineExplosion, GiSave } from 'react-icons/gi';
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
	toast.error(<ToastCard message={message} icon={<GiMineExplosion className="text-6xl" />} />, {
		className: 'bg-red-900 text-red-200 border-l-8 border-red-500',
		progressClassName: 'bg-green-600'
	});

const success = message =>
	toast.success(<ToastCard message={message} icon={<GiSave className="text-4xl" />} />, {
		className: 'bg-green-900 text-green-200 border-l-8 border-green-500',
		progressClassName: 'bg-green-600'
	});

const Toast = {
	error,
	success
};

export default Toast;