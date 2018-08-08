# Plays This

Hosted at [playsthis.com](http://playsthis.com).

I generate international Amazon links for products using a little Chrome Extension I wrote called [Amazing Linkalizer](http://amznlnk.com).

## Set-up related stuff

* http://jekyllrb.com/
* http://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/
* https://github.com/barryclark/jekyll-now

## Set up for local development (God help you)!

* On Windows:
  * http://jekyll-windows.juthilo.com/
* On Mac/Linux:
  * http://jekyllrb.com/docs/installation/

* Install Bundler (http://bundler.io/) - `gem install bundler`
* Install dependencies - `bundle install`
* Serve with `bundle exec jekyll serve`

### Extra helpful setup stuff

* https://help.github.com/articles/using-jekyll-with-pages/

### Tagging

The tagging system is appreciatively stolen from [MindDust](http://www.minddust.com/post/tags-and-categories-on-github-pages/). 

When adding a new tag:

* Add it to `_data/tags.yml`:

        - slug: drums
          name: Drums

* Add a new empty template `tag/drums.md` with the front matter:

        ---
        layout: tag-page
        tag: drums
        permalink: /tag/drums/
        ---

### Images

The repo contains a little node script to generate different sized images to be used in different places and at different screen sizes. When adding new images, do this:

* Add the original image to `images/` 
  * Follow the naming convention `<firstname><surnameInital><number>`, e.g. `timb1`. Where 1 is used as the lead image for thumbnails etc and other numbers are used throughout the post
* Make sure you've installed the node dependencies by running `npm install`
* Run `npm run resize`

In the post, add the name of the lead image (without extension) to the front matter, e.g. `image: timb1`.
There's an html partial for showing images that sorts out the sizing etc. To insert an image use:

    {% include articleImage.html image="timb1" alt="Tim Barclay" %}

In a few cases, for example if the original image is very small or very tall and thin, it's better to just use the original, in which case just use standard markdown image syntax.

### Case sensitive paths

Paths in Github pages are case sensitive and I, slightly short-sightedly, started off using title case for the paths of posts. This is bad as [any](http://wiredimpact.com/blog/never-use-capital-letters-urls/) [number](http://www.goinflow.com/redirect-uppercase-urls-to-lowercase/) [of](http://brianflove.com/2014/08/11/lowercase-your-uris/) [blogs](http://www.chrisabernethy.com/force-lower-case-urls-with-mod_rewrite/) are more than willing to shout about, so I decided to switch to using all lower case from mid January 2016 onwards.

Github pages [doesn't support](https://help.github.com/articles/redirects-on-github-pages/) server config files, like `.htaccess` so to handle the existing posts, I added [JekyllRedirectFrom](https://github.com/jekyll/jekyll-redirect-from) to redirect lower case paths to the existing mixed case paths. In some ways it might have been better to change the existing paths to lower case and add redirects from the old mixed case versions but then anyone following an existing link would see an ugly redirect page for a second and I'd rather minimise how much that happens. Not to mention it would be a hassle to rename them all.

### Related posts

A basic related posts script appreciatively stolen from [Andrea Fortuna](http://www.andreafortuna.org/programming/2016/02/10/jekyll-related-posts/).