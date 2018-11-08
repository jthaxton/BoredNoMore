# BoredNoMore
[live demo](https://borednomore.herokuapp.com/#/)

## Technology
BoredNoMore was built with a MongoDB database, Express.js, React.js, and Node.js (MERN). It also uses Yelp and Ticketmaster API.

BoredNoMore is a tool that curates activities for users based on four categories: Streams, Movies, Live Events, and Restaurants.

![Homepage](picture.png "Homepage")

Users first take a quiz to determine their interests. After completing the quiz, users are given the option to create an account.

Based on their interests, BoredNoMore will request relevant information from TicketMaster and Yelp and will use its sophisticated algorithm to determine one optimal choice for each of the four categories.



![Categories](picture1.png "Categories")
![Results](picture2.png "Results")

Users may click on the returned picture to open its third party site in another tab.

![Yelp](picture3.png "Yelp")

## Code Samples
We used Express to create backend routes from the quiz to the Mongoose database. When a user is created, they are also given various preferences with a value of `null`, so we make a patch call to `user.preferences`. Below is a snippet that takes all data from the quiz and formats it into a structure that's easy to read and send into the User database.

```javascript
const router = express.Router();

...

router.patch("/preferences", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findByIdAndUpdate(req.user.id, {
          "preferences.cuisine": req.body.cuisine,
          "preferences.movieGenre": req.body.movieGenre,
          "preferences.streamGenre": req.body.streamGenre,
          "preferences.liveEventType": req.body.liveEventType,
          "preferences.zip": req.body.zip
        }).then(user => {
                  res.json({
                    user: req.user
                });
            });
         });
```
The submitted quiz data can just as easily be fetched with the below call:

```javascript
router.get("/preferences", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const user = User.findOne({"_id": req.user.id});
        res.json(req.user);
    });
```