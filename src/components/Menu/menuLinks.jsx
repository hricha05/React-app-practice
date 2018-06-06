import React, {Components} from 'react';

export default class menuLinks extends Components {
    constructor(props) {
        super(props);
        // links are created as objects 
        this.state = {
            links: [{
                text:  'Authour',
                links: 'https://github.com/hricha05',
                // icon:  ''
            }, {
                text:   'Github',
                links:  'https://github.com/hricha05'
                // icon:    
            }, {
                text:   'Twitter',
                links:  'https://twitter.com/JusHR'
                // icon:
            }]
        }
    }

    render() {
        let links = this.state.links.map((links, i) => <li ref=(i + 1)>
                                                            <a href={ link.link } target="_blank">
                                                                { link.text }
                                                            </a>
                                                        </li>);

        return(
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    { links }
                </ul>
            </div>
        )
    }
    
}