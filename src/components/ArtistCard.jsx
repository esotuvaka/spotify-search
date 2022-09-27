import React from 'react';
import Logo from '../assets/S-Logo.png';
import Genre from './Genre';

const ArtistCard = ({ props, genresNum, links, activeTheme }) => {
	return (
		<div id="artist-card" className="mx-auto w-4/5 pb-4 lg:w-2/3">
			<div
				className={
					activeTheme === '#262626'
						? 'flex flex-col justify-between rounded-lg bg-neutral-800 shadow-md shadow-black transition-all duration-300 sm:h-96 sm:flex-row xl:h-[30vh] 2xl:h-[50vh]'
						: 'flex flex-col justify-between rounded-lg bg-white shadow-md shadow-neutral-700 transition-all duration-300 sm:h-96 sm:flex-row xl:h-[30vh] 2xl:h-[50vh]'
				}
			>
				<div className="mx-[5%] my-[5%]">
					<h1
						id="artist-name"
						className={
							activeTheme === '#262626'
								? 'pop text-4xl text-white'
								: 'pop text-4xl text-black'
						}
					>
						{props.name}
					</h1>
					<p
						id="artist-followers"
						className={
							activeTheme === '#262626'
								? 'pop text-xl text-neutral-300'
								: 'pop text-xl text-neutral-800'
						}
					>
						{props.followers.total
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
						Followers
					</p>
					<div id="artist-links" className="mt-4 flex">
						<button className="pop w-[90px] rounded bg-green-600 px-2 py-1 text-white shadow-sm shadow-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-neutral-700">
							<a
								target="_blank"
								rel="noreferrer"
								href={
									links === 'browser' ? props.external_urls.spotify : props.uri
								}
								className="flex w-full items-center justify-between"
							>
								Open <img src={Logo} alt="Spotify logo" className="h-6" />
							</a>
						</button>
					</div>
					<div id="artist-genres" className="mt-4 flex w-full flex-col ">
						{React.Children.toArray(
							props.genres
								?.slice(0, genresNum)
								.map((genre) => (
									<>
										{genre && (
											<Genre genreTag={genre} activeTheme={activeTheme} />
										)}
									</>
								))
						)}
					</div>
				</div>
				<div id="artist-image" className>
					<img
						src={props.images[0].url}
						alt="/"
						className="w-full rounded-b-lg sm:h-96 sm:rounded-r-lg sm:rounded-bl-none xl:h-[30vh] 2xl:h-[50vh]"
					/>
				</div>
			</div>
		</div>
	);
};

export default ArtistCard;
