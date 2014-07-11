ibad
====

MMS Internal Backup Alert Dashboard

Currently hosted at http://ibad-skunk.meteor.com

Currently this is a fairly dumb dashboard with the following features:
* Acknowledge/unacknowledge alerts to hide them from the main page
* Ability to see and unacknowledge acknowledged alerts
* Sort different ways, and the sorting is indicated by "radio button"-like behaviors
* Leaving comments
  * Features HTML stripping
  * Turns "naked URL" comments into links (comment must have no other text)
  * Commentors have names.
* Links to BRS NOC and MMS Backup Dashboard by MMS group ID

As this leverages Meteor, we get the following for free:
* Changes made anywhere are reflected everywhere immediately
* Everything comes out of MongoDB, so inserts are simple

TODO:
* Restrict publishing. Right now the whole DB is dumped to the client. Fine for this demo/toy state, not a good idea when dealing with a history of hundreds/thousands of events.
* Integrate with internal MongoDB auth to get names for "free" and to restrict access. Right now there is _no auth_. (Good news: no actual customer data, either!)
* Filtering/color highlighting by event type?
* Blocking certain group IDs entirely? Some groups are internal toy groups and notifications are pointless

Thanks Skunkworks 2 Electric Boogaloo!
