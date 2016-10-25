



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-96d3c90d9d94b08c8ad5ae6b8330d0ee8a8488a340e22ff175ad5f68d1e7829f.css" integrity="sha256-ltPJDZ2UsIyK1a5rgzDQ7oqEiKNA4i/xda1faNHngp8=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-c8f654ee1f564cf4c4c56e58d9efd1a43461d810d4658850715a799f82f52e17.css" integrity="sha256-yPZU7h9WTPTExW5Y2e/RpDRh2BDUZYhQcVp5n4L1Lhc=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>webcamjs/webcam.js at master · jhuckaby/webcamjs</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/700765?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jhuckaby/webcamjs" name="twitter:title" /><meta content="webcamjs - HTML5 Webcam Image Capture Library with Flash Fallback" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/700765?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jhuckaby/webcamjs" property="og:title" /><meta content="https://github.com/jhuckaby/webcamjs" property="og:url" /><meta content="webcamjs - HTML5 Webcam Image Capture Library with Flash Fallback" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MjMwMzMwNTg6NWNmNWY2ZjJmYzM2MjA5NWY2YjQ2NzQzMDViNmY3OWM6NWFjMDhmMTEyMjM3YjVlZmZmNDEzMzM3MjQxZjg4NTk3YTE0ODA4YmMwNzc0NjFiNzhhMmJmNDFkNjU5ZGMwMQ==--0b5a927b9ed077d0569c634256872f9fd9892a1c">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="783C21A2:0CD0:3B5F9E7:580ECD58" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="783C21A2:0CD0:3B5F9E7:580ECD58" name="octolytics-dimension-request_id" /><meta content="23033058" name="octolytics-actor-id" /><meta content="nfniraj" name="octolytics-actor-login" /><meta content="74c3f1da6362cd03f3c8b51c79164631b8ec2e39fa2c2cf4544430b64b82164b" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="nfniraj">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZDE0NzA0MDJlYmYzOTNiYmI5ZTA2ZWE4YTJiYjgyNzRiMDViNTAyYjI3MGU2YTE5MWMwZGM4MGQzMGEwNWQyOHx7InJlbW90ZV9hZGRyZXNzIjoiMTIwLjYwLjMzLjE2MiIsInJlcXVlc3RfaWQiOiI3ODNDMjFBMjowQ0QwOjNCNUY5RTc6NTgwRUNENTgiLCJ0aW1lc3RhbXAiOjE0NzczNjUwODksImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="de090545da7a6399a1e08acc303624a50b3c46ab">
    <meta content="0469bd8180e58b06dface36b7654ab42bc977fa0" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="019239e5d47b1ecac1cada319e2e79a9">
    

      
  <meta name="description" content="webcamjs - HTML5 Webcam Image Capture Library with Flash Fallback">
  <meta name="go-import" content="github.com/jhuckaby/webcamjs git https://github.com/jhuckaby/webcamjs.git">

  <meta content="700765" name="octolytics-dimension-user_id" /><meta content="jhuckaby" name="octolytics-dimension-user_login" /><meta content="17383170" name="octolytics-dimension-repository_id" /><meta content="jhuckaby/webcamjs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="17383170" name="octolytics-dimension-repository_network_root_id" /><meta content="jhuckaby/webcamjs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jhuckaby/webcamjs/commits/master.atom" rel="alternate" title="Recent Commits to webcamjs:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/jhuckaby/webcamjs/blob/master/webcam.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/search" class="js-site-search-form" data-scoped-search-url="/jhuckaby/webcamjs/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jhuckaby/webcamjs">This repository</span>
  </div>
    <a class="dropdown-item" href="/jhuckaby/webcamjs/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/nfniraj"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nfniraj" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/23033058?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">nfniraj</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/nfniraj" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/nfniraj?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CRcUHyVVTmnzMEowzk+DooKmjkk6j1b2Mo5XTxMLf/7jcxkEUEetveKi4N2vnr3/Kb/yaH25tYeTyiUrrr7LUQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EbSsBq/+xRiFknlyIkLfBNT4YlvTDu5zwDwiyPBDrI1iqrvQkQR441a/4J1mp8MOl/GRzzVl1G9fmfESzr52zg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="17383170" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jhuckaby/webcamjs/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/jhuckaby/webcamjs/watchers"
            aria-label="94 users are watching this repository">
            94
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/unstar" class="starred" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kV0N323v2ZBOs6zunj50ypniv+rBWWQ+7yhwFe7nuj9gDuerqhffsQT/28+xqQoAaIEXYRvqbEwOSRs2FXZyJQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jhuckaby/webcamjs"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jhuckaby/webcamjs/stargazers"
           aria-label="1100 users starred this repository">
          1,100
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/star" class="unstarred" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FUyWdBEjlyaAwnXttLnXCNmLtff/iFlIcXi9+8hju6ugkO8rHo4KQiELJw1CNSYGJ4+YaltlYKYPX7bY+pphhg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jhuckaby/webcamjs"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jhuckaby/webcamjs/stargazers"
           aria-label="1100 users starred this repository">
          1,100
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/fork" class="btn-with-count" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IV+/OrjiYgyXgipRqOnoVNqBmPCOh3nBfmA+/mvzmZZu9Sg/+h4HYgiN6lwt/nokA60rV4Iv9j3xhq0iay2RpA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of jhuckaby/webcamjs to your account"
                aria-label="Fork your own copy of jhuckaby/webcamjs to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/jhuckaby/webcamjs/network" class="social-count"
       aria-label="306 users are forked this repository">
      306
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/jhuckaby" class="url fn" rel="author">jhuckaby</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jhuckaby/webcamjs" data-pjax="#js-repo-pjax-container">webcamjs</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jhuckaby/webcamjs" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jhuckaby/webcamjs" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jhuckaby/webcamjs/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jhuckaby/webcamjs/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">63</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jhuckaby/webcamjs/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jhuckaby/webcamjs/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">9</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/jhuckaby/webcamjs/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jhuckaby/webcamjs/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/jhuckaby/webcamjs/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jhuckaby/webcamjs/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/jhuckaby/webcamjs/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jhuckaby/webcamjs/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/jhuckaby/webcamjs/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jhuckaby/webcamjs/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/jhuckaby/webcamjs/blob/70c20e8d6467e4b54d382b1bb666b7e6152e8f3c/webcam.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:97a0528a879e1b3023ce561dddf02dac -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jhuckaby/webcamjs/blob/master/webcam.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.16/webcam.js"
              data-name="v1.0.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.16">
                v1.0.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.15/webcam.js"
              data-name="v1.0.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.15">
                v1.0.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.14/webcam.js"
              data-name="v1.0.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.14">
                v1.0.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.13/webcam.js"
              data-name="v1.0.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.13">
                v1.0.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.12/webcam.js"
              data-name="v1.0.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.12">
                v1.0.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.11/webcam.js"
              data-name="v1.0.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.11">
                v1.0.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.10/webcam.js"
              data-name="v1.0.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.10">
                v1.0.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.9/webcam.js"
              data-name="v1.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.9">
                v1.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.8/webcam.js"
              data-name="v1.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.8">
                v1.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.7/webcam.js"
              data-name="v1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.7">
                v1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.6/webcam.js"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.5/webcam.js"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.4/webcam.js"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhuckaby/webcamjs/tree/v1.0.3/webcam.js"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/jhuckaby/webcamjs/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jhuckaby/webcamjs"><span>webcamjs</span></a></span></span><span class="separator">/</span><strong class="final-path">webcam.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/jhuckaby/webcamjs/commit/70c20e8d6467e4b54d382b1bb666b7e6152e8f3c" data-pjax>
          70c20e8
        </a>
        <relative-time datetime="2016-09-22T18:40:41Z">Sep 22, 2016</relative-time>
      </span>
      <div>
        <img alt="@jhuckaby" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/700765?v=3&amp;s=40" width="20" />
        <a href="/jhuckaby" class="user-mention" rel="author">jhuckaby</a>
          <a href="/jhuckaby/webcamjs/commit/70c20e8d6467e4b54d382b1bb666b7e6152e8f3c" class="message" data-pjax="true" title="Version 1.0.16
