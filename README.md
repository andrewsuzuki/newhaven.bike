# newhaven.bike

newhaven.bike is the landing page for cylists in New Haven, CT.

See [plan.md](./doc/plan.md).

## Todos

- Content (see doc/plan.md)
- Bike path / recommended route map
  - react-map-gl with GeoJSON?
- Route Finder Remaining
  - Copy all routes to my RideWithGPS
  - More routes...Canal Trail? Mulberry? West Woods?
- Domain name

## Develop

1. Install Gatsby.
2. Run `gatsby develop`
3. Go to `http://localhost:8000`

## Production

Automatically deployed to Netlify from the `production` branch.

```shell
git checkout production
git merge master
git push --all
git checkout master
```
