![General Assembly](../assets/images/ga.png)
# FEWD LESSON 3

## FEWD - Advanced CSS

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Review
  * Git made easy with Sublime  
  * Foundational HTML + CSS
  * Absolute and Relative links
* Box Model
* HTML Template
* Nested Selectors
* CSS Specificity
* Homework



## GIT made EASY with SUBLIME



### Getting latest course files from Instructors
<aside class="notes">Mart ~ 5 Minutes</aside>

1. Before each command, open up the Command Pall`ete
> `CMD + SHIFT + P'
1. Check if your working area is clean:
> `git diff all`
1. If everything is clean, great! If not, then
> `git stash changes`
1. Now to pull from our `ga-students` upstream repo
> `git custom command`

> `pull upstream gh-pages`



### Pushing the latest course files to your own origin GH repository
<aside class="notes">Mart ~ 5 Minutes</aside>

1. We now have the latest files from `ga-students`, but if you want your own (messy) changes back
> `git stash pop`
1. Now we want to push to our own `origin` repository
> `git push`

That should be all! Check GH to check whether it worked



### Staging your changes for commit
<aside class="notes">Mart ~ 5 Minutes</aside>
1. Check that there is nothing unexpected in the _staging area_
> git diff staging

1. If unwanted files are in staging you should open them in sublime and
> git unstage (current file)

1. Check that you are adding the correct code changes
> git diff all

1. If correct, then you need to _add your changed files to the staging area_
> git add [current file/all/add...]

You've now put those changes _on stage_. You'v put a spotlight on them for the 'commit` command to see them.You can continue to code and make changes, adding them as you go along, but usually you'll want to now commit those changes.Instructors



### Your staged changes are now ready to be commited, shared with the world
<aside class="notes">Mart ~ 5 Minutes</aside>
1.  As you instruct to sublime to commit to git ...
> git commit

1. ... a message prompt at the bottom asking for a short summary of the changes
> `<enter message>`

1. You've now made a commit, so feel free to push your changes and continue!
> git push

That should be all! Check GH to check whether it worked



### If sublime complains about authentication or such priviledge, try checking which protocol you are using and changing it to GIT if it is HTTPS
<aside class="noted"></aside>

1. Check your remote:
> git custom command

> remote show origin

1. If the result includes `https://` then enter the following command, replacing USERNAME with your own

> git custom command

> remote set-url origin git@github.com:USERNAME/FEWD_HK_3.git 

> remote set-url upstream git@github.com:ga-students/FEWD_HK_3.git 



## Foundational HTML + CSS
<aside class="notes">Mart ~ 5 Minutes</aside>

### Seperation of concerns.



## Absolute and Relative links
<aside class="notes">Kit ~ 5 Minutes</aside>

### [Lesson 2](ga-students.github.io/FEWD_HK_3/slides/?lesson=2)



## Box Model
<aside class="notes">
  Mart ~ 30 min
  I think it is better to talk about the box-model first so students could know what's margin and padding before moving to the HTML template.
  @FEWD_HK_3/lesson3/labs/box_model
  We may consider introducing a little bit of SEO here?
</aside>

### Every element in web design is a box
![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## Box Model
<aside class="notes"></aside>

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)



##Box Model

<aside class="notes"></aside>

**Width** = width + padding-left + padding-right + border-left + border-right

**Height** = height + padding-top + padding-bottom + border-top + border-bottom



## HTML Template
<aside class="notes">
  Kit ~ 20 min
  @FEWD_HK_3/lesson3/labs/template
  1. We may consider introducing a little bit of SEO here?
  2. The style.css contains box-model hack shall we skip it? just thinking it is not that useful.
  3. I think we can keep the clearfix and the rest in style.css.
</aside>

```
<!doctype html>
<html lang="en">
  <head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="author" content="<your name>">
    <meta name="keywords" content="<comma>, <separated>, <keywords>">
    <meta name="description" content="<A short description about this page>">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```



## Nested Selectors
<aside class="notes">Kit ~ 30 min</aside>

### Every element in web design is a box
![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## CSS Specificity
<aside class="notes">Kit ~ 30 min</aside>

[Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)



## Homework
<aside class="notes">Both</aside>

### How to get started with a project?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

**[Preview](https://github.com/tijptjik/FEWD_2.0.0/blob/master/Week_02_Layout/03_advanced_css/starter_code/Fashion_Blog.png)** : Fashion Blog