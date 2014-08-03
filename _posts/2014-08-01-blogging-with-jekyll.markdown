---
title: Blogging With Jekyll
layout: post
date: 2014-08-01 19:16
category: tools
tags: [jekyll, blog]
---

![Jekyll Logo](http://jekyllrb.com/img/logo-2x.png)

## How did i get to Jekyll
Well it has been a long time coming. 
Every time i get stuck on something, help somebody or learn something new i tell myself that i need to get my blog going. 
In the past i have tried [wordpress](https://wordpress.com) but just never got it off the ground. 
Wordpress seemed great untill i realized that if i wanted to load a theme, that was not part of the default themes available in their store, i would have to have a paid account or host wordpress myself. 
Had a look at [blogger](https://www.blogger.com) and [ghost](https://ghost.org) looking for a elegant way to have my blog completely in my control and have the freedom to do what i needed.
Was just about to go with ghost and run it on an amazon instance when i was introduced to [jekyll](http://jekyllrb.com) as a blogging engine.
I have looked at Jekyll before, but mainly for hosting github pages.
Turns out its a pretty good blogging engine that works in github pages and with Mr-Poole creating drafts and publishing them is easy.

### Ok enough background, here's my summary:
* It has categories
* It has tags
* Multiple layouts
* Static site pages
* Hosting on github pages
* Runs locally
* Uses markdown

### Still to test:
* Searching
* Comments
* Listing posts by category
* Listing posts by tag
* Listing posts by date
* Filtering posts
* Custom Collections
* Data Files

Check it all out in their [documentation](http://jekyllrb.com/docs/home/).

### Blogs, Languages and Templates
* Wordpress (php)
* Ghost (node)
* Jekyll (ruby)

For a while i was of the opinion that the language the blog was written in was important. 
I was concerned that if there was something i really needed extra, in the markup to style a theme, that i might need to change the way the application generates its markup. 
Ghost and Jekyll both solve this problem by giving access to the templating engine, allowing for as much customization as needed.

### Moving a blog

I was also concerned that i would not be happy with my choice and that i would need to move my blog. 
This seemed like a lot of work.
When i realized that moving a blog is as simple as importing the feed, i could finally be content with my choice.
Event though Jekyll doesn't have an import option it would not be the end of the world to write some custom utility to do this.

### Deploying with github pages
* [Deploying Jekyll](http://jekyllrb.com/docs/github-pages)
* [Github pages](https://help.github.com/articles/user-organization-and-project-pages)
* [Custom Domain](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages) 
* [Create CNAME](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)

### Running local
Running jekyll locally seemed pretty easy but it didn't want to install with ruby 2.0.0, I had to upgrade my ruby to 2.1.0 . Turns out that using rvm is a better idea anyway.

* Intall RVM: `curl -L https://get.rvm.io | bash -s stable --autolibs=enabled`
* To use 2.1.0: `rvm install 2.1.0`
* To set the default: `rvm use 2.1.0 --default` 
* Install Jekyll: `gem install jekyll`
* Generate new blog: `jekyll new myblog`
* Run it local: `jekyll serve`
* Run with drafts published: `jekyll serve -D`
* Run with drafts and watch the source for changes: `jekyll serve -w -D`

[Quickstart Guide](http://jekyllrb.com/docs/quickstart)

### Using Markdown

Using markdown has been a learning curve but thankfully not that big of a one. 
I like that with markdown there are only a limited number of things you can do and that you end up with semantic markup.

* [Cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Title, Categories, Tags, Layouts and Dates

<pre>
 ---
 layout: post
 title: Title goes here
 date: 2014-07-31
 category: Single Category
 categories: [Multiple, Categories]
 tag: Single Tag
 tags: [Multiple, Tags]
 ---
</pre>

[Front Matter](http://jekyllrb.com/docs/frontmatter)

### Creating posts with Mr-Poole
In `_config.yml` set the default extention to markdown.
<pre>
poole:
  default_extension: "markdown"
</pre>
* Create a draft: `poole draft "My Post"`
* Publish a post with the current date: `poole publish _drafts/my_post.markdown`
* Use `-d` to keep the draft
* Unpublish a post removing date: `poole unpublish _posts/2014-08-01-my_post.markdown`
* Use `-p` to keep the post
* Use `-t` to keep the timestamp when publishing or unpublishing a post

Ran into one problem unpublishing a post. The date is removed but Jekyll throws an error for a missing time part. Using `-t` when unpublishing as a workaround.

Unpublish a post keeping date: `poole unpublish -t _posts/2014-08-01-my_post.markdown`

[Mr-Poole](https://github.com/mmcclimon/mr_poole)

