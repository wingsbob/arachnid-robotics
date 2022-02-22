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

V3 format
`x,y,version,orientation,directionList`

Valid directions are `F` `B` `L` and `R` for versionless, version 1 and 2. For version 3 boosts can be specified by adding 1-5 ahead of a `F` command.

If the total of boosts for version 3 exceeds the fuel requirement, then an error will occur during operation. Boosts above the overheating threshold will be detected during input validation.

Valid versions are 1, 2 or 3
