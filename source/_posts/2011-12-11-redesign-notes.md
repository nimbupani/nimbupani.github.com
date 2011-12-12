---
layout: post
title: "Redesign Notes"
date: 2011-12-11 04:51
comments: true
category: "Web Development"
---

This site sports a refresh. Here is a list of what is different now:

- Runs on [Octopress](http://octopress.org).
- Hosted on [Github](http://github.com).
- Anyone can submit updates for any post with a pull request.
- [Disqus](http://disqus.com) comments (with threading!)
- No more categories except [Web Development](/categories/web-development).
- Based on [HTML5Boilerplate](http://h5bp.com) (obviously).
- Keyboard navigation! Press left/right arrow for previous/next page.

### Why
I have been wanting to move to a static site for several months because there were several things that annoyed me about Drupal (or any other CMS systems):

- Lack of out of the box version control.
- Unnecessary security nightmare with MySQL.
- Loading of needless large resources just because the admin interfaces require it (`drupal.js` & `drupal.css` I am looking at you).
- No way to collaborate or have others edit my mistakes (other than in comments).
- Dependence on several modules which go out of date when a new version comes along.
- Ceaseless updating of modules and versions.
- PHP (white screen of death anyone)!?!
- Poor spam filtering.
- Painful backup of database and none for the layout and design. 
- `.htaccess` drama


It was not until [Ryan Seddon](http://thecssninja.com) pointed me to the documentation on [migrating from Drupal](https://github.com/mojombo/jekyll/wiki/blog-migrations) that this even became feasible. Sadly, the script does not generate categories for the exported markdown files. Fortunately, I used this opportunity to disband the idea of categories all-together and just manually edit whichever post fitted best into [Web Development](/categories/web-development/) as that typically has been what most visitors look for.

Later, [Rebecca Murphey](http://rmurphey.com) moved her site to Octopress which seemed to be a nice wrapper around Jekyll and the migration seemed much less work than before. The most tedious process in migrating content from 2003 onwards was the export of the blog posts from Drupal, and making the Disqus comments work. 

### Disqus
Disqus offers a path for Wordpress users though, but for Drupal you would need to provide an XML file to import from. The good news is the new [Disqus module does that exactly](http://drupal.org/node/1349010#comment-5275640) (you need to look under `Admin/Content Management/Comments` to find the export function). You can use any Disqus identifier, but the easiest method seems to be to use the unique url of each post. 

The bad news is that unique url that Disqus module uses is the original Drupal path (e.g. `node/1`) which is useful if you are sticking with Drupal, but useless if you are using another system. Luckily for me, it also includes the path alias of the original post in `disqus_url` field for each comment, so it would simply be a matter of finding value of `disqus_url` in each comment, and replace the value of Disqus identifier with it – which is easy to do by executing a regular expression search and replace on the XML file.

### Github Setup
Source files used to generate the site are stored in a branch called [source](https://github.com/nimbupani/nimbupani.github.com/blob/source/) and the generated files are required to be on the master branch. Octopress provides a [rake interface for you to setup your github pages](http://octopress.org/docs/deploying/github/) as you wish. 

You also need a CNAME record that has the domain name that will point to Github. If it is a top level domain, you need to also set up an A Record on your DNS, otherwise creating a CNAME record on your DNS should be sufficient. 

The most annoying thing is I cannot set the default branch for Pull Requests alone on Github (as they need to be made on the source branch), so for now you would have to change the branch of the remote to source manually for the pull request to go through. 

### Jekyll
If you are using Octopress, you most likely needn’t worry about fiddling with Jekyll other than setting variables in `_config.yaml` file. Any variables you declare there are available for you site-wide for use in your Jekyll templates. So, it was easy to [set a github url](https://github.com/nimbupani/nimbupani.github.com/blob/source/_config.yml#L45) to create the 'submit pull request' url you see below each post.   

Jekyll does not, by default, paginate the archives. But the same code used to render pagination on the default home page [can be used to do so](https://github.com/nimbupani/nimbupani.github.com/blob/source/source/archives/index.html). The Category archives page is rendered by an Octopress Jekyll plugin and is not paginated (I am sure it is possible, but slightly more tedious).  

Jekyll provides an XML feed at `atom.xml` and Octopress helpfully provides an XML feed with the categories plugin for your category listing. Octopress also makes it easy for you to set your feed urls to Feedburner. Just remember to point your Feedburner urls to these atom feeds!

### Liquid
[Liquid](https://github.com/Shopify/liquid) is the templating engine used by Jekyll. It looks pleasing and has a small set of manipulations you can do with it out of the box. I really like the simple filters that let you [manipulate values by simply piping them through filters](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) (there is a [lovely cheat sheet](http://cheat.markdunkley.com/) too). There is no way you can get the filename of the markdown file used to create a post within Jekyll, so I had to recreate it using Liquid filters: `"{{article_date | date: '%Y-%m-%d'}}-{{article_url | remove_first: '/', | replace_first: '.html','.md' }}"`.

It is not quite as clean as I thought it would be, to render the latest post on the homepage while reusing the same post template. Basically, each post renders in a page and hence the data is available as `page.url` or `page.date`. However, home page is itself a page which renders a list of posts (in this case just one), hence I had to set a variable `post` and make that point to the latest one (`site.posts.latest`). This meant, any of the variables need to be rendered irrespective of whether they are `post.url` or `page.url`, which meant [several `if/else` statements](https://github.com/nimbupani/nimbupani.github.com/blob/source/source/_includes/post_detail.html). I think this is better than replicating the same template twice, and having one go out of sync with the other.

### Design
Octopress offers a base layout/design which I found too complicated to work with. I ended up replacing most of the Sass files (have not indulged my whim on the architecture of the layout templates). I have an [`_extends.scss`](https://github.com/nimbupani/nimbupani.github.com/blob/source/sass/base/_extends.scss) to store all [my extend rules](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#extend), and a [`_vars.scss`](https://github.com/nimbupani/nimbupani.github.com/blob/source/sass/base/_vars.scss) to store variables. I had to override a few disqus styles, so they went into their own scss file (with dirty `!important` at the end of each declaration!)

I was happy with the architecture of the older design, which is why nothing has changed significantly. I did want the previous/next links to be located at a fixed location and provide very basic navigation on top. 

### Performance
Lack of PHP and MySQL has made this page render in about 1s compared to 2.6s previously. I also don't have frivolous resources loading which makes it better. 

### Complaints
I am overall very satisfied with Octopress, and am so glad [Brandon Mathis](http://imathis.com) created it. Only niggling complaint I have is that the rake deployment script takes _years_ to run. You could use `rake isolate[filename]` and subsequent `rake integrate` to make this faster. But I wish it were the case automatically. 

Creating a new post is easy, but finding it in the 100s of posts I have to write it is a pain. I suspect I could add a `mate <filename>` to the `rake new_post` script which would make that easier.  

### Future
This site is a work in progress. I have some outstanding [to-dos](https://github.com/nimbupani/nimbupani.github.com/issues/1) that I hope to get to soon. I do want to use this site to experiment with learning new languages/technologies, so anything you think would be an interesting idea to pursue, please [suggest](https://github.com/nimbupani/nimbupani.github.com/issues/new)!  




 

