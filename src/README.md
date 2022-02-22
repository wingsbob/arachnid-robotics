#  Arachnid Robotics Navigation

To calculate the output of navigation, you can run the following command:
```
node -r ts-node/register src inputString
```
Where `inputString` is in a valid format.

Versionless format
`x,y,directionList`

V1 format
`x,y,version,directionList`

V2 format
`x,y,version,orientation,directionList`

Valid directions are `F` `B` `L` and `R`

Valid versions are 1 or 2
