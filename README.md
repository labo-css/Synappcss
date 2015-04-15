![Synappcss](http://i.imgur.com/Dl3C7h4.png)

*Another front-end framework you don't really need...*

# Synappcss : what is it?
So... i putted jade/sass/bourbon/neat/pleeease/imageoptim/coffeescript & more together... Gulp do the work nicely but **i still need to improve it**. Just look at the package.json or the gulpfile if you want to know more or contribute.

It's a personnal work, i do it with no intend to make it perfect, but if i do it well, i will be happy.

As a French, i also intend to make a french alias to any sass/jade mixin i wrote. And even translate some famous bourbon/neat mixins to french. Easy to do.

## Roadmap
[Kanboard](http://kanboard.net/) powered, it's [here](http://wip.labo-css.fr/?controller=board&action=readonly&token=1a197b5dbf04656bd6573c6c8e318d489d586fdbcbbe7211ab3f8a534499). You can [open an issue](https://github.com/labo-css/Synappcss/issues/new) on this repository if you have any idea on how i can improve this micro framework. Especially on the gulpfile.

## CLI

- **gulp** = default task (basically compile & optimise all the things)
- **gulp watch** = same as gulp + browser-sync
- **gulp clean:prod** = clean the prod folder (sometimes you will need this, trust me)
- **gulp clean:dev** = *just joking, are u a masochist?*
- **gulp zip:prod** = zip the prod folder
- **gulp zip:dev** = zip the dev folder
- **gulp img** = optimise pictures
- And some more for individual tasks (like gulp js or gulp coffee...)

- I recommend using gulp watch in dev, and when you want to go in prod use : gulp clean:prod & gulp & gulp zip:prod
- If you have any idea on how to "do more" with my gulpfile, tell me. (things like dploy for example)

## Note :

Still learning git/github but i figured out this : 

Github seems to be annoying with tabs, but you can append ?ts=2 or ?ts=4 to the URL to change the tab-size. For example : https://github.com/labo-css/Synappcss/blob/master/dev/sass/style.sass?ts=2
OR: https://userstyles.org/styles/userjs/70979/GitHub%3A%20better-sized%20tabs%20in%20code.user.js?ik-defaultsize=ik-2&ik-rubysize=ik-2&.user.js install this with greasemonkey

Also, i'm french so if you are... ce ne sera pas la peine de s'embêter à parler anglais.

Thats all !
