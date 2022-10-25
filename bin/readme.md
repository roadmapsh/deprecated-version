## Scripts

## Migrating Old Guides

* Copy guides.json to ./data/guides.json
* Copy guides files to ./src/guides
* Run `node bin/migrate-guides.js`

## Migrating Old Content

* Copy roadmap content files to the relevant roadmap inside ./src/roadmaps/content
* Run `node bin/migrate-content.js`
