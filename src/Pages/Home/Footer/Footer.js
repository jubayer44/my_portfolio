import React from 'react';

const Footer = () => {
    return (
        <footer className="px-4 py-8  text-white">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
				<img src="https://www.agasof.com/favicon.ico" alt="" />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="/">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="/">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="https://www.linkedin.com/in/jubayerr44/">LinkedIn</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://www.facebook.com/jashamim">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://twitter.com/jubayerr44">Twitter</a>
			</li>
		</ul>
	</div>
    <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Jubayer. All rights reserved.</div>
</footer>
    );
};

export default Footer;