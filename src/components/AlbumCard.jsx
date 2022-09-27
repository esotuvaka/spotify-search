import React, { useState } from 'react';

import Logo from '../assets/S-Logo.png';

const AlbumCard = ({
	image,
	name,
	browserLink,
	appLink,
	links,
	date,
	tracks,
	artists,
	activeTheme,
}) => {
	const [modal, setModal] = useState(false);

	return (
		<>
			<div
				onClick={() => setModal(true)}
				className={
					activeTheme === '#262626'
						? 'flex flex-col items-center rounded-lg bg-neutral-800 text-white shadow-md shadow-black transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg hover:shadow-neutral-700'
						: 'flex flex-col items-center rounded-lg bg-white shadow-md shadow-black transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg hover:shadow-neutral-700'
				}
			>
				<img src={image} alt="/" className="rounded-t-lg shadow-sm" />
				<div className="flex h-full w-full flex-col items-center justify-center">
					<p className="pop mx-auto w-11/12 py-2 text-center">{name}</p>
				</div>
			</div>
			<div
				id="MODAL"
				onClick={() => setModal(false)}
				className={
					modal
						? 'absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-neutral-900/50'
						: 'hidden'
				}
			>
				<div className="flex w-5/6 flex-row rounded-lg lg:w-2/3 2xl:max-w-[1050px]">
					<div id="album-modal-left" className="w-3/5">
						<img src={image} alt="/" className="rounded-l-lg  " />
					</div>
					<div
						id="album-modal-right"
						className={
							activeTheme === '#262626'
								? 'flex w-2/5 flex-col justify-between rounded-r-lg bg-neutral-800 p-[5%] text-white'
								: 'flex w-2/5 flex-col justify-between rounded-r-lg bg-white p-[5%]'
						}
					>
						<div>
							<h3 className="pop text-2xl ">{name}</h3>
							<p
								className={
									activeTheme === '#262626'
										? 'pop text-neutral-200'
										: 'pop text-neutral-800'
								}
							>
								{date}
							</p>
							<button className="pop mt-4 w-[90px] rounded bg-green-600 px-2 py-1 text-white shadow-sm shadow-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-neutral-700">
								<a
									target="_blank"
									rel="noreferrer"
									href={links === 'browser' ? browserLink : appLink}
									className="flex w-full items-center justify-between"
								>
									Open <img src={Logo} alt="Spotify logo" className="h-6" />
								</a>
							</button>
						</div>

						<div>
							<div className="flex flex-col">
								{React.Children.toArray(
									artists.map((artist) => (
										<p
											className={
												activeTheme === '#262626'
													? 'pop m-[1px] flex w-min whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white'
													: 'pop m-[1px] flex w-min whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-sm text-white'
											}
										>
											{artist.name}
										</p>
									))
								)}
							</div>
							<p
								className={
									activeTheme === '#262626'
										? 'pop bottom-0 mt-2 text-neutral-200'
										: 'pop bottom-0 mt-2 text-neutral-800'
								}
							>
								{tracks} tracks
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AlbumCard;