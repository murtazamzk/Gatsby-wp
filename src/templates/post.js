import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        // const post = this.props.data.wordpressPost
        console.log(this.props);

        return (
            <div>
                Hello Post
                {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
            </div>
        )
    }
}


export default PostTemplate