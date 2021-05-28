import { Fab } from '../../components';

function NoteCard({ label, value, icon, color, to }) {
	return (
		<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
			<div className="flex items-center">
				{icon}
				<div className="flex flex-col">
					<span className="text-2xl font-semibold text-gray-700">{value}</span>
					<span className="text-gray-500">{label}</span>
				</div>
			</div>
			<Fab color={color} to={to} />
		</div>
	);
}

export default NoteCard;
