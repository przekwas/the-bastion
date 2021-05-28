import React from 'react';

function ProfileSection() {
	return (
		<div className="w-full p-5 mb-2 bg-gray-100 rounded-lg">
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">name</div>
				Luke Przekwas
			</div>
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">username</div>
				Stormshield
			</div>
			<div className="flex flex-col items-start justify-center w-full my-2">
				<div className="text-sm font-bold tracking-tight text-gray-500">email</div>
				przekwas@gmail.com
			</div>
		</div>
	);
}

export default ProfileSection;
