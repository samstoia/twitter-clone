import React from "react";
import SingleTweet from "./SingleTweet";


function FeedPostsContainer() {
  var feedPostsContainerStyles = {
    width: '100%',
  }
  

  return (
    <div style={feedPostsContainerStyles}>
      <SingleTweet
        image="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        title="Bob"
        postBody="Rabble rabble bla bla bla"
      />
      <SingleTweet
        image="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        title="Bob"
        postBody="Rabble rabble bla bla bla"
      />
      <SingleTweet
        image="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        title="Bob"
        postBody="Rabble rabble bla bla bla"
      />
      <SingleTweet
        image="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        title="Bob"
        postBody="Rabble rabble bla bla bla"
      />
    </div>
  )
}

export default FeedPostsContainer;