import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const app = express();
const PORT = 4000;


let articles = [{
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


 app.get("/articles", (req, res) => {
    
     console.log("tell me something");

     res.send(articles);
 });

app.post('/articles', (req, res) => {

    console.log(req.body);
    articles.push(req.body);
    
    res.send("Request received, check the backend terminal");

});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    
    articles = articles.filter(article => article.id.toString() !== id);

    res.send(`Article with the id ${id} got deleted!`);
});

app.patch('/articles/:id', (req, res) => {
    const { id } = req.params;
    const { title, subtitle, intro } = req.body;

    const article = articles.find((article) => article.id.toString() === id);

    if(article) {
    if (title) article.title = title;
    if (subtitle) article.subtitle = subtitle;
    if (intro) article.intro = intro;

    res.send(`article with ${id} has been updated`);

    
}

});




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
