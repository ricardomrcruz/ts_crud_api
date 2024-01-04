import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import express, { Request, Response } from "express";
import cors from "cors";
import { validate } from "class-validator";
import sqlite3 from "sqlite3";
import Ad from "./entities/Ad";
import Tag from "./entities/Tag";
import Category from "./entities/Category";
import dataSource from "./config/db";
import { In, Like } from "typeorm";

import { buildSchema } from "type-graphql";
import TagResolver from "./resolvers/TagResolver";
import AdResolver from "./resolvers/AdResolver";



buildSchema({ resolvers: [AdResolver, TagResolver] }).then((schema) => {
  const server = new ApolloServer({ schema });
  startStandaloneServer(server, {
    listen: { port: 4001 },
  }).then(({ url }) => {
    console.log(`server ready on ${url}`);
  });
});





const app = express();

app.use(cors());
app.use(express.json());
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/tags", async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const tags = await Tag.find({
      where: { name: name ? Like(`%${name}%`) : undefined },
    });
    res.send(tags);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// get route all articles

app.get("/ads", async (req: Request, res: Response) => {
  const { tagIds, categoryId } = req.query;
  const title = req.query.title as string | undefined;

  const tIds =
    typeof tagIds === "string" && tagIds.length > 0
      ? tagIds.split(",").map((t) => parseInt(t, 10))
      : undefined;

  const catId =
    typeof categoryId === "string" && categoryId.length > 0
      ? parseInt(categoryId, 10)
      : undefined;

  try {
    const ads = await Ad.find({
      relations: {
        category: true,
        tags: true,
      },
      where: {
        tags: {
          id: tIds ? In(tIds) : undefined,
        },
        title: title ? Like(`%${title}%`) : undefined,
        category: {
          id: catId,
        },
      },
      order: {
        createdAt: "desc",
      },
      take: 10,
    });
    res.send(ads);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/categories", async (req: Request, res: Response) => {
  const { name } = req.query;

  try {
    const categories = await Category.find({
      relations: {
        ads: true,
      },
      where: { name: name ? Like(`%${name}%`) : undefined },
    });
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/categories", async (req: Request, res: Response) => {
  try {
    const newCategory = Category.create(req.body);
    const errors = await validate(newCategory);
    if (errors.length > 0) return res.status(422).send({ errors });
    const newCategoryWithId = await newCategory.save();
    res.send(newCategoryWithId);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/tags", async (req: Request, res: Response) => {
  try {
    const newTag = Tag.create(req.body);
    const errors = await validate(newTag);
    if (errors.length > 0) return res.status(422).send({ errors });
    const newTagWithId = await newTag.save();
    res.send(newTagWithId);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//  create route insert article

app.post("/ads", async (req: Request, res: Response) => {
  try {
    /*
      const newAd = new Ad()
      newAd.title = req.body.title
      newAd.price = req.body.price
      ...
      const newAdWithId = await newAd.save();
    */
    const newAd = Ad.create(req.body);
    const errors = await validate(newAd);
    if (errors.length > 0) return res.status(422).send({ errors });
    const newAdWithId = await newAd.save();
    res.send(newAdWithId);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/addcategory", (req: Request, res: Response) => {
  const category = new Category();
  // category.id_category = req.body.id_category;
  category.name = req.body.name;

  category.save();
  res.send(category);
});

app.put("/ads/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const ad = await Ad.findOneBy({ id });
  if (ad !== null) {
    ad.title = req.body.title;
    ad.description = req.body.description;
    // ad.author = req.body.author;
    ad.price = req.body.price;
    ad.createdAt = req.body.createdAt;
    ad.location = req.body.location;
    // ad.id_category = req.body.id_category;
    ad.save();
  }
  res.send(ad);
});

// DELETE AD

app.delete("/ads/:id", async (req: Request, res: Response) => {
  try {
    const adToDelete = await Ad.findOneBy({ id: parseInt(req.params.id, 10) });
    if (!adToDelete) return res.sendStatus(404);
    await adToDelete.remove();
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET AD BY ID
app.get("/ads/:id", async (req: Request, res: Response) => {
  try {
    const ad = await Ad.findOne({
      where: { id: parseInt(req.params.id, 10) },
      relations: { category: true, tags: true },
    });
    if (!ad) return res.sendStatus(404);
    res.send(ad);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// modify existing article by id

app.patch("/ads/:id", async (req: Request, res: Response) => {
  try {
    const adToUpdate = await Ad.findOneBy({ id: parseInt(req.params.id, 10) });
    if (!adToUpdate) return res.sendStatus(404);
    await Ad.merge(adToUpdate, req.body);
    const errors = await validate(adToUpdate);
    if (errors.length > 0) return res.status(422).send({ errors });
    res.send(await adToUpdate.save());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.listen(PORT, async () => {
  await dataSource.initialize();
  console.log("Server launch on http://localhost:4000");
});
