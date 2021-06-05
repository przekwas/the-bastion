import { BasePage } from '../../components';
import ReactMarkdown from 'react-markdown';

const markdown = `
# The Bastion Wikipedia

A wikipedia-style site made by [Luke Przekwas](https://github.com/przekwas) specifically to help our awesome Dungeon Master catalogue the adventures of his homebrew world.  This is our one stop shop for all content related to our lore.  Send feedback, bugs, style issues, and anything else you'd like to see!

## Release Versions

#### v1.0 (current release)
- locations features added
- characters features added
- login and register features added
	- two factor authentication via discord "Wiki Bot" added
- admin dashboard partially added

&nbsp;

### Site Roadmap
- events features
- misc notes features
- finishing dashboard
	- correct counts on your added content
	- edit profile information e.g. reset password
	- list what you've added for quick edit access
- wiki bot features
	- pinging channel on new additions or updates
- image uploading capability
- markdown guide video
`;

function Home() {
	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<div className="w-full my-5">
					<ReactMarkdown
						className="prose-sm prose prose-blue lg:prose lg:prose-blue"
						children={markdown}
						linkTarget="_blank"
					/>
				</div>
			</div>
		</BasePage>
	);
}

export default Home;
