import React from 'react';

function ProfileSection({ first_name, last_name, username, email }) {
	return (
		<div className="w-full p-5 mb-2 bg-gray-100 rounded-lg">
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">name</div>
				{first_name} {last_name}
			</div>
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">username</div>
				{username}
			</div>
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">email</div>
				{email}
			</div>
		</div>
	);
}

export default ProfileSection;
