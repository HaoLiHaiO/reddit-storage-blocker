function blockRecentSubredditStores() {
    localStorage.removeItem('recent-subreddit-stores');
    setTimeout(blockRecentSubredditStores, 100000);
  }
  
  blockRecentSubredditStores();
  