import "reflect-metadata";
import express, {Request, Response} from 'express';
import sqlite3 from 'sqlite3';
import  Ad  from './entities/Ad';
import  dataSource  from "./config/db";


const db = new sqlite3.Database('good_corner.sqlite');

const app = express();
const PORT = 4000;

app.use(express.json());

// json object

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  
  
  });

// get route all articles

 app.get("/ads", async (req: Request, res: Response) => {
  
  const ads = await Ad.find();
  res.send(ads);

  
        // db.all("SELECT * FROM ad2", (err, rows:[Ad]) => {
        //         if (!err) return res.send(rows);
        //         console.log(err);
        //         res.sendStatus(500);
        // });
    //  console.log("tell me something");
    //  res.send(articles);
 });

//  create route insert article

app.post('/ads', (req: Request, res: Response) => {

    const ad = new Ad();
    ad.id = req.body.id;
    ad.title = req.body.title;  
    ad.description = req.body.description;  
    ad.author = req.body.author;  
    ad.price = req.body.price;  
    ad.createdAt = req.body.createdAt;  
    ad.location = req.body.location;  
    ad.id_category = req.body.id_category;  
  
    ad.save();
    res.send(ad);
  
  
  
  // console.log(req.body);
    
    // const newAd: Ad = {
    //     ...req.body,
    //     createdAt: new Date().toISOString(),
    // };

    // db.run(
    //     "INSERT INTO ad2 (title, author, description, price, picture, location, createdAt, id_cat) VALUES ($title, $author, $description, $price, $picture, $location, $createdAt, $id_cat)",
    //     {
    //         $title: newAd.title,
    //         $description: newAd.description,
    //         $author: newAd.author,
    //         $price: newAd.price,
    //         $createdAt: newAd.createdAt,
    //         $picture: newAd.picture,
    //         $location: newAd.location,
    //         $id_cat: newAd.id_cat,
    //     },
    //     function (this: any, err: any){
    //         if(!err) return res.send({...newAd, id: this.lastID});
    //         console.log(err);
    //         res.sendStatus(500);
    //         }
    // ); 
    // ads.push(newAd);
    // res.send("Request received, check the backend terminal");
});

app.put('/ads/:id', async (req: Request, res:Response) => {
    
    const id = parseInt(req.params.id);
    const ad = await Ad.findOneBy({id})
    if (ad !== null) {
    ad.title = req.body.title;  
    ad.description = req.body.description;  
    ad.author = req.body.author;  
    ad.price = req.body.price;  
    ad.createdAt = req.body.createdAt;  
    ad.location = req.body.location;  
    ad.id_category = req.body.id_category; 
    ad.save();
    }
    res.send(ad);

  });

// DELETE AD

app.delete('/delete/:id', async (req: Request, res: Response) => {
    
  const id = parseInt(req.params.id);
  await Ad.delete({ id });
  res.send('OK');
  
  
  
  
  // db.get("SELECT * FROM ad2 WHERE id=?", [req.params.id], (err, row) => {
    //     if(err){
    //         console.log(err);
    //         res.sendStatus(500);
    //     };
    // db.run("DELETE FROM ad2 where id=?", [req.params.id], (err: any) =>{
    //     if(!err)return res.send(204);
    

    //     console.log(err);
    //     res.sendStatus(500);
    //  });
    // });
    
    // const { id } = req.params;

    // articles = articles.filter(article => article.id.toString() !== id);

    // res.send(`Article with the id ${id} got deleted!`);
});

// GET AD BY ID

app.get("/ads/:id", (req: Request, res: Response) => {
    // db.get("SELECT * FROM ad2 WHERE id = ?", [req.params.id], (err, row) => {
    //   if (err) {
    //     console.log(err);
    //     return res.sendStatus(500);
    //   }
    //   if (!row) return res.sendStatus(404);
    //   res.send(row);
    // });
  });


// modify existing article by id 

app.patch('/ads/:id', (req: Request, res:Response) => {
    
    // db.get("SELECT * FROM ad WHERE id = ?"), [req.params.id], (err:any, row:any) => {
    //     if (err) {
    //       console.log(err);
    //       return res.sendStatus(500);
    //     }
    //     if (!row) return res.sendStatus(404);

    // creates a string with this shape : "title = $title, description = $description, ..."
    // const setProps = Object.keys(req.body)
    //   .reduce<string[]>((acc, prop) => [...acc, `${prop} = $${prop}`], [])
    //   .join(", ");

    // creates an object with this shape : {$title: "title sent by client", "$description: " description sent by client", ...}
    // const propsToUpdate = Object.keys(req.body).reduce(
    //   (acc, prop) => ({ ...acc, [`$${prop}`]: req.body[prop] }),
    //   {}
    // );

    // db.run(
    //     `UPDATE ad SET ${setProps} WHERE id = $id`,
    //     { ...propsToUpdate, $id: req.params.id },
    //     (err: any) => {
    //       if (!err) return res.send({ ...row, ...req.body });
    //       console.log(err);
    //       res.sendStatus(500);
    //     }
    //   );
    
    
    // console.log("id of the ad to update", req.params.id);

    // console.log("props to update", req.body);
    // const { id } = req.params;
    // const {title, subtitle, intro} = req.body;

    // const article = articles.find((article)=>article.id.toString() === id);
    
    // if(article){
    //   if(title) article.title = title;  
    //   if(subtitle) article.title = title;  
    //   if(intro) article.title = title;  
    // }
    
    // res.send(`article with the ${id} has been modified`);

    });
// });




// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.listen(4000, async () => {
  await dataSource.initialize();
  console.log('Server launch on http://localhost:4000');
});