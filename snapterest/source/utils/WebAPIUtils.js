var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionsCreators');

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
};
