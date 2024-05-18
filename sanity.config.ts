import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';

const config = defineConfig({
projectId: "d266js6t",
dataset: "production",
title: "Quest List",
apiVersion: "2024-04-23",
basePath: "/sanity",
plugins: [deskTool()],
schema: { types: schemas}

});

export default config;