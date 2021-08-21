import { BasePage } from '../../components';
import ReactMarkdown from 'react-markdown';

const markdown = `
# The Bastion Wikipedia

A wikipedia-style site made by [Luke Przekwas](https://github.com/przekwas) specifically to help our awesome Dungeon Master catalogue the adventures of his homebrew world.  This is our one stop shop for all content related to our lore.  Send feedback, bugs, style issues, and anything else you'd like to see!

## Site Roadmap
- **Suggested by Patrick**
	- video embedding for resources
- events features
	- drop down for location match
- finishing dashboard
	- edit profile information e.g. reset password
	- list what you've added for quick edit access
- wiki bot features
	- pinging channel on new additions or updates
- image uploading capability
- markdown guide video

## Release Versions

#### v1.3.1 (current release)
- fixed typos on edit form titles

#### v1.3
- notes features added
- 404 error page customized (try http://the-bastion-wiki.herokuapp.com/1234 for an example)

#### v1.2
- events features added 

#### v1.1
- correct counts on your added content in admin dashboard

#### v1.0
- locations features added
- characters features added
- login and register features added
	- two factor authentication via discord "Wiki Bot" added
- admin dashboard partially added
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
