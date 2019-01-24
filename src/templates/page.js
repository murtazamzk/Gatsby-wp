import React, {Component} from "react"

class PageTemplate extends Component {
    render() {
        console.log(this.props);
        // const siteMetadata = this.props.data.site.siteMetadata
        // const currentPage = this.props.data.wordpressPage

        // console.log(currentPage)

        return (
            <div>
                Hello
                {/* <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                <p dangerouslySetInnerHTML={{__html: currentPage.slug}} /> */}
            </div>
        )
    }
}

export default PageTemplate