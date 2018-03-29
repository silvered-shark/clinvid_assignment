# clinvid_assignment
A Web App based on Nodejs converts a queryString into the JSON format.

## Requirements
Nodejs(v8.10.0)

Expressjs(3x)

## Working 
* first install the dependencies by "npm install".
* then start the server by "node index".
* then make a get request on api "http://localhost:3000/converter/queryString" where queryString is given string.
* it will return the response in the required JSON format.

## For Example
#### queryString => 
               profile|73241232|<Aamir><Hussain><Khan>|<Mumbai><<72.872075><19.075606>>|73241
               232.jpg**followers|54543342|<Anil><><Kapoor>|<Delhi><<23.23><12.07>>|54543342.
               jpg@@|12311334|<Amit><><Bansal>|<Bangalore><<><>>|12311334.jpg

#### response => 
               {
               "id":"12311334",
               "name":{"first":"Aamir","middle":"Hussain","last":"Khan"},
               "location":
                    {
                      "name":"Mumbai",
                      "long":"72.872075",
                      "lat":"19.075606"
                    },
               "imageId":"73241 232.jpg",
               "followers":
                    [
                     {
                       "id":"54543342",
                       "name":
                           {
                            "first":"Anil",
                            "middle":"",
                            "last":"Kapoor"
                            },
                            "location":
                               {
                                "name":"Delhi",
                                "long":"23.23",
                                "lat":"12.07"
                                }
                      },
                      {
                        "id":"12311334",
                        "name":
                            {
                             "first":"Amit",
                             "middle":"",
                             "last":"Bansal"
                            },
                             "location":
                                {
                                 "name":"Bangalore",
                                 "long":"",
                                 "lat":""
                                 }
                        }
                     ]
                  }
               