Added check to make sure the Flash Movie supports &quot;_releaseCamera&quot; before calling it.
Received reports that this function is not available or not working on IE 11 on Windows 10.">Version 1.0.16</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>10</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jhuckaby" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=jhuckaby"><img alt="@jhuckaby" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/700765?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="osdiab" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=osdiab"><img alt="@osdiab" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1890926?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="luopio" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=luopio"><img alt="@luopio" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/69383?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="linagee" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=linagee"><img alt="@linagee" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/636551?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="manuelodelain" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=manuelodelain"><img alt="@manuelodelain" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4610549?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="njam3" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=njam3"><img alt="@njam3" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2320152?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="scurker" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=scurker"><img alt="@scurker" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1062039?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davepower" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=davepower"><img alt="@davepower" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5864673?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="CezaryDanielNowak" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=CezaryDanielNowak"><img alt="@CezaryDanielNowak" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/621293?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="twentyrogersc" href="/jhuckaby/webcamjs/commits/master/webcam.js?author=twentyrogersc"><img alt="@twentyrogersc" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/392481?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jhuckaby" height="24" src="https://avatars0.githubusercontent.com/u/700765?v=3&amp;s=48" width="24" />
            <a href="/jhuckaby">jhuckaby</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@osdiab" height="24" src="https://avatars0.githubusercontent.com/u/1890926?v=3&amp;s=48" width="24" />
            <a href="/osdiab">osdiab</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@luopio" height="24" src="https://avatars0.githubusercontent.com/u/69383?v=3&amp;s=48" width="24" />
            <a href="/luopio">luopio</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@linagee" height="24" src="https://avatars2.githubusercontent.com/u/636551?v=3&amp;s=48" width="24" />
            <a href="/linagee">linagee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@manuelodelain" height="24" src="https://avatars2.githubusercontent.com/u/4610549?v=3&amp;s=48" width="24" />
            <a href="/manuelodelain">manuelodelain</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@njam3" height="24" src="https://avatars2.githubusercontent.com/u/2320152?v=3&amp;s=48" width="24" />
            <a href="/njam3">njam3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@scurker" height="24" src="https://avatars2.githubusercontent.com/u/1062039?v=3&amp;s=48" width="24" />
            <a href="/scurker">scurker</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davepower" height="24" src="https://avatars0.githubusercontent.com/u/5864673?v=3&amp;s=48" width="24" />
            <a href="/davepower">davepower</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@CezaryDanielNowak" height="24" src="https://avatars1.githubusercontent.com/u/621293?v=3&amp;s=48" width="24" />
            <a href="/CezaryDanielNowak">CezaryDanielNowak</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@twentyrogersc" height="24" src="https://avatars0.githubusercontent.com/u/392481?v=3&amp;s=48" width="24" />
            <a href="/twentyrogersc">twentyrogersc</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/jhuckaby/webcamjs/raw/master/webcam.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/jhuckaby/webcamjs/blame/master/webcam.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/jhuckaby/webcamjs/commits/master/webcam.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/edit/master/webcam.js" class="inline-form js-update-url-with-hash" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="C0BVt+L1Wfc1c8krfBfdLTUVdfhVdvbAYe/iNUU46MpiH87epBTm1j0Q65LyG/dx8PFavjySDSQBDLwpEO/S9A==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhuckaby/webcamjs/delete/master/webcam.js" class="inline-form" data-form-nonce="0469bd8180e58b06dface36b7654ab42bc977fa0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ghDC9mlCLLPTkAEJMahJsmOr8DhnPd0wchlT0+8ZzJ8/VY6lu+s9+pkKLRNQShJzxyPHGIb9208pMe3cUF5G0Q==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      787 lines (671 sloc)
      <span class="file-info-divider"></span>
    26.2 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// WebcamJS v1.0.16</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Webcam library for capturing JPEG/PNG images in JavaScript</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Attempts getUserMedia, falls back to Flash</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Author: Joseph Huckaby: http://github.com/jhuckaby</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Based on JPEGCam: http://code.google.com/p/jpegcam/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Copyright (c) 2012 - 2016 Joseph Huckaby</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Licensed under the MIT License</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> _userMedia;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// declare error types</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// inheritance pattern here:</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// https://stackoverflow.com/questions/783818/how-do-i-create-a-custom-error-in-javascript</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">FlashError</span>() {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> temp <span class="pl-k">=</span> <span class="pl-c1">Error</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, <span class="pl-v">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">temp</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>FlashError<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">	<span class="pl-v">this</span>.<span class="pl-smi">stack</span> <span class="pl-k">=</span> <span class="pl-smi">temp</span>.<span class="pl-smi">stack</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">	<span class="pl-v">this</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-smi">temp</span>.<span class="pl-smi">message</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">WebcamError</span>() {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> temp <span class="pl-k">=</span> <span class="pl-c1">Error</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, <span class="pl-v">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">temp</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>WebcamError<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	<span class="pl-v">this</span>.<span class="pl-smi">stack</span> <span class="pl-k">=</span> <span class="pl-smi">temp</span>.<span class="pl-smi">stack</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class="pl-v">this</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-smi">temp</span>.<span class="pl-smi">message</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-en">IntermediateInheritor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {};</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">IntermediateInheritor</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-c1">Error</span>.<span class="pl-c1">prototype</span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">FlashError</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">IntermediateInheritor</span>();</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">WebcamError</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">IntermediateInheritor</span>();</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> Webcam <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	version<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.0.16<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// globals</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">	protocol<span class="pl-k">:</span> <span class="pl-smi">location</span>.<span class="pl-c1">protocol</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>https<span class="pl-pds">/</span>i</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">	loaded<span class="pl-k">:</span> <span class="pl-c1">false</span>,   <span class="pl-c">// true when webcam movie finishes loading</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	live<span class="pl-k">:</span> <span class="pl-c1">false</span>,     <span class="pl-c">// true when webcam is initialized and ready to snap</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">	userMedia<span class="pl-k">:</span> <span class="pl-c1">true</span>, <span class="pl-c">// true when getUserMedia is supported natively</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	params<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">		width<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">		height<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">		dest_width<span class="pl-k">:</span> <span class="pl-c1">0</span>,         <span class="pl-c">// size of captured image</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		dest_height<span class="pl-k">:</span> <span class="pl-c1">0</span>,        <span class="pl-c">// these default to width/height</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		image_format<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>jpeg<span class="pl-pds">&#39;</span></span>,  <span class="pl-c">// image format (may be jpeg or png)</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		jpeg_quality<span class="pl-k">:</span> <span class="pl-c1">90</span>,      <span class="pl-c">// jpeg image quality from 0 (worst) to 100 (best)</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">		enable_flash<span class="pl-k">:</span> <span class="pl-c1">true</span>,    <span class="pl-c">// enable flash fallback,</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">		force_flash<span class="pl-k">:</span> <span class="pl-c1">false</span>,    <span class="pl-c">// force flash mode,</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">		flip_horiz<span class="pl-k">:</span> <span class="pl-c1">false</span>,     <span class="pl-c">// flip image horiz (mirror mode)</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		fps<span class="pl-k">:</span> <span class="pl-c1">30</span>,               <span class="pl-c">// camera frames per second</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">		upload_name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>webcam<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// name of file in upload post data</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		constraints<span class="pl-k">:</span> <span class="pl-c1">null</span>,     <span class="pl-c">// custom user media constraints,</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">		swfURL<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,            <span class="pl-c">// URI to webcam.swf movie (defaults to the js location)</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">		flashNotDetectedText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		noInterfaceFoundText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>No supported webcam interface found.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">		unfreeze_snap<span class="pl-k">:</span> <span class="pl-c1">true</span>    <span class="pl-c">// Whether to unfreeze the camera after snap (defaults to true)</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">	errors<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">		FlashError<span class="pl-k">:</span> FlashError,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		WebcamError<span class="pl-k">:</span> WebcamError</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">	hooks<span class="pl-k">:</span> {}, <span class="pl-c">// callback hook functions</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">init</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// initialize, check for getUserMedia support</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Setup getUserMedia, with polyfill for older browsers</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Adapted from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">mediaDevices</span> <span class="pl-k">=</span> (<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-smi">getUserMedia</span>) <span class="pl-k">?</span> </td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span> <span class="pl-k">:</span> ((<span class="pl-c1">navigator</span>.<span class="pl-smi">mozGetUserMedia</span> <span class="pl-k">||</span> <span class="pl-c1">navigator</span>.<span class="pl-smi">webkitGetUserMedia</span>) <span class="pl-k">?</span> {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">getUserMedia</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Promise</span>(<span class="pl-k">function</span>(<span class="pl-smi">y</span>, <span class="pl-smi">n</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">						(<span class="pl-c1">navigator</span>.<span class="pl-smi">mozGetUserMedia</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">navigator</span>.<span class="pl-smi">webkitGetUserMedia</span>).<span class="pl-c1">call</span>(<span class="pl-c1">navigator</span>, c, y, n);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">:</span> <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">window</span>.<span class="pl-c1">URL</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">URL</span> <span class="pl-k">||</span> <span class="pl-c1">window</span>.<span class="pl-smi">webkitURL</span> <span class="pl-k">||</span> <span class="pl-c1">window</span>.<span class="pl-smi">mozURL</span> <span class="pl-k">||</span> <span class="pl-c1">window</span>.<span class="pl-smi">msURL</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!!</span><span class="pl-v">this</span>.<span class="pl-smi">mediaDevices</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!!</span><span class="pl-c1">window</span>.<span class="pl-c1">URL</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Older versions of firefox (&lt; 21) apparently claim support but user media does not actually work</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Firefox<span class="pl-c1">\D</span><span class="pl-k">+</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">parseInt</span>(<span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>, <span class="pl-c1">10</span>) <span class="pl-k">&lt;</span> <span class="pl-c1">21</span>) <span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Make sure media stream is closed when navigating away from page</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">window</span>.<span class="pl-c1">addEventListener</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>beforeunload<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">self</span>.<span class="pl-c1">reset</span>();</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">			} );</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">attach</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// create webcam preview and attach to DOM element</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// pass in actual DOM reference, ID, or CSS selector</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span>(elem) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			elem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(elem) <span class="pl-k">||</span> <span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(elem);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>elem) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">WebcamError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Could not locate DOM element to attach to.<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">container</span> <span class="pl-k">=</span> elem;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">elem</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; <span class="pl-c">// start with empty element</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// insert &quot;peg&quot; so we can insert our preview canvas adjacent to it later on</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> peg <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">elem</span>.<span class="pl-c1">appendChild</span>( peg );</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">peg</span> <span class="pl-k">=</span> peg;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// set width/height if not already set</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span>) <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-smi">offsetWidth</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span>) <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-smi">offsetHeight</span>;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// make sure we have a nonzero width and height at this point</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span>) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">WebcamError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No width and/or height for webcam.  Please call set() first, or attach to a visible element.<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// set defaults for dest_width / dest_height if not set</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>) <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>) <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">=</span> _userMedia <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">:</span> _userMedia;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// if force_flash is set, disable userMedia</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">force_flash</span>) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			_userMedia <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">userMedia</span>;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// check for default fps</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">fps</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>) <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">fps</span> <span class="pl-k">=</span> <span class="pl-c1">30</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// adjust scale if dest_width or dest_height is different</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> scaleX <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> scaleY <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// setup webcam video container</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> video <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>video<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">video</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>autoplay<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>autoplay<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ((scaleX <span class="pl-k">!=</span> <span class="pl-c1">1.0</span>) <span class="pl-k">||</span> (scaleY <span class="pl-k">!=</span> <span class="pl-c1">1.0</span>)) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-smi">overflow</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">webkitTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">mozTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">msTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">oTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">webkitTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">mozTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">msTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">oTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add video element to dom</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">appendChild</span>( video );</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">video</span> <span class="pl-k">=</span> video;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// ask user for access to their camera</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">getUserMedia</span>({</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&quot;</span>audio<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&quot;</span>video<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">constraints</span> <span class="pl-k">||</span> {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">					mandatory<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">						minWidth<span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>,</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">						minHeight<span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">then</span>( <span class="pl-k">function</span>(<span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// got access, attach stream to video</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-en">onloadedmetadata</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-smi">stream</span> <span class="pl-k">=</span> stream;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-smi">loaded</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-smi">live</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>live<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-en">flip</span>();</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">video</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">URL</span>.<span class="pl-en">createObjectURL</span>( stream ) <span class="pl-k">||</span> stream;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">catch</span>( <span class="pl-k">function</span>(<span class="pl-smi">err</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// JH 2016-07-31 Instead of dispatching error, now falling back to Flash if userMedia fails (thx @john2014)</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// JH 2016-08-07 But only if flash is actually installed -- if not, dispatch error here and now.</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">params</span>.<span class="pl-smi">enable_flash</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">self</span>.<span class="pl-en">detectFlash</span>()) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">setTimeout</span>( <span class="pl-k">function</span>() { <span class="pl-smi">self</span>.<span class="pl-smi">params</span>.<span class="pl-smi">force_flash</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>; <span class="pl-smi">self</span>.<span class="pl-en">attach</span>(elem); }, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">self</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, err);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">enable_flash</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-en">detectFlash</span>()) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// flash fallback</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">window</span>.<span class="pl-smi">Webcam</span> <span class="pl-k">=</span> Webcam; <span class="pl-c">// needed for flash-to-js interface</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">div</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">getSWFHTML</span>();</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">appendChild</span>( div );</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">WebcamError</span>( <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">noInterfaceFoundText</span> ));</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// setup final crop for live preview</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span>) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> scaled_crop_width <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span> <span class="pl-k">*</span> scaleX );</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> scaled_crop_height <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span> <span class="pl-k">*</span> scaleY );</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> scaled_crop_width <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> scaled_crop_height <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-smi">overflow</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-smi">scrollLeft</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) <span class="pl-k">-</span> (scaled_crop_width <span class="pl-k">/</span> <span class="pl-c1">2</span>) );</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-smi">scrollTop</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) <span class="pl-k">-</span> (scaled_crop_height <span class="pl-k">/</span> <span class="pl-c1">2</span>) );</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// no crop, set size to desired</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">elem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">reset</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// shutdown camera, reset to potentially attach again</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">preview_active</span>) <span class="pl-v">this</span>.<span class="pl-en">unfreeze</span>();</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// attempt to fix issue #64</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">unflip</span>();</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">stream</span>.<span class="pl-smi">getVideoTracks</span>) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// get video track to call stop on it</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> tracks <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">stream</span>.<span class="pl-en">getVideoTracks</span>();</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (tracks <span class="pl-k">&amp;&amp;</span> tracks[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> tracks[<span class="pl-c1">0</span>].<span class="pl-smi">stop</span>) tracks[<span class="pl-c1">0</span>].<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">stream</span>.<span class="pl-smi">stop</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// deprecated, may be removed in future</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">					<span class="pl-v">this</span>.<span class="pl-smi">stream</span>.<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">stream</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">video</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span> <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// call for turn off camera in flash</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> movie <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">getMovie</span>();</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (movie <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">movie</span>.<span class="pl-smi">_releaseCamera</span>) <span class="pl-smi">movie</span>.<span class="pl-en">_releaseCamera</span>();</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">container</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">container</span>;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">loaded</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">live</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// set one or more params</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// variable argument list: 1 param = hash, 2 params = key, value</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">params</span>[key] <span class="pl-k">=</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>][key];</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">params</span>[ <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>] ] <span class="pl-k">=</span> <span class="pl-v">arguments</span>[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">on</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// set callback hook</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">		name <span class="pl-k">=</span> <span class="pl-smi">name</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-pds">/</span>i</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name]) <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name].<span class="pl-c1">push</span>( callback );</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">off</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// remove callback hook</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">		name <span class="pl-k">=</span> <span class="pl-smi">name</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-pds">/</span>i</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name]) {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (callback) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// remove one selected callback from list</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> idx <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name].<span class="pl-c1">indexOf</span>(callback);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (idx <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name].<span class="pl-c1">splice</span>(idx, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// no callback specified, so clear all</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">dispatch</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// fire hook callback, passing optional value to it</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-pds">/</span>i</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-v">arguments</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name] <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name].<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> idx <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name].<span class="pl-c1">length</span>; idx <span class="pl-k">&lt;</span> len; idx<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> hook <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">hooks</span>[name][idx];</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">typeof</span>(hook) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// callback is function reference, call directly</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">hook</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span> ((<span class="pl-k">typeof</span>(hook) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">hook</span>.<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">2</span>)) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// callback is PHP-style object instance method</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">					hook[<span class="pl-c1">0</span>][hook[<span class="pl-c1">1</span>]].<span class="pl-c1">apply</span>(hook[<span class="pl-c1">0</span>], args);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">window</span>[hook]) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// callback is global function name</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">window</span>[ hook ].<span class="pl-c1">apply</span>(<span class="pl-c1">window</span>, args);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">			} <span class="pl-c">// loop</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> <span class="pl-k">if</span> (name <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ((args[<span class="pl-c1">0</span>] <span class="pl-k">instanceof</span> FlashError) <span class="pl-k">||</span> (args[<span class="pl-c1">0</span>] <span class="pl-k">instanceof</span> WebcamError)) {</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">				message <span class="pl-k">=</span> args[<span class="pl-c1">0</span>].<span class="pl-smi">message</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">				message <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Could not access webcam: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> args[<span class="pl-c1">0</span>].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> </td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">					args[<span class="pl-c1">0</span>].<span class="pl-smi">message</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> args[<span class="pl-c1">0</span>].<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// default error handler if no custom one specified</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Webcam.js Error: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> message);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c">// no hook defined</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">setSWFLocation</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// for backward compatibility.</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>swfURL<span class="pl-pds">&#39;</span></span>, value);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">detectFlash</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// return true if browser supports flash, false otherwise</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Code snippet borrowed from: https://github.com/swfobject/swfobject</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-c1">SHOCKWAVE_FLASH</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Shockwave Flash<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">SHOCKWAVE_FLASH_AX</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ShockwaveFlash.ShockwaveFlash<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">        	<span class="pl-c1">FLASH_MIME_TYPE</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/x-shockwave-flash<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">        	win <span class="pl-k">=</span> <span class="pl-c1">window</span>,</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        	nav <span class="pl-k">=</span> <span class="pl-c1">navigator</span>,</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">        	hasFlash <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">nav</span>.<span class="pl-c1">plugins</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">nav</span>.<span class="pl-c1">plugins</span>[<span class="pl-c1">SHOCKWAVE_FLASH</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">var</span> desc <span class="pl-k">=</span> <span class="pl-smi">nav</span>.<span class="pl-c1">plugins</span>[<span class="pl-c1">SHOCKWAVE_FLASH</span>].<span class="pl-c1">description</span>;</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">if</span> (desc <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> <span class="pl-smi">nav</span>.<span class="pl-c1">mimeTypes</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">nav</span>.<span class="pl-c1">mimeTypes</span>[<span class="pl-c1">FLASH_MIME_TYPE</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">nav</span>.<span class="pl-c1">mimeTypes</span>[<span class="pl-c1">FLASH_MIME_TYPE</span>].<span class="pl-c1">enabledPlugin</span>)) {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        		hasFlash <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        	}</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">win</span>.<span class="pl-smi">ActiveXObject</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">        		<span class="pl-k">var</span> ax <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-c1">SHOCKWAVE_FLASH_AX</span>);</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        		<span class="pl-k">if</span> (ax) {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        			<span class="pl-k">var</span> ver <span class="pl-k">=</span> <span class="pl-smi">ax</span>.<span class="pl-en">GetVariable</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>$version<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        			<span class="pl-k">if</span> (ver) hasFlash <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">        		}</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        	}</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">catch</span> (e) {;}</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> hasFlash;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">getSWFHTML</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Return HTML for embedding flash based webcam capture movie		</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			swfURL <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">swfURL</span>;</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// make sure we aren&#39;t running locally (flash doesn&#39;t work)</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">location</span>.<span class="pl-c1">protocol</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>file<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">FlashError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Flash does not work from local disk.  Please run from a web server.<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h3 style=&quot;color:red&quot;&gt;ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.&lt;/h3&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// make sure we have flash</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-en">detectFlash</span>()) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">FlashError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again.<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h3 style=&quot;color:red&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">flashNotDetectedText</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h3&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// set default swfURL if not explicitly set</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>swfURL) {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// find our script tag, and use that base URL</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> base_url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> scpts <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> idx <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">scpts</span>.<span class="pl-c1">length</span>; idx <span class="pl-k">&lt;</span> len; idx<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> src <span class="pl-k">=</span> scpts[idx].<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (src <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">src</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span>webcam(<span class="pl-cce">\.</span>min)<span class="pl-k">?</span><span class="pl-cce">\.</span>js<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">					base_url <span class="pl-k">=</span> <span class="pl-smi">src</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span>webcam(<span class="pl-cce">\.</span>min)<span class="pl-k">?</span><span class="pl-cce">\.</span>js<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">					idx <span class="pl-k">=</span> len;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (base_url) swfURL <span class="pl-k">=</span> base_url <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/webcam.swf<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> swfURL <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>webcam.swf<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// if this is the user&#39;s first visit, set flashvar so flash privacy settings panel is shown first</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">localStorage</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">localStorage</span>.<span class="pl-c1">getItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>visited<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">new_user</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">localStorage</span>.<span class="pl-c1">setItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>visited<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// construct flashvars string</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> flashvars <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (flashvars) flashvars <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">			flashvars <span class="pl-k">+=</span> key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">escape</span>(<span class="pl-v">this</span>.<span class="pl-smi">params</span>[key]);</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// construct object/embed tag</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">		html += &#39;&lt;object classid=&quot;clsid:d27cdb6e-ae6d-11cf-96b8-444553540000&quot; type=&quot;application/x-shockwave-flash&quot; codebase=&quot;&#39;+this.protocol+&#39;://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0&quot; width=&quot;&#39;+this.params.width+&#39;&quot; height=&quot;&#39;+this.params.height+&#39;&quot; id=&quot;webcam_movie_obj&quot; align=&quot;middle&quot;&gt;&lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;&lt;param name=&quot;allowScriptAccess&quot; value=&quot;always&quot; /&gt;&lt;param name=&quot;allowFullScreen&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;movie&quot; value=&quot;&#39;+swfURL+&#39;&quot; /&gt;&lt;param name=&quot;loop&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;menu&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;quality&quot; value=&quot;best&quot; /&gt;&lt;param name=&quot;bgcolor&quot; value=&quot;#ffffff&quot; /&gt;&lt;param name=&quot;flashvars&quot; value=&quot;&#39;+flashvars+&#39;&quot;/&gt;&lt;embed id=&quot;webcam_movie_embed&quot; src=&quot;&#39;+swfURL+&#39;&quot; wmode=&quot;opaque&quot; loop=&quot;false&quot; menu=&quot;false&quot; quality=&quot;best&quot; bgcolor=&quot;#ffffff&quot; width=&quot;&#39;+this.params.width+&#39;&quot; height=&quot;&#39;+this.params.height+&#39;&quot; name=&quot;webcam_movie_embed&quot; align=&quot;middle&quot; allowScriptAccess=&quot;always&quot; allowFullScreen=&quot;false&quot; type=&quot;application/x-shockwave-flash&quot; pluginspage=&quot;http://www.macromedia.com/go/getflashplayer&quot; flashvars=&quot;&#39;+flashvars+&#39;&quot;&gt;&lt;/embed&gt;&lt;/object&gt;&#39;;</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> html;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">getMovie</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// get reference to movie object/embed in DOM</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">loaded</span>) <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">FlashError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Flash Movie is not loaded yet<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> movie <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>webcam_movie_obj<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>movie <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">movie</span>.<span class="pl-smi">_snap</span>) movie <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>webcam_movie_embed<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>movie) <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">FlashError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cannot locate Flash movie in DOM<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> movie;</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">freeze</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// show preview, freeze camera</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> params <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>;</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// kill preview if already active</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">preview_active</span>) <span class="pl-v">this</span>.<span class="pl-en">unfreeze</span>();</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// determine scale factor</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> scaleX <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>;</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> scaleY <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// must unflip container as preview canvas will be pre-flipped</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">unflip</span>();</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// calc final size of image</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> final_width <span class="pl-k">=</span> <span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span> <span class="pl-k">||</span> <span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>;</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> final_height <span class="pl-k">=</span> <span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span> <span class="pl-k">||</span> <span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// create canvas for holding preview</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> preview_canvas <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> final_width;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> final_height;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> preview_context <span class="pl-k">=</span> <span class="pl-smi">preview_canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// save for later use</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">preview_canvas</span> <span class="pl-k">=</span> preview_canvas;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-smi">preview_context</span> <span class="pl-k">=</span> preview_context;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// scale for preview size</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ((scaleX <span class="pl-k">!=</span> <span class="pl-c1">1.0</span>) <span class="pl-k">||</span> (scaleY <span class="pl-k">!=</span> <span class="pl-c1">1.0</span>)) {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">webkitTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">mozTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">msTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">oTransformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transformOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px 0px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">webkitTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">mozTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">msTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">oTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">transform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleX<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>) scaleY(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>scaleY<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// take snapshot, but fire our own callback</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">snap</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add preview image to dom, adjust for crop</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-smi">position</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>relative<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">self</span>.<span class="pl-smi">container</span>.<span class="pl-smi">scrollLeft</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">preview_canvas</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">self</span>.<span class="pl-smi">container</span>.<span class="pl-smi">scrollTop</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-smi">container</span>.<span class="pl-c1">insertBefore</span>( preview_canvas, <span class="pl-smi">self</span>.<span class="pl-smi">peg</span> );</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-smi">container</span>.<span class="pl-c1">style</span>.<span class="pl-smi">overflow</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// set flag for user capture (use preview)</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-smi">preview_active</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">		}, preview_canvas );</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">unfreeze</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// cancel preview and resume live video feed</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">preview_active</span>) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove preview canvas</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">container</span>.<span class="pl-c1">removeChild</span>( <span class="pl-v">this</span>.<span class="pl-smi">preview_canvas</span> );</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">preview_context</span>;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-v">this</span>.<span class="pl-smi">preview_canvas</span>;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// unflag</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">preview_active</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// re-flip if we unflipped before</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">flip</span>();</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">flip</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// flip container horiz (mirror mode) if desired</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">flip_horiz</span>) {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sty <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">container</span>.<span class="pl-c1">style</span>;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">webkitTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(-1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">mozTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(-1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">msTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(-1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">oTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(-1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">transform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(-1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">filter</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>FlipH<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">msFilter</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>FlipH<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">unflip</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// unflip container horiz (mirror mode) if desired</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">flip_horiz</span>) {</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sty <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">container</span>.<span class="pl-c1">style</span>;</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">webkitTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">mozTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">msTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">oTransform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">transform</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scaleX(1)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">filter</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">sty</span>.<span class="pl-smi">msFilter</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">savePreview</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">user_callback</span>, <span class="pl-smi">user_canvas</span>) {</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// save preview freeze and fire user callback</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> params <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> canvas <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">preview_canvas</span>;</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> context <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">preview_context</span>;</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// render to user canvas if desired</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (user_canvas) {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> user_context <span class="pl-k">=</span> <span class="pl-smi">user_canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">user_context</span>.<span class="pl-en">drawImage</span>( canvas, <span class="pl-c1">0</span>, <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// fire user callback if desired</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">user_callback</span>(</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">			user_canvas <span class="pl-k">?</span> <span class="pl-c1">null</span> <span class="pl-k">:</span> <span class="pl-smi">canvas</span>.<span class="pl-c1">toDataURL</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>image/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">params</span>.<span class="pl-smi">image_format</span>, <span class="pl-smi">params</span>.<span class="pl-smi">jpeg_quality</span> <span class="pl-k">/</span> <span class="pl-c1">100</span> ),</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">			canvas,</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">			context</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">		);</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// remove preview</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">unfreeze_snap</span>) <span class="pl-v">this</span>.<span class="pl-en">unfreeze</span>();</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">snap</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">user_callback</span>, <span class="pl-smi">user_canvas</span>) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// take snapshot and return image data uri</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> params <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>;</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-smi">loaded</span>) <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">WebcamError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Webcam is not loaded yet<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// if (!this.live) return this.dispatch(&#39;error&#39;, new WebcamError(&quot;Webcam is not live yet&quot;));</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>user_callback) <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">WebcamError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please provide a callback function or canvas to snap()<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// if we have an active preview freeze, use that</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">preview_active</span>) {</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-en">savePreview</span>( user_callback, user_canvas );</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// create offscreen canvas element to hold pixels</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> canvas <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">canvas</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>;</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">canvas</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>;</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> context <span class="pl-k">=</span> <span class="pl-smi">canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// flip canvas horizontally if desired</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">flip_horiz</span>) {</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">context</span>.<span class="pl-en">translate</span>( <span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>, <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">context</span>.<span class="pl-en">scale</span>( <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// create inline function, called after image load (flash) or immediately (native)</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-en">func</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// render image if needed (flash)</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">src</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-c1">width</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-c1">height</span>) {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">context</span>.<span class="pl-en">drawImage</span>(<span class="pl-v">this</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>, <span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>);</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// crop if desired</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span>) {</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> crop_canvas <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">crop_canvas</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span>;</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">crop_canvas</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span>;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> crop_context <span class="pl-k">=</span> <span class="pl-smi">crop_canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">crop_context</span>.<span class="pl-en">drawImage</span>( canvas, </td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( (<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) <span class="pl-k">-</span> (<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) ),</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( (<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) <span class="pl-k">-</span> (<span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>) ),</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span>,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span>,</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">params</span>.<span class="pl-smi">crop_width</span>,</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">params</span>.<span class="pl-smi">crop_height</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// swap canvases</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">				context <span class="pl-k">=</span> crop_context;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">				canvas <span class="pl-k">=</span> crop_canvas;</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// render to user canvas if desired</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (user_canvas) {</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> user_context <span class="pl-k">=</span> <span class="pl-smi">user_canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">user_context</span>.<span class="pl-en">drawImage</span>( canvas, <span class="pl-c1">0</span>, <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fire user callback if desired</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">user_callback</span>(</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">				user_canvas <span class="pl-k">?</span> <span class="pl-c1">null</span> <span class="pl-k">:</span> <span class="pl-smi">canvas</span>.<span class="pl-c1">toDataURL</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>image/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">params</span>.<span class="pl-smi">image_format</span>, <span class="pl-smi">params</span>.<span class="pl-smi">jpeg_quality</span> <span class="pl-k">/</span> <span class="pl-c1">100</span> ),</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">				canvas,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">				context</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// grab image frame from userMedia or flash movie</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">userMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// native implementation</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">context</span>.<span class="pl-en">drawImage</span>(<span class="pl-v">this</span>.<span class="pl-smi">video</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_width</span>, <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">dest_height</span>);</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fire callback right away</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">func</span>();</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// flash fallback</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> raw_data <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">getMovie</span>().<span class="pl-en">_snap</span>();</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// render to image, fire callback when complete</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> img <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Image</span>();</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">img</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> func;</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">img</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>data:image/<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">image_format</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>;base64,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> raw_data;</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">configure</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">panel</span>) {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// open flash configuration panel -- specify tab name:</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// &quot;camera&quot;, &quot;privacy&quot;, &quot;default&quot;, &quot;localStorage&quot;, &quot;microphone&quot;, &quot;settingsManager&quot;</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>panel) panel <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>camera<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-en">getMovie</span>().<span class="pl-en">_configure</span>(panel);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">flashNotify</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">msg</span>) {</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// receive notification from flash about event</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">switch</span> (type) {</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>flashLoadComplete<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// movie loaded successfully</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">loaded</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>cameraLive<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// camera is live and ready to snap</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">live</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>live<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Flash error</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">FlashError</span>(msg));</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">default</span>:</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// catch-all event, just in case</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// console.log(&quot;webcam flash_notify: &quot; + type + &quot;: &quot; + msg);</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">b64ToUint6</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">nChr</span>) {</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// convert base64 encoded character to 6-bit integer</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> nChr <span class="pl-k">&gt;</span> <span class="pl-c1">64</span> <span class="pl-k">&amp;&amp;</span> nChr <span class="pl-k">&lt;</span> <span class="pl-c1">91</span> <span class="pl-k">?</span> nChr <span class="pl-k">-</span> <span class="pl-c1">65</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">:</span> nChr <span class="pl-k">&gt;</span> <span class="pl-c1">96</span> <span class="pl-k">&amp;&amp;</span> nChr <span class="pl-k">&lt;</span> <span class="pl-c1">123</span> <span class="pl-k">?</span> nChr <span class="pl-k">-</span> <span class="pl-c1">71</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">:</span> nChr <span class="pl-k">&gt;</span> <span class="pl-c1">47</span> <span class="pl-k">&amp;&amp;</span> nChr <span class="pl-k">&lt;</span> <span class="pl-c1">58</span> <span class="pl-k">?</span> nChr <span class="pl-k">+</span> <span class="pl-c1">4</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">:</span> nChr <span class="pl-k">===</span> <span class="pl-c1">43</span> <span class="pl-k">?</span> <span class="pl-c1">62</span> <span class="pl-k">:</span> nChr <span class="pl-k">===</span> <span class="pl-c1">47</span> <span class="pl-k">?</span> <span class="pl-c1">63</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">base64DecToArr</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">sBase64</span>, <span class="pl-smi">nBlocksSize</span>) {</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// convert base64 encoded string to Uintarray</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> sB64Enc <span class="pl-k">=</span> <span class="pl-smi">sBase64</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">A-Za-z0-9</span><span class="pl-cce">\+\/</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), nInLen <span class="pl-k">=</span> <span class="pl-smi">sB64Enc</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">			nOutLen <span class="pl-k">=</span> nBlocksSize <span class="pl-k">?</span> <span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((nInLen <span class="pl-k">*</span> <span class="pl-c1">3</span> <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">/</span> nBlocksSize) <span class="pl-k">*</span> nBlocksSize <span class="pl-k">:</span> nInLen <span class="pl-k">*</span> <span class="pl-c1">3</span> <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>, </td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">			taBytes <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(nOutLen);</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> nMod3, nMod4, nUint24 <span class="pl-k">=</span> <span class="pl-c1">0</span>, nOutIdx <span class="pl-k">=</span> <span class="pl-c1">0</span>, nInIdx <span class="pl-k">=</span> <span class="pl-c1">0</span>; nInIdx <span class="pl-k">&lt;</span> nInLen; nInIdx<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">			nMod4 <span class="pl-k">=</span> nInIdx <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">			nUint24 <span class="pl-k">|=</span> <span class="pl-v">this</span>.<span class="pl-en">b64ToUint6</span>(<span class="pl-smi">sB64Enc</span>.<span class="pl-c1">charCodeAt</span>(nInIdx)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span> <span class="pl-k">-</span> <span class="pl-c1">6</span> <span class="pl-k">*</span> nMod4;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (nMod4 <span class="pl-k">===</span> <span class="pl-c1">3</span> <span class="pl-k">||</span> nInLen <span class="pl-k">-</span> nInIdx <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (nMod3 <span class="pl-k">=</span> <span class="pl-c1">0</span>; nMod3 <span class="pl-k">&lt;</span> <span class="pl-c1">3</span> <span class="pl-k">&amp;&amp;</span> nOutIdx <span class="pl-k">&lt;</span> nOutLen; nMod3<span class="pl-k">++</span>, nOutIdx<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">					taBytes[nOutIdx] <span class="pl-k">=</span> nUint24 <span class="pl-k">&gt;&gt;&gt;</span> (<span class="pl-c1">16</span> <span class="pl-k">&gt;&gt;&gt;</span> nMod3 <span class="pl-k">&amp;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">				nUint24 <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> taBytes;</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">upload</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">image_data_uri</span>, <span class="pl-smi">target_url</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// submit image data to server using binary AJAX</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> form_elem_name <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">params</span>.<span class="pl-smi">upload_name</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>webcam<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// detect image format from within image_data_uri</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> image_fmt <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">image_data_uri</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span>image<span class="pl-cce">\/</span>(<span class="pl-c1">\w</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>))</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">			image_fmt <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Cannot locate image format in Data URI<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// extract raw base64 data from Data URI</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> raw_image_data <span class="pl-k">=</span> <span class="pl-smi">image_data_uri</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span>image<span class="pl-cce">\/</span><span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-cce">\;</span>base64<span class="pl-cce">\,</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// contruct use AJAX object</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> http <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">http</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>, target_url, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// setup progress events</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">http</span>.<span class="pl-smi">upload</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">http</span>.<span class="pl-smi">upload</span>.<span class="pl-smi">addEventListener</span>) {</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">http</span>.<span class="pl-smi">upload</span>.<span class="pl-c1">addEventListener</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>progress<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">lengthComputable</span>) {</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> progress <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">loaded</span> <span class="pl-k">/</span> <span class="pl-smi">e</span>.<span class="pl-smi">total</span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Webcam</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>uploadProgress<span class="pl-pds">&#39;</span></span>, progress, e);</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// completion handler</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">http</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (callback) <span class="pl-smi">callback</span>.<span class="pl-c1">apply</span>( self, [<span class="pl-smi">http</span>.<span class="pl-c1">status</span>, <span class="pl-smi">http</span>.<span class="pl-c1">responseText</span>, <span class="pl-smi">http</span>.<span class="pl-c1">statusText</span>] );</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Webcam</span>.<span class="pl-en">dispatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>uploadComplete<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">http</span>.<span class="pl-c1">status</span>, <span class="pl-smi">http</span>.<span class="pl-c1">responseText</span>, <span class="pl-smi">http</span>.<span class="pl-c1">statusText</span>);</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// create a blob and decode our base64 to binary</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> blob <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Blob</span>( [ <span class="pl-v">this</span>.<span class="pl-en">base64DecToArr</span>(raw_image_data) ], {type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>image/<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>image_fmt} );</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// stuff into a form, so servers can easily receive it as a standard file upload</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> form <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FormData</span>();</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">form</span>.<span class="pl-c1">append</span>( form_elem_name, blob, form_elem_name<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">image_fmt</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>e<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// send data to server</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">http</span>.<span class="pl-c1">send</span>(form);</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Webcam</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) {</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">define</span>( <span class="pl-k">function</span>() { <span class="pl-k">return</span> Webcam; } );</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">} </td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Webcam;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">} </td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">window</span>.<span class="pl-smi">Webcam</span> <span class="pl-k">=</span> Webcam;</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">}(<span class="pl-c1">window</span>));</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.15095s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-UkOt6gRG+T2/d6+yEJixISCaJ41MlkKZuMQ4UaJqOvQ=" src="https://assets-cdn.github.com/assets/frameworks-5243adea0446f93dbf77afb21098b121209a278d4c964299b8c43851a26a3af4.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ttmphlm0c7fuMw38Ynkfux5vokIiRbGp6H3F57IOJVo=" src="https://assets-cdn.github.com/assets/github-b6d9a98659b473b7ee330dfc62791fbb1e6fa2422245b1a9e87dc5e7b20e255a.js"></script>
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

