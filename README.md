# installing

`yarn`

# deploying

Before deploying, make sure the diff makes sense:

`npx cdk diff --all --profile {your AWS profile} --require-approval never --progress events`

e.g.

`npx cdk diff --all --profile nlp-staging --require-approval never --progress events`

If everything looks fine, deploy:

`npx cdk deploy --all --profile {your AWS profile} --require-approval never --progress events`
