import express from 'express';
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('good_corner.sqlite');
import { v4 as uuidv4 } from 'uuid';


const app = express();
const PORT = 4000;

app.use(express.json());

// json object

let articles = [
    {
    id: "1",
    title: "Neuroscience",
    subtitle: "teh wonders of the brain",
    intro: "I really like to blog about the sciences of the mind",
    },
    {
    id: "2",
    title: "wtvr",
    subtitle: "teh wonders of the mind",
    intro: "I really like this subject",
    }
    ];

// get route all articles

 app.get("/articles", (req, res) => {
    
    // db.all("SELECT * FROM ad", (err, rows) => {
    //     if (err) {
    //         console.error(err.message);
    //         res.status(500).send("Error occurred");
    //         return;
    //     }
    //     res.send(rows);
    // });
    db.all("SELECT * FROM ad", (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send("Error occurred");
                return;
            }
            res.send(rows);
        });


    //  console.log("tell me something");

    //  res.send(articles);
 });

//  create route insert article

app.post('/articles', (req, res) => {

    console.log(req.body);
    

    const newAdd = {
        id: articles.length + 1,
        ...req.body
      }
      
    articles.push(newAdd);
    
    res.send("Request received, check the backend terminal");

});

// delete article

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    
    articles = articles.filter(article => article.id.toString() !== id);

    res.send(`Article with the id ${id} got deleted!`);
});


// modify existing article by id 

app.patch('/articles/:id', (req, res) => {
    
    // console.log("id of the ad to update", req.params.id);

    console.log("props to update", req.body);
    const { id } = req.params;
    const {title, subtitle, intro} = req.body;


    const article = articles.find((article)=>article.id.toString() === id);
    
    if(article){
      if(title) article.title = title;  
      if(subtitle) article.title = title;  
      if(intro) article.title = title;  
    }
    


    res.send(`article with the ${id} has been modified`);


});




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
