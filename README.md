# A React App to Get Good Doggos

An App created using React made to fetch 8 random files of dogs on demand, which can be accessed at any time [here.](https://eachau.github.io/get-doggo-app)

To refresh, simply click the button and behold your new good boys. 

## Assumptions and Liberties Taken

I should point out that this is my first *ever* foray with *HTML*, *JavaScript* and *React* as a whole, including associated managers such as *Node*. 

As such, there are several liberties within the code with regards to the given specifications, in lieu of having had only two and a half days to familiarise myself with the above.

- The app can only parse dogs of common file types `.jpg`, `.jpeg`, `.png`, `.gif`, `.mp4`, and `.webm`. All other dogs of more rare, esoteric file types are skipped entirely.   
    - **NOTE:** Within the code, should fewer than 8 dogs be fetched on the first pass due to a skipped file type, a second pass will be made, fetching up to an additional 8 dogs (only the first 8 dogs total will be displayed), and no further. The core assumption is made that the skipped file types will be rare enough that two passes will always be enough to obtain 8 displayable dogs. 

- The specifications ask for a responsive display accounting for desktop and mobile screens. Due to difficulty and inexperience with the platform, only a temporary indirect measure was implemented, utilizing hardcoded widths to accommodate the required number of dogs per "row".
    - The assumption is made that 250px per dog is enough to accommodate 4 dogs per row on a regular desktop screen. Furthermore, 150px per dog is assumed enough for a single dog on a regular mobile screen (assuming a vertical screen).