# Frontdoor

## Requirements
* dotnet core sdk
* node
* knowledge of QnA Maker

## Environment variables

QnAMakerEndpointKey
QnAMakerEndpoint
QnAMakerBuyerKbId
QnAMakerSellerKbId
EventbriteToken
SlackFeedbackURL

## Starting Development Environment
`api/dotnet watch run`
`ui/npm run start`

## Generating agency.tsv
In `tools/directoryConvertor` there is a console application that takes the [export.xml](https://data.gov.au/dataset/ds-dga-10fcf020-a652-45d8-b17b-a1fbb4d13de5/details) and converts it into tsv usable with QnA Maker.

To run it, download the export.xml file and put it into `tools/directoryConvertor/data` folder. Once that is done, run `dotnet run` in `tools/directoryConvertor` and the `agencies.tsv` can be found in `tools/directoryConvertor/data`.
